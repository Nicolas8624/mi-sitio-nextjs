"use client";
// components/ContactForm.tsx

import { useActionState } from "react";
import { sendContactForm } from "@/app/actions/contact";
import type { ContactFormResponse } from "@/types";

const initialState: ContactFormResponse = { success: false, message: "", errors: {} };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);

  return (
    <section className="bg-gray-900 text-white px-5 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1">Nombre:</label>
            <input name="name" placeholder="Tu nombre" className="w-full border border-gray-600 bg-white text-gray-900 rounded-md px-3 py-2" />
            {state.errors?.name && <p className="text-red-400 text-sm mt-1">{state.errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Asunto:</label>
            <input name="subject" placeholder="Asunto" className="w-full border border-gray-600 bg-white text-gray-900 rounded-md px-3 py-2" />
            {state.errors?.subject && <p className="text-red-400 text-sm mt-1">{state.errors.subject}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email:</label>
            <input name="email" placeholder="tu@email.com" className="w-full border border-gray-600 bg-white text-gray-900 rounded-md px-3 py-2" />
            {state.errors?.email && <p className="text-red-400 text-sm mt-1">{state.errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Mensaje:</label>
            <textarea name="message" placeholder="Tu mensaje..." rows={5} className="w-full border border-gray-600 bg-white text-gray-900 rounded-md px-3 py-2" />
            {state.errors?.message && <p className="text-red-400 text-sm mt-1">{state.errors.message}</p>}
          </div>
          <button type="submit" disabled={isPending} className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50">{isPending ? "Enviando..." : "Enviar"}</button>
          {state.message && <p className={`text-center font-medium ${state.success ? "text-green-400" : "text-red-400"}`}>{state.message}</p>}
        </form>
      </div>
    </section>
  );
}