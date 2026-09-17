import Link from "next/link";

const NAV_LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#locales", label: "Locales" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-1 font-sans text-xl font-extrabold tracking-tight">
          <span className="text-brand-red">Al</span>
          <span className="text-brand-dark">Brujo</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-brand-dark/80 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-red transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/593986972622"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
