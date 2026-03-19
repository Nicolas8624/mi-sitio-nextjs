// components/Footer.tsx
// Server Component: Footer estático con año dinámico y border-top decorativo.

import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto border-t-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <p className="text-sm text-gray-400">
          © {siteConfig.year} {siteConfig.name} — {siteConfig.author}
        </p>
      </div>
    </footer>
  );
}