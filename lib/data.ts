// lib/data.ts
import type { GalleryImageType, BlogPost, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mi Sitio Web",
  description: "Galería, blog y contacto – Taller SENA CEET",
  url: "https://mi-sitio.azurestaticapps.net",
  author: "SENA CEET – ADSO",
  year: new Date().getFullYear(),
};

export const heroImage = {
  src: "/img/header.jpg",
  alt: "Imagen principal del sitio",
};

export const galleryImages: GalleryImageType[] = [
  { id:1, src:"/img/img1.jpg", alt:"Caballo en el atardecer", width:1024, height:768 },
  { id:2, src:"/img/img2.jpg", alt:"Batalla medieval", width:1024, height:768 },
  { id:3, src:"/img/img3.jpg", alt:"Guerrero épico", width:1024, height:768 },
  { id:4, src:"/img/img4.jpg", alt:"Caballero en el atardecer", width:1024, height:768 },
  { id:5, src:"/img/img5.jpg", alt:"Criatura verde", width:1024, height:768 },
  { id:6, src:"/img/img6.jpg", alt:"Robot en oficina", width:1024, height:768 },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "inteligencia-artificial-trabajo",
    title: "IA en el Trabajo",
    date: "15 de marzo de 2025",
    excerpt: "Cómo la IA transforma los espacios de trabajo...",
    image: { src:"/img/img7.jpg", alt:"Robot en escritorio" },
  },
  {
    id: 2,
    slug: "futuro-interfaz-humano-maquina",
    title: "El Futuro de la Interfaz Humano-Máquina",
    date: "22 de marzo de 2025",
    excerpt: "Análisis de las tendencias en interfaces neuronales y la convergencia entre humanos y tecnología.",
    image: { src:"/img/img8.jpg", alt:"Interfaz futurista" },
  },
  {
    id: 3,
    slug: "innovacion-ciencia-tecnologia",
    title: "Innovación en Ciencia y Tecnología",
    date: "01 de abril de 2025",
    excerpt: "Descubrimientos recientes que están revolucionando la manera en que entendemos el mundo.",
    image: { src:"/img/img9.jpg", alt:"Ciencia y tecnología" },
  },
];