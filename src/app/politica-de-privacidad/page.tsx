import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad | Al Brujo Comida Peruana",
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-sans text-3xl font-bold text-brand-dark">
            Política de privacidad
          </h1>
          <p className="mt-2 text-sm text-foreground/50">
            Última actualización: septiembre de 2026
          </p>

          <div className="mt-8 space-y-6 text-foreground/80">
            <p>
              Esta Política de Privacidad describe cómo{" "}
              <strong>Al Brujo Comida Peruana</strong>, operado por María Paz
              Pando Olavarria (RUC 0959990771001), con domicilio en Av. 25 de
              Junio L9-10, Ciudadela Ciudad del Sol, Machala, El Oro, Ecuador,
              recopila, usa y protege la información de las personas que
              visitan este sitio web o se comunican con nosotros a través de
              WhatsApp, Instagram u otros canales.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              1. Información que recopilamos
            </h2>
            <p>
              Cuando nos contactas por WhatsApp, redes sociales o formularios
              de pedido, podemos recopilar tu nombre, número de teléfono,
              dirección de entrega y detalles del pedido. No recopilamos datos
              de pago a través de este sitio: los pagos se coordinan
              directamente en el local o por los canales de mensajería.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              2. Uso de la información
            </h2>
            <p>
              Utilizamos tus datos únicamente para procesar pedidos, coordinar
              entregas, responder consultas y, si lo autorizas, enviarte
              promociones. No vendemos ni compartimos tu información con
              terceros para fines comerciales ajenos a nuestro negocio.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              3. Cookies y analítica
            </h2>
            <p>
              Este sitio puede utilizar cookies o herramientas de analítica
              básica para entender cómo se usa la página y mejorar la
              experiencia. Puedes desactivar las cookies desde la
              configuración de tu navegador.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              4. Conservación y seguridad
            </h2>
            <p>
              Conservamos tu información solo el tiempo necesario para
              atender tu pedido o consulta, y tomamos medidas razonables para
              protegerla frente a accesos no autorizados.
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              5. Tus derechos
            </h2>
            <p>
              Puedes solicitar acceso, corrección o eliminación de tus datos
              personales escribiéndonos por WhatsApp al{" "}
              <a href="https://wa.me/593986972622" className="text-brand-red underline">
                +593 98 697 2622
              </a>{" "}
              o por Instagram a{" "}
              <a
                href="https://www.instagram.com/albrujocomidaperuana/"
                className="text-brand-red underline"
              >
                @albrujocomidaperuana
              </a>
              .
            </p>

            <h2 className="font-sans text-xl font-semibold text-brand-dark">
              6. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Cualquier
              cambio será publicado en esta misma página.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
