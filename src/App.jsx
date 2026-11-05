import { useEffect, useRef, useState } from "react";
import {
  INSTAGRAM,
  PHONE_LABEL,
  euro,
  links,
  plans,
  posts,
  services,
  steps,
} from "./content.js";
import { ServiceIcon } from "./icons.jsx";

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

function revealClass(shown, direction) {
  return `reveal from-${direction}${shown ? " is-in" : ""}`;
}

function WhatsAppLink({ href, className, children }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav panel">
      <a className="brand" href="#inicio" onClick={close}>
        <img src="/logo.png" alt="Nerea Studio" />
      </a>
      <button
        className={open ? "nav-toggle is-open" : "nav-toggle"}
        type="button"
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        <span className="bar" />
        <span className="bar" />
      </button>
      <nav id="menu" className={open ? "menu is-open" : "menu"}>
        <a href="#sobre" onClick={close}>
          Sobre
        </a>
        <a href="#servicios" onClick={close}>
          Servicios
        </a>
        <a href="#apertura" onClick={close}>
          Apertura
        </a>
        <a href="#planes" onClick={close}>
          Planes
        </a>
        <a href="#metodo" onClick={close}>
          Método
        </a>
        <a href="#instagram" onClick={close}>
          Instagram
        </a>
        <WhatsAppLink href={links.general} className="btn btn-small" >
          Escribir por WhatsApp
        </WhatsAppLink>
      </nav>
    </header>
  );
}

function Hero() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`hero panel ${revealClass(shown, "left")}`}
      id="inicio"
    >
      <div className="hero-copy">
        <img
          className="hero-logo"
          src="/logo.png"
          alt="Nerea Studio. Fitness and nutrition. Fuerza, equilibrio, evolución."
        />
        <p className="rule-label">Entrenamiento · Nutrición · Bienestar</p>
        <p className="lede">
          Tu mejor versión, nuestro objetivo. Dieta, asesoría y entrenos
          pensados para tu semana, no para una plantilla.
        </p>
        <div className="cta-row">
          <WhatsAppLink href={links.general} className="btn">
            Comienza hoy tu cambio <span aria-hidden="true">→</span>
          </WhatsAppLink>
          <p className="cta-note">Se abre el chat de WhatsApp</p>
        </div>
      </div>
      <figure className="hero-photo">
        <img
          src="/images/floor.jpg"
          alt="Rack de mancuernas en un gimnasio"
          className="bw"
        />
      </figure>
    </section>
  );
}

function About() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`about panel ${revealClass(shown, "right")}`}
      id="sobre"
    >
      <div className="about-copy">
        <p className="eyebrow">Nerea Studio</p>
        <h2>Sobre nosotros</h2>
        <p className="rule-label">Fitness & nutrition</p>
        <p>
          En Nerea Studio creemos en el poder de un estilo de vida saludable
          para alcanzar tus objetivos. Combinamos entrenamiento personalizado,
          nutrición equilibrada y acompañamiento profesional para que avances
          con confianza y constancia.
        </p>
        <p>
          Soy entrenadora personal y dietista. Trabajo la comida y el entreno
          como una sola conversación: online y, cuando encaja, también en
          consulta.
        </p>
        <ul className="pillars">
          <li>
            <ServiceIcon name="dumbbell" />
            <span>Entrenamiento personalizado</span>
          </li>
          <li>
            <ServiceIcon name="apple" />
            <span>Planes de nutrición</span>
          </li>
          <li>
            <ServiceIcon name="heart" />
            <span>Acompañamiento continuo</span>
          </li>
        </ul>
      </div>
      <figure className="about-photo">
        <img
          src="/images/hero.jpg"
          alt="Entreno con mancuernas"
          className="bw"
        />
        <figcaption>Fuerza · Equilibrio · Evolución</figcaption>
      </figure>
    </section>
  );
}

function Services() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`services panel ${revealClass(shown, "left")}`}
      id="servicios"
    >
      <div className="section-head">
        <p className="eyebrow">Nerea Studio</p>
        <h2>Nuestros servicios</h2>
        <p className="sub">Programas diseñados para ti</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service">
            <span className="icon-badge">
              <ServiceIcon name={service.icon} />
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
      <div className="services-foot">
        <WhatsAppLink href={links.general} className="btn">
          Comienza hoy tu cambio <span aria-hidden="true">→</span>
        </WhatsAppLink>
        <span className="brand-mark">Nerea Studio</span>
      </div>
    </section>
  );
}

function Opening() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`opening panel ${revealClass(shown, "right")}`}
      id="apertura"
    >
      <div className="opening-mark">
        <p className="eyebrow">Descuento por apertura</p>
        <p className="opening-figure">50%</p>
        <p>En todos los planes, desde el primer mes.</p>
      </div>
      <div className="opening-copy">
        <h2>Precio de apertura, ya aplicado</h2>
        <p>
          Nerea Studio acaba de abrir. Por la reciente apertura, la dieta, la
          asesoría y los entrenos salen a mitad de precio. El importe que ves
          es el que pagas.
        </p>
        <ul>
          {plans.map((plan) => (
            <li key={plan.id}>
              <span>{plan.name}</span>
              <span>
                <s>{euro(plan.full)} €</s>
                <strong>{euro(plan.now)} €/mes</strong>
              </span>
            </li>
          ))}
        </ul>
        <WhatsAppLink href={links.apertura} className="btn btn-light">
          Quiero el precio de apertura <span aria-hidden="true">→</span>
        </WhatsAppLink>
      </div>
    </section>
  );
}

function Plans() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`plans panel ${revealClass(shown, "left")}`}
      id="planes"
    >
      <div className="section-head">
        <p className="eyebrow">Planes</p>
        <h2>Elige hasta dónde llegar</h2>
        <p className="sub">
          Solo dieta, asesoría o entrenos. El precio ya incluye el 50% de
          descuento por la reciente apertura.
        </p>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => {
          return (
            <article
              key={plan.id}
              className={plan.featured ? "plan is-featured" : "plan"}
            >
              <div className="plan-top">
                <span>{plan.index}</span>
                <em>{plan.featured ? "Más completo · −50%" : "Apertura −50%"}</em>
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-summary">{plan.summary}</p>
              <p className="price-was">{euro(plan.full)} €/mes</p>
              <p className="price">
                <strong>{euro(plan.now)}</strong>
                <span>€ / mes</span>
              </p>
              <p className="opening-tag">50% por la reciente apertura</p>
              <p className="price-split">
                {euro(plan.baseNow)} € del plan
                <span> + {euro(plan.extraNow)} € de extra</span>
              </p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="extra">
                <p>Extra incluido</p>
                <strong>
                  {plan.extraName}
                  <span>+{euro(plan.extraNow)} €</span>
                </strong>
                <p>{plan.extraDetail}</p>
              </div>
              <WhatsAppLink href={plan.href} className="btn">
                {plan.cta} <span aria-hidden="true">→</span>
              </WhatsAppLink>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Method() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`method panel ${revealClass(shown, "right")}`}
      id="metodo"
    >
      <div className="method-copy">
        <p className="eyebrow">Cómo trabajamos</p>
        <h2>Un plan que se puede cumplir</h2>
        <ol>
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="method-photos">
        <figure>
          <img
            src="/images/food.jpg"
            alt="Bol de quinoa, verduras y cítricos"
            className="bw"
          />
          <figcaption>Comer con un plan, no con culpa</figcaption>
        </figure>
        <figure>
          <img
            src="/images/gear.jpg"
            alt="Sesión de fuerza en banco"
            className="bw"
          />
          <figcaption>Entrenar con una progresión clara</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Instagram() {
  const [ref, shown] = useReveal();
  return (
    <section
      ref={ref}
      className={`instagram panel ${revealClass(shown, "left")}`}
      id="instagram"
    >
      <div className="section-head ig-head">
        <div>
          <p className="eyebrow">@nereamood</p>
          <h2>Primeras publicaciones</h2>
          <p className="sub">
            Las primeras piezas del perfil: pole, fuerza y constancia.
          </p>
        </div>
        <a className="btn" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          Ver Instagram <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="collage">
        {posts.map((post) => (
          <a key={post.src} href={post.href} target="_blank" rel="noopener noreferrer">
            <img src={post.src} alt={post.alt} />
          </a>
        ))}
      </div>
    </section>
  );
}

function Finale() {
  const [ref, shown] = useReveal();
  return (
    <section ref={ref} className={`finale panel ${revealClass(shown, "right")}`}>
      <img
        src="/images/floor.jpg"
        alt=""
        className="bw"
      />
      <div className="finale-copy">
        <p className="eyebrow light">Nerea Studio</p>
        <h2>Tu mejor versión empieza por un mensaje.</h2>
        <p>
          Cuéntame si buscas solo la dieta, un seguimiento más cercano o
          también los entrenos. Te respondo por WhatsApp.
        </p>
        <WhatsAppLink href={links.general} className="btn btn-light">
          Escribir a Nerea <span aria-hidden="true">→</span>
        </WhatsAppLink>
      </div>
    </section>
  );
}

function Footer() {
  const [ref, shown] = useReveal();
  return (
    <footer ref={ref} className={`footer panel ${revealClass(shown, "left")}`}>
      <img src="/logo.png" alt="" className="footer-logo" />
      <div>
        <p className="footer-name">Nerea Studio</p>
        <p>Dietista y entrenadora personal</p>
        <p>Fuerza · Equilibrio · Evolución</p>
      </div>
      <div className="footer-contact">
        <WhatsAppLink href={links.general}>WhatsApp {PHONE_LABEL}</WhatsAppLink>
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          @nereamood
        </a>
      </div>
      <p className="credits">Fotografías de Pexels, Unsplash e Instagram.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#inicio">
        Ir al contenido
      </a>
      <div className="shell">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Opening />
          <Plans />
          <Method />
          <Instagram />
          <Finale />
        </main>
        <Footer />
      </div>
    </>
  );
}
