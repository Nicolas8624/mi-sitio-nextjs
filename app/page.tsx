// app/page.tsx - Página principal (ruta: /)
// Server Component que compone las secciones.

import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import { heroImage } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />
      <BlogSection />
      <ContactForm />
    </>
  );
}