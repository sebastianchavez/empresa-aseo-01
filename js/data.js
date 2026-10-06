/* ============================================================
   CleanPro - Datos Mockeados
   Toda la información del template se centraliza aquí.
   ============================================================ */

const CLEANPRO = {
  empresa: {
    nombre: "CleanPro",
    tagline: "Aseo profesional que transforma tus espacios",
    eslogan: "Brillo impecable, confianza total",
    telefono: "+56 9 4123 5678",
    telefonoSecundario: "+56 2 2345 6789",
    email: "contacto@cleanpro.cl",
    emailVentas: "ventas@cleanpro.cl",
    direccion: "Av. Las Limpiezas 1234, Of. 502, Santiago, Chile",
    horarioAtencion: "Lun a Vie 08:00 - 19:00 | Sáb 09:00 - 14:00",
    redes: {
      facebook: "https://facebook.com/cleanpro",
      instagram: "https://instagram.com/cleanpro",
      linkedin: "https://linkedin.com/company/cleanpro",
      whatsapp: "https://wa.me/56941235678"
    },
    ultimaActualizacion: "01 de octubre de 2026"
  },

  stats: [
    { valor: 15, sufijo: "+", label: "Años de experiencia", icono: "calendar" },
    { valor: 2500, sufijo: "+", label: "Clientes satisfechos", icono: "users" },
    { valor: 98, sufijo: "%", label: "Satisfacción garantizada", icono: "star" },
    { valor: 50, sufijo: "+", label: "Colaboradores certificados", icono: "shield" }
  ],

  servicios: [
    {
      id: 1,
      slug: "aseo-residencial",
      icono: "home",
      titulo: "Aseo Residencial",
      descripcion: "Limpieza integral de casas y departamentos, con atención a cada detalle para que vuelvas a un hogar impecable.",
      destacado: true
    },
    {
      id: 2,
      slug: "aseo-comercial",
      icono: "building",
      titulo: "Aseo Comercial",
      descripcion: "Mantenimiento de locales comerciales, tiendas y retail. Imagen impecable para tu negocio todos los días.",
      destacado: true
    },
    {
      id: 3,
      slug: "limpieza-profunda",
      icono: "sparkles",
      titulo: "Limpieza Profunda",
      descripcion: "Servicio intensivo para eliminar grasa, sarro y suciedad acumulada. Resultados que se notan y duran.",
      destacado: true
    },
    {
      id: 4,
      slug: "aseo-oficinas",
      icono: "briefcase",
      titulo: "Aseo de Oficinas",
      descripcion: "Espacios de trabajo limpios y saludables. Aumenta la productividad y bienestar de tu equipo.",
      destacado: false
    },
    {
      id: 5,
      slug: "limpieza-alfombras",
      icono: "square",
      titulo: "Limpieza de Alfombras",
      descripcion: "Lavado profesional con extracción profunda. Eliminamos manchas, ácaros y malos olores.",
      destacado: false
    },
    {
      id: 6,
      slug: "desinfeccion",
      icono: "shield",
      titulo: "Desinfección",
      descripcion: "Sanitización certificada de ambientes. Productos de grado hospitalario contra virus y bacterias.",
      destacado: true
    },
    {
      id: 7,
      slug: "limpieza-vidrios",
      icono: "rectangle",
      titulo: "Limpieza de Vidrios",
      descripcion: "Cristales, ventanales y fachadas de vidrio. Sin marcas, con equipos especializados en altura.",
      destacado: false
    },
    {
      id: 8,
      slug: "aseo-post-obra",
      icono: "hammer",
      titulo: "Aseo Post-Obra",
      descripcion: "Retiramos escombros, polvo y residuos de construcción. Entregamos tu espacio listo para habitar.",
      destacado: false
    }
  ],

  beneficios: [
    { icono: "leaf", titulo: "Productos Eco-Friendly", descripcion: "Usamos productos biodegradables certificados, seguros para niños y mascotas." },
    { icono: "clock", titulo: "Puntualidad Garantizada", descripcion: "Llegamos a la hora acordada. Tu tiempo es valioso y lo respetamos." },
    { icono: "check", titulo: "Personal Verificado", descripcion: "Equipo con antecedentes revisados, uniformado y capacitado continuamente." },
    { icono: "shield", titulo: "Seguro de Responsabilidad", descripcion: "Cobertura total ante cualquier eventualidad. Tu tranquilidad es prioridad." },
    { icono: "thumbs", titulo: "Satisfacción 100%", descripcion: "Si no quedas conforme, volvemos a limpiar sin costo adicional." },
    { icono: "tag", titulo: "Precios Transparentes", descripcion: "Cotizaciones claras y sin sorpresas. Lo que ves es lo que pagas." }
  ],

  equipo: [
    { nombre: "Carolina Méndez", cargo: "Directora General", bio: "15 años liderando equipos de aseo profesional. Especialista en gestión de calidad.", foto: "https://i.pravatar.cc/400?img=47" },
    { nombre: "Rodrigo Silva", cargo: "Jefe de Operaciones", bio: "Ingeniero con experiencia logística. Coordina más de 200 servicios mensuales.", foto: "https://i.pravatar.cc/400?img=12" },
    { nombre: "Valentina Rojas", cargo: "Coordinadora de Clientes", bio: "Atención personalizada y seguimiento post-servicio. Tu enlace directo con CleanPro.", foto: "https://i.pravatar.cc/400?img=45" },
    { nombre: "Matías Torres", cargo: "Supervisor de Campo", bio: "Técnico certificado en limpieza industrial. Garantiza los estándares en cada visita.", foto: "https://i.pravatar.cc/400?img=33" }
  ],

  galeria: [
    { id: 1, src: "https://picsum.photos/seed/clean1/800/600", categoria: "residencial", alt: "Sala de estar limpia y ordenada" },
    { id: 2, src: "https://picsum.photos/seed/clean2/800/600", categoria: "comercial", alt: "Oficina corporativa recién aseada" },
    { id: 3, src: "https://picsum.photos/seed/clean3/800/600", categoria: "industrial", alt: "Bodega industrial en mantenimiento" },
    { id: 4, src: "https://picsum.photos/seed/clean4/800/600", categoria: "residencial", alt: "Cocina impecable después de limpieza profunda" },
    { id: 5, src: "https://picsum.photos/seed/clean5/800/600", categoria: "post-obra", alt: "Espacio post-construcción listo" },
    { id: 6, src: "https://picsum.photos/seed/clean6/800/600", categoria: "comercial", alt: "Local comercial vitrinas relucientes" },
    { id: 7, src: "https://picsum.photos/seed/clean7/800/600", categoria: "residencial", alt: "Baño con limpieza premium" },
    { id: 8, src: "https://picsum.photos/seed/clean8/800/600", categoria: "industrial", alt: "Planta de producción sanitizada" },
    { id: 9, src: "https://picsum.photos/seed/clean9/800/600", categoria: "post-obra", alt: "Remoción de polvo de obra" },
    { id: 10, src: "https://picsum.photos/seed/clean10/800/600", categoria: "comercial", alt: "Recepción de empresa aseada" },
    { id: 11, src: "https://picsum.photos/seed/clean11/800/600", categoria: "residencial", alt: "Dormitorio con sábanas blancas" },
    { id: 12, src: "https://picsum.photos/seed/clean12/800/600", categoria: "industrial", alt: "Equipamiento industrial limpio" }
  ],

  categoriasGaleria: [
    { id: "todos", label: "Todos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial", label: "Comercial" },
    { id: "industrial", label: "Industrial" },
    { id: "post-obra", label: "Post-Obra" }
  ],

  planes: [
    {
      id: "basico",
      nombre: "Plan Básico",
      precio: 25990,
      periodicidad: "visita",
      descripcion: "Ideal para mantener tu espacio limpio de forma regular.",
      destacado: false,
      features: [
        { texto: "Aseo general de superficies", incluido: true },
        { texto: "Limpieza de baños y cocina", incluido: true },
        { texto: "Aspirado y trapeado de pisos", incluido: true },
        { texto: "Retiro de basura", incluido: true },
        { texto: "Limpieza profunda", incluido: false },
        { texto: "Limpieza de vidrios interior", incluido: false },
        { texto: "Sanitización certificada", incluido: false }
      ]
    },
    {
      id: "profesional",
      nombre: "Plan Profesional",
      precio: 45990,
      periodicidad: "visita",
      descripcion: "El más elegido. Equilibrio perfecto entre precio y resultado.",
      destacado: true,
      features: [
        { texto: "Todo del Plan Básico", incluido: true },
        { texto: "Limpieza profunda", incluido: true },
        { texto: "Limpieza de vidrios interior", incluido: true },
        { texto: "Limpieza de alfombras", incluido: true },
        { texto: "Productos premium incluidos", incluido: true },
        { texto: "Sanitización certificada", incluido: false },
        { texto: "Atención prioritaria 24/7", incluido: false }
      ]
    },
    {
      id: "premium",
      nombre: "Plan Premium",
      precio: 79990,
      periodicidad: "visita",
      descripcion: "Servicio VIP con sanitización hospitalaria y atención dedicada.",
      destacado: false,
      features: [
        { texto: "Todo del Plan Profesional", incluido: true },
        { texto: "Sanitización certificada", incluido: true },
        { texto: "Atención prioritaria 24/7", incluido: true },
        { texto: "Supervisor exclusivo", incluido: true },
        { texto: "Reportes fotográficos", incluido: true },
        { texto: "Coordinador dedicado", incluido: true },
        { texto: "Garantía extendida", incluido: true }
      ]
    }
  ],

  serviciosExtras: [
    { nombre: "Limpieza de alfombras (m²)", precio: 3500 },
    { nombre: "Limpieza de tapiz de sofá", precio: 18000 },
    { nombre: "Limpieza de colchón (1 plaza)", precio: 12000 },
    { nombre: "Limpieza de colchón (2 plazas)", precio: 18000 },
    { nombre: "Lavado de cortina (m²)", precio: 2800 },
    { nombre: "Sanitización adicional (m²)", precio: 1500 }
  ],

  testimonios: [
    {
      nombre: "María José Pérez",
      cargo: "Gerente, Inmobiliaria Andes",
      foto: "https://i.pravatar.cc/100?img=49",
      rating: 5,
      texto: "Llevamos 3 años trabajando con CleanPro en nuestras propiedades. La calidad es consistente y su equipo es muy profesional. Totalmente recomendados."
    },
    {
      nombre: "Felipe Contreras",
      cargo: "Administrador, Edificio Plaza Norte",
      foto: "https://i.pravatar.cc/100?img=8",
      rating: 5,
      texto: "El cambio en la limpieza de nuestras áreas comunes fue notable desde la primera semana. El precio es justo y el servicio, impecable."
    },
    {
      nombre: "Andrea Soto",
      cargo: "Clienta residencial",
      foto: "https://i.pravatar.cc/100?img=44",
      rating: 5,
      texto: "Contraté la limpieza profunda antes de mudarme y el resultado fue espectacular. Quedó como nuevo. Súper detallistas y amables."
    }
  ],

  turnos: [
    { dia: "Lunes",    manana: "07:00 - 12:00", tarde: "14:00 - 18:00", noche: "19:00 - 22:00" },
    { dia: "Martes",   manana: "07:00 - 12:00", tarde: "14:00 - 18:00", noche: "19:00 - 22:00" },
    { dia: "Miércoles",manana: "07:00 - 12:00", tarde: "14:00 - 18:00", noche: "19:00 - 22:00" },
    { dia: "Jueves",   manana: "07:00 - 12:00", tarde: "14:00 - 18:00", noche: "19:00 - 22:00" },
    { dia: "Viernes",  manana: "07:00 - 12:00", tarde: "14:00 - 18:00", noche: "19:00 - 22:00" },
    { dia: "Sábado",   manana: "08:00 - 13:00", tarde: "Cerrado",       noche: "Cerrado" },
    { dia: "Domingo",  manana: "Solo urgencias", tarde: "Cerrado",      noche: "Cerrado" }
  ],

  faqs: [
    { pregunta: "¿Qué incluye el servicio de aseo residencial?", respuesta: "Nuestros planes residenciales incluyen aspirado y trapeado de pisos, limpieza de baños y cocina, aseo de superficies, retiro de basura, limpieza de espejos y sacudido general. El plan Profesional suma limpieza profunda y vidrios." },
    { pregunta: "¿Necesito estar presente durante el servicio?", respuesta: "No es necesario. Muchos clientes nos entregan las llaves o un código de acceso. Todo nuestro personal cuenta con verificación de antecedentes y nuestro seguro cubre cualquier eventualidad." },
    { pregunta: "¿Qué productos utilizan?", respuesta: "Trabajamos con productos biodegradables certificados, seguros para niños, mascotas y personas con alergias. Si prefieres productos específicos o de marca, podemos adaptarnos sin problema." },
    { pregunta: "¿Cuánto dura una sesión de limpieza?", respuesta: "Depende del tamaño del espacio y el plan contratado. Un departamento de 80m² toma entre 2 a 3 horas en el plan Básico. Te confirmamos el tiempo estimado en la cotización." },
    { pregunta: "¿Ofrecen garantía de satisfacción?", respuesta: "Sí. Si en las siguientes 24 horas al servicio no quedas conforme, regresamos a repasar sin costo adicional. Tu satisfacción es nuestra prioridad." }
  ]
};

if (typeof window !== "undefined") {
  window.CLEANPRO = CLEANPRO;
}
