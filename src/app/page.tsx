import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MENU = [
  {
    name: "Ceviches",
    description:
      "Pescados y mariscos frescos marinados en limón, al estilo tradicional peruano.",
  },
  {
    name: "Fish & Chips",
    description: "Filete crocante acompañado de papas y salsas de la casa.",
  },
  {
    name: "Sushi Nikkei",
    description: "Fusión peruano-japonesa: rolls y makis con sabor a Perú.",
  },
  {
    name: "Paellas",
    description: "Arroz marinero cargado de mariscos, para compartir en familia.",
  },
  {
    name: "Bebidas y cócteles tropicales",
    description: "Chicha morada, maracuyá, cócteles y refrescos de la costa peruana.",
  },
];

const LOCATIONS = [
  {
    name: "Galerías del Sol",
    address:
      "Av. 25 de Junio, L9-10, Ciudadela Ciudad del Sol, La Providencia, Machala, El Oro",
    hours: "Lunes a domingo · 9:00 am – 11:00 pm",
  },
  {
    name: "C.C. Paseo Shopping Machala",
    address: "Machala, El Oro, Ecuador",
    hours: "Lunes a domingo · 9:00 am – 11:00 pm",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-brand-dark text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32">
            <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Comida peruana en Machala
            </span>
            <h1 className="font-sans text-4xl font-extrabold leading-tight md:text-6xl">
              Lo mejor de la gastronomía peruana
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Ceviches, sushi nikkei, paellas y fish &amp; chips preparados con
              ingredientes frescos del mar. Vive el sabor de Perú en el corazón
              de Machala.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/593986972622"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-red-dark"
              >
                Pedir por WhatsApp
              </a>
              <a
                href="https://www.instagram.com/albrujocomidaperuana/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-sans text-3xl font-bold text-brand-dark">Nuestra carta</h2>
          <p className="mt-2 max-w-2xl text-foreground/70">
            Una selección de nuestros platos insignia. Carta completa disponible
            en el local y por WhatsApp.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENU.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="font-sans text-lg font-semibold text-brand-red">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="locales" className="bg-brand-gold/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-sans text-3xl font-bold text-brand-dark">
              Nuestros locales
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="rounded-2xl bg-white p-6 shadow-sm border border-black/5"
                >
                  <h3 className="font-sans text-xl font-semibold text-brand-dark">
                    {loc.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{loc.address}</p>
                  <p className="mt-1 text-sm font-medium text-brand-red">{loc.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-sans text-3xl font-bold text-brand-dark">
                Sobre Al Brujo
              </h2>
              <p className="mt-4 text-foreground/70">
                Al Brujo Comida Peruana nace en Machala para acercar los sabores
                del mar peruano a Ecuador: ceviches frescos, fusión nikkei y
                platos preparados al momento. Un negocio local, registrado y
                comprometido con la calidad en cada plato que sale de nuestra
                cocina.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-dark p-8 text-white">
              <p className="text-sm uppercase tracking-widest text-brand-gold">
                Datos del negocio
              </p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Razón social</dt>
                  <dd className="text-right">María Paz Pando Olavarria</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">RUC</dt>
                  <dd>0959990771001</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Actividad</dt>
                  <dd className="text-right">Elaboración de comidas y platos preparados</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-red text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <h2 className="font-sans text-3xl font-bold">¿Listo para pedir?</h2>
            <p className="mt-3 text-white/80">
              Escríbenos por WhatsApp o síguenos en Instagram para promociones y
              novedades.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/593986972622"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-red shadow-lg transition-transform hover:scale-105"
              >
                +593 98 697 2622
              </a>
              <a
                href="https://www.instagram.com/albrujocomidaperuana/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                @albrujocomidaperuana
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
