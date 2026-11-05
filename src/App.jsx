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

function Slide({ id, className, direction, as: Tag = "section", children }) {
  const [ref, shown] = useReveal();
  return (
    <Tag id={id} ref={ref} className="reveal-host">
      <div className={`${className} ${revealClass(shown, direction)}`}>{children}</div>
    </Tag>
  );
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
          Precios
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
  return (
    <Slide id="inicio" className="hero panel" direction="left">
      <div className="hero-copy">
        <img
          className="hero-logo"
          src="/logo.png"
          alt="Nerea Studio. Fitness and nutrition. Fuerza, equilibrio, evolución."
        />
        <p className="rule-label">Dieta · Asesoría · Bienestar</p>
        <p className="lede">
          Tu mejor versión, nuestro objetivo. Dieta o asesoría, pensadas
          para tu semana, no para una plantilla.
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
    </Slide>
  );
}

function About() {
  return (
    <Slide id="sobre" className="about panel" direction="right">
      <div className="about-copy">
        <p className="eyebrow">Nerea Studio</p>
        <h2>Sobre nosotros</h2>
        <p className="rule-label">Fitness & nutrition</p>
        <p>
          En Nerea Studio creemos en el poder de un estilo de vida saludable
          para alcanzar tus objetivos. Preparo una nutrición equilibrada y,
          si lo quieres, un acompañamiento para que avances con confianza
          y constancia.
        </p>
        <p>
          Soy dietista. Trabajo la alimentación contigo: online y, cuando
          encaja, también en consulta.
        </p>
        <ul className="pillars">
          <li>
            <ServiceIcon name="apple" />
            <span>Dieta a medida</span>
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
    </Slide>
  );
}

function Services() {
  return (
    <Slide id="servicios" className="services panel" direction="left">
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
    </Slide>
  );
}

function Opening() {
  return (
    <Slide id="apertura" className="opening panel" direction="right">
      <div className="opening-mark">
        <p className="eyebrow">Pago único</p>
        <p className="opening-figure">1 vez</p>
        <p>Sin cuota mensual.</p>
      </div>
      <div className="opening-copy">
        <h2>Se paga una vez</h2>
        <p>
          La dieta y la asesoría tienen un solo importe. Lo que ves es lo que
          pagas, sin cuota al mes.
        </p>
        <ul>
          {plans.map((plan) => (
            <li key={plan.id}>
              <span>{plan.name}</span>
              <strong>{euro(plan.price)} €</strong>
            </li>
          ))}
        </ul>
        <WhatsAppLink href={links.apertura} className="btn btn-light">
          Quiero empezar <span aria-hidden="true">→</span>
        </WhatsAppLink>
      </div>
    </Slide>
  );
}

function Plans() {
  return (
    <Slide id="planes" className="plans panel" direction="left">
      <div className="section-head">
        <p className="eyebrow">Planes</p>
        <h2>Elige hasta dónde llegar</h2>
        <p className="sub">
          Dieta o asesoría. Se paga una vez, sin cuota mensual.
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
                <em>{plan.featured ? "Más completo" : "Pago único"}</em>
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-summary">{plan.summary}</p>
              <p className="price">
                <strong>{euro(plan.price)}</strong>
                <span>€</span>
              </p>
              <p className="opening-tag">Pago único</p>
              <ul>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="extra">
                <p>Extra incluido</p>
                <strong>{plan.extraName}</strong>
                <p>{plan.extraDetail}</p>
              </div>
              <WhatsAppLink href={plan.href} className="btn">
                {plan.cta} <span aria-hidden="true">→</span>
              </WhatsAppLink>
            </article>
          );
        })}
      </div>
    </Slide>
  );
}

function Method() {
  return (
    <Slide id="metodo" className="method panel" direction="right">
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
          <figcaption>Un seguimiento que se puede cumplir</figcaption>
        </figure>
      </div>
    </Slide>
  );
}

function Instagram() {
  return (
    <Slide id="instagram" className="instagram panel" direction="left">
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
    </Slide>
  );
}

function Finale() {
  return (
    <Slide className="finale panel" direction="right">
      <img
        src="/images/floor.jpg"
        alt=""
        className="bw"
      />
      <div className="finale-copy">
        <p className="eyebrow light">Nerea Studio</p>
        <h2>Tu mejor versión empieza por un mensaje.</h2>
        <p>
          Cuéntame si buscas solo la dieta o la asesoría, con seguimiento.
          Te respondo por WhatsApp.
        </p>
        <WhatsAppLink href={links.general} className="btn btn-light">
          Escribir a Nerea <span aria-hidden="true">→</span>
        </WhatsAppLink>
      </div>
    </Slide>
  );
}

function Footer() {
  return (
    <footer className="footer panel">
      <img src="/logo.png" alt="" className="footer-logo" />
      <div>
        <p className="footer-name">Nerea Studio</p>
        <p>Dietista</p>
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
