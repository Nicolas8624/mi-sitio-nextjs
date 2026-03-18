// components/BlogSection.tsx
// Server Component que mapea blogPosts a BlogCard.

import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section className="px-5 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}