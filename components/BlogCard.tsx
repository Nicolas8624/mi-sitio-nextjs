// components/BlogCard.tsx
// Tarjeta reutilizable con next/image, Link de Next.js y layout flex responsivo.

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={post.image.src} alt={post.image.alt}
          fill className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <p className="text-sm text-gray-500">{post.date}</p>
        <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
        <p className="text-gray-600 text-sm flex-1">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}
          className="text-blue-500 hover:text-blue-700 font-medium text-sm">
          Leer más →
        </Link>
      </div>
    </article>
  );
}