import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p className="font-sans text-lg font-bold text-white">Al Brujo Comida Peruana</p>
          <p>María Paz Pando Olavarria · RUC 0959990771001</p>
          <p>Av. 25 de Junio L9-10, Ciudadela Ciudad del Sol, Machala, El Oro, Ecuador</p>
        </div>
        <div className="flex gap-6">
          <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
            Política de privacidad
          </Link>
          <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
            Términos y condiciones
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs text-white/40">
        © {new Date().getFullYear()} Al Brujo Comida Peruana. Todos los derechos reservados.
      </p>
    </footer>
  );
}
