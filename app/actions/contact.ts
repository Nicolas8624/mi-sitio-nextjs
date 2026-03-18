"use server";
// app/actions/contact.ts
// Server Action con validación server-side.

import type { ContactFormData, ContactFormResponse } from "@/types";

export async function sendContactForm(
  prevState: ContactFormResponse,
  formData: FormData
): Promise<ContactFormResponse> {
  const data: ContactFormData = {
    name: formData.get("name") as string,
    subject: formData.get("subject") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2)
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Ingresa un email válido.";
  if (!data.subject || data.subject.trim().length < 3)
    errors.subject = "El asunto debe tener al menos 3 caracteres.";
  if (!data.message || data.message.trim().length < 10)
    errors.message = "El mensaje debe tener al menos 10 caracteres.";

  if (Object.keys(errors).length > 0)
    return { success: false, message: "Por favor corrige los errores.", errors };

  return { success: true, message: "¡Mensaje enviado correctamente!" };
}