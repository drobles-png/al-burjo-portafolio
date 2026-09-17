import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y condiciones | Al Brujo Comida Peruana",
};

export default function TerminosYCondiciones() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-sans text-3xl font-bold text-brand-dark">
            Términos y condiciones
          </h1>
          <p className="mt-2 text-sm text-foreground/50">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-8 space-y-6 text-foreground/80">
            <p>
              Al acceder y utilizar este sitio web, operado por{" "}
              <strong>Al Brujo Comida Peruana</strong> (María Paz Pando
              Olavarria, RUC 0959990771001, Machala, El Oro, Ecuador), aceptas
              los siguientes términos y condiciones.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              1. Información del negocio
            </h2>
            <p>
              Al Brujo Comida Peruana es un negocio de comida registrado ante
              el Servicio de Rentas Internas (SRI) del Ecuador, dedicado a la
              elaboración y venta de platos de gastronomía peruana en sus
              locales de Machala.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              2. Pedidos y disponibilidad
            </h2>
            <p>
              Los pedidos realizados por WhatsApp, redes sociales o en el
              local están sujetos a disponibilidad de productos. Los precios y
              la carta pueden variar sin previo aviso. Los pagos se coordinan
              directamente con el local al momento del pedido o la entrega.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              3. Uso del sitio web
            </h2>
            <p>
              El contenido de este sitio (textos, imágenes, marca) es
              propiedad de Al Brujo Comida Peruana y se ofrece únicamente con
              fines informativos y de contacto. No está permitido reproducir
              el contenido sin autorización.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              4. Enlaces a terceros
            </h2>
            <p>
              Este sitio incluye enlaces a WhatsApp e Instagram. No somos
              responsables del contenido o las políticas de privacidad de
              esas plataformas.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              5. Contacto
            </h2>
            <p>
              Para consultas sobre estos términos, escríbenos por WhatsApp al{" "}
              <a href="https://wa.me/593986972622" className="text-brand-red underline">
                +593 98 697 2622
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
