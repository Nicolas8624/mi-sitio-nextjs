"use client";
// components/ContactForm.tsx
// Client component con useActionState, validación por campo y spinner.

import { useActionState } from "react";
import { sendContactForm } from "@/app/actions/contact";
import type { ContactFormResponse } from "@/types";

const initialState: ContactFormResponse = { success: false, message: "", errors: {} };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);

  return (
    <section className="px-5 py-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contacto
        </h2>
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <input name="name" placeholder="Nombre" className="w-full border rounded-md px-3 py-2" />
            {state.errors?.name && (
              <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
            )}
          </div>
          <div>
            <input name="email" placeholder="Email" className="w-full border rounded-md px-3 py-2" />
            {state.errors?.email && (
              <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
            )}
          </div>
          <div>
            <input name="subject" placeholder="Asunto" className="w-full border rounded-md px-3 py-2" />
            {state.errors?.subject && (
              <p className="text-red-500 text-sm mt-1">{state.errors.subject}</p>
            )}
          </div>
          <div>
            <textarea name="message" placeholder="Mensaje" rows={5} className="w-full border rounded-md px-3 py-2" />
            {state.errors?.message && (
              <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>
            )}
          </div>
          <button type="submit" disabled={isPending} className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50">
            {isPending ? "Enviando..." : "Enviar"}
          </button>
          {state.message && (
            <p className={`text-center font-medium ${state.success ? "text-green-600" : "text-red-500"}`}>
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}