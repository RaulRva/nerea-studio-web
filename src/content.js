export const PHONE = "34670740718";
export const PHONE_LABEL = "670 740 718";
export const INSTAGRAM = "https://www.instagram.com/nereamood/";

export function whatsapp(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const DISCOUNT = 0.5;

export function euro(amount) {
  const cents = Math.round(amount * 100);
  return (cents / 100).toLocaleString("es-ES", {
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export const links = {
  general: whatsapp(
    "Hola Nerea, he visto el portafolio de Nerea Studio y quiero empezar. ¿Me cuentas cómo trabajas?",
  ),
  apertura: whatsapp(
    "Hola Nerea, quiero aprovechar el 50% de descuento por la apertura.",
  ),
};

export const plans = [
  {
    id: "dieta",
    index: "01",
    name: "Solo Dieta",
    summary: "Tu alimentación, ordenada y a medida.",
    base: 45,
    extra: 15,
    extraName: "Recetario del mes",
    extraDetail:
      "Cuatro semanas de recetas alineadas con tu pauta, para no improvisar entre semana.",
    includes: [
      "Plan nutricional según tu objetivo",
      "Lista de la compra semanal",
      "Horarios y raciones claras",
      "Una revisión del plan al mes",
    ],
    cta: "Quiero la dieta",
  },
  {
    id: "asesoria",
    index: "02",
    name: "Asesoría",
    summary: "La misma dieta, con alguien que ajusta el rumbo cuando la semana cambia.",
    base: 70,
    extra: 25,
    extraName: "Videollamada mensual",
    extraDetail:
      "30 minutos para revisar cómo vas, resolver dudas y cerrar el siguiente bloque.",
    includes: [
      "Todo lo del plan Solo Dieta",
      "Seguimiento por WhatsApp, de lunes a viernes",
      "Ajustes de la pauta cada dos semanas",
      "Dudas del día a día, resueltas",
    ],
    cta: "Quiero asesoría",
    featured: true,
  },
].map((plan) => {
  const full = plan.base + plan.extra;
  const now = full * DISCOUNT;
  return {
    ...plan,
    full,
    now,
    baseNow: plan.base * DISCOUNT,
    extraNow: plan.extra * DISCOUNT,
    href: whatsapp(
      `Hola Nerea, me interesa el plan ${plan.name} con el 50% de apertura (${euro(now)} €/mes).`,
    ),
  };
});

export const services = [
  {
    title: "Dieta a medida",
    text: "Una pauta según tu objetivo, tus horarios y lo que de verdad comes.",
    icon: "apple",
  },
  {
    title: "Nutrición",
    text: "Planes realistas y sostenibles. Comer bien sin vivir a base de prohibiciones.",
    icon: "apple",
  },
  {
    title: "Bienestar integral",
    text: "Comida, hábitos y descanso en el mismo criterio, para que el cambio se quede.",
    icon: "heart",
  },
];

export const posts = [
  {
    src: "/images/ig-1.jpg",
    href: "https://www.instagram.com/nereamood/p/DVRaBFxjoMP/",
    alt: "Figura de pole dance",
  },
  {
    src: "/images/ig-2.jpg",
    href: "https://www.instagram.com/nereamood/reel/Db0Fq_0uQ4C/",
    alt: "Equilibrio en vertical",
  },
  {
    src: "/images/ig-3.jpg",
    href: "https://www.instagram.com/nereamood/reel/Db3o2EEOM-E/",
    alt: "Entrenamiento en el pole",
  },
  {
    src: "/images/ig-4.jpg",
    href: "https://www.instagram.com/nereamood/reel/Db5rkVzICEP/",
    alt: "Fuerza con kettlebells",
  },
  {
    src: "/images/ig-5.jpg",
    href: "https://www.instagram.com/nereamood/p/DcBc_O9oLGI/",
    alt: "Vertical de manos",
  },
  {
    src: "/images/ig-6.jpg",
    href: "https://www.instagram.com/nereamood/reel/DcJN6ywKh7E/",
    alt: "Figura de pole en el estudio",
  },
];

export const steps = [
  {
    n: "01",
    title: "Me escribes",
    text: "Por WhatsApp me cuentas tu objetivo, tu punto de partida y cómo es tu semana.",
  },
  {
    n: "02",
    title: "Diseñamos",
    text: "Preparo la dieta o la asesoría. Nada genérico: sale de lo que me cuentes.",
  },
  {
    n: "03",
    title: "Ajustamos",
    text: "El plan se mueve contigo. Si cambia el trabajo, el sueño o la semana, lo revisamos.",
  },
];
