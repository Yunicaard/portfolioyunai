
import { Project, Skill, Language } from './types';

export const CONTENT = {
  es: {
    personal: {
      name: 'Yunai Cárdenes',
      role: 'Junior Fullstack Developer',
      bio: "Soy Desarrollador Full Stack. Para mí, esto va mucho más allá de 'picar código': se trata de construir soluciones que tengan sentido lógico. No me conformo con que las cosas simplemente funcionen; necesito entender el porqué para hacerlo bien. Soy inquieto por naturaleza, así que siempre me verás probando nuevas herramientas o metodologías para mejorar mi forma de trabajar.",
      location: 'Gran Canaria, España',
      email: 'cardenesyunai@gmail.com',
      phone: '+34 675 46 83 07',
    },
    nav: {
      projects: 'Proyectos',
      assistant: 'Asistente',
      contact: 'Contáctame',
    },
    hero: {
      contactBtn: 'Contáctame',
    },
    projects: {
      title: 'Proyectos',
      highlight: 'Destacados',
      subtitle: 'Una selección de trabajos donde la arquitectura limpia se encuentra con la innovación tecnológica.',
      viewMore: 'Ver todo el repositorio',
      details: 'Detalles'
    },
    ai: {
      title: 'Habla con mi',
      highlight: 'Asistente Virtual',
      subtitle: 'Selecciona una de las dudas frecuentes sobre mi carrera.',
      welcome: '¡Hola! Soy el asistente virtual de Yunai. Selecciona una de las preguntas de abajo o escribe lo que quieras saber sobre mi perfil.',
      placeholder: 'Escribe tu pregunta aquí...',
      fallback: 'Lo siento, para esta sección de mi portfolio solo puedo responder a las preguntas que tengo almacenadas. ¡Prueba a seleccionar una de las sugerencias!',
      suggestTitle: '¿Te refieres a esto?'
    }
  },
  en: {
    personal: {
      name: 'Yunai Cárdenes',
      role: 'Junior Fullstack Developer',
      bio: "I am a Full Stack Developer. For me, this is much more than just 'writing code': it's about building solutions that make logical sense. I don't settle for things just working; I need to understand why to do it right. I'm naturally restless, so you'll always find me testing new tools or methodologies to improve the way I work.",
      location: 'Gran Canaria, Spain',
      email: 'cardenesyunai@gmail.com',
      phone: '+34 675 46 83 07',
    },
    nav: {
      projects: 'Projects',
      assistant: 'Assistant',
      contact: 'Contact Me',
    },
    hero: {
      contactBtn: 'Contact Me',
    },
    projects: {
      title: 'Featured',
      highlight: 'Projects',
      subtitle: 'A selection of works where clean architecture meets technological innovation.',
      viewMore: 'View full repository',
      details: 'Details'
    },
    ai: {
      title: 'Talk to my',
      highlight: 'Virtual Assistant',
      subtitle: 'Select one of the frequent questions about my career.',
      welcome: 'Hello! I am Yunai\'s virtual assistant. Select one of the questions below or write what you want to know about my profile.',
      placeholder: 'Type your question here...',
      fallback: 'I am sorry, for this section of my portfolio I can only answer the questions I have stored. Try selecting one of the suggestions!',
      suggestTitle: 'Did you mean this?'
    }
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  es: [
    {
      id: '1',
      title: 'Web App Cafetería',
      description: 'Aplicación completa con gestión de pedidos, métodos de pago online y panel de administración.',
      tags: ['React', 'MySQL', 'Node.js', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
      link: '#',
      code: '#'
    },
    {
      id: '2',
      title: 'Gestor de Tareas Java',
      description: 'Sistema backend robusto para gestión de proyectos empresariales con persistencia en bases de datos.',
      tags: ['Java', 'SQL', 'Backend'],
      imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=800&auto=format&fit=crop',
      link: '#',
      code: '#'
    },
    {
      id: '3',
      title: 'Social Feed MongoDB',
      description: 'API para una red social simplificada utilizando bases de datos NoSQL para alta escalabilidad.',
      tags: ['JavaScript', 'MongoDB', 'Express'],
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
      link: '#',
      code: '#'
    }
  ],
  en: [
    {
      id: '1',
      title: 'Coffee Shop Web App',
      description: 'Full application with order management, online payment methods, and admin panel.',
      tags: ['React', 'MySQL', 'Node.js', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
      link: '#',
      code: '#'
    },
    {
      id: '2',
      title: 'Java Task Manager',
      description: 'Robust backend system for business project management with database persistence.',
      tags: ['Java', 'SQL', 'Backend'],
      imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=800&auto=format&fit=crop',
      link: '#',
      code: '#'
    },
    {
      id: '3',
      title: 'MongoDB Social Feed',
      description: 'API for a simplified social network using NoSQL databases for high scalability.',
      tags: ['JavaScript', 'MongoDB', 'Express'],
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
      link: '#',
      code: '#'
    }
  ]
};

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'HTML & CSS', level: 90, category: 'Frontend' },
  { name: 'Java', level: 75, category: 'Backend' },
  { name: 'SQL (MySQL)', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 70, category: 'Backend' },
  { name: 'Git & GitHub', level: 85, category: 'Tools' },
  { name: 'Proactividad', level: 95, category: 'Soft Skills' }
];

export const FAQ_ANSWERS: Record<Language, Record<string, string>> = {
  es: {
    "¿Cómo estás?": "¡Muy bien! Como siempre, con mucha energía y agradecido por tu interés. Gracias por preguntar.",
    "¿Cómo te llamas?": "Bueno, si después de ver mi nombre en grande por toda la web aún no te has dado cuenta... ¡mi nombre es Yunai Cárdenes! ;)",
    "¿De dónde eres?": "Soy de Gran Canaria (España), aunque si te refieres a dónde estoy físicamente ahora mismo... ¡nunca se sabe! jeje.",
    "¿Qué proyectos has hecho?": "He desarrollado proyectos como una aplicación web para una cafetería, donde pulí habilidades en creación y conexión de bases de datos, integración de métodos de pago online y diseño del frontend. Además, cuento con otros proyectos más específicos y muchos otros que están por venir.",
    "¿Tienes experiencia laboral?": "Esa es la pregunta que más tememos los juniors, ¿verdad? La respuesta es un 'técnicamente sí'. He realizado prácticas en empresas, lo que me ha permitido tener un primer contacto real con el mundo laboral y sus dinámicas.",
    "¿Cuáles son tus soft y hard skills?": "Es difícil resumir todo mi repertorio aquí, pero en cuanto a mis 'soft skills' destaco mi proactividad, actitud positiva, capacidad de trabajo en equipo y carisma, además de ser una persona muy centrada y organizada. Mis 'hard skills' incluyen dominio de Java, JavaScript, React, HTML/CSS, SQL, MongoDB y Git/GitHub.",
    "¿Estás abierto a movilidad geográfica?": "Aunque Canarias es increíble, estoy abierto a escuchar propuestas interesantes. Si el proyecto me motiva y la oportunidad es buena, no tengo problema en hacer las maletas o trabajar en remoto desde aquí.",
    "¿Qué disponibilidad tienes?": "Ahora mismo tengo disponibilidad total para incorporarme. ¡Estoy listo para empezar cuando tú me digas!",
    "¿Por qué programación?": "Siempre me ha gustado saber cómo funcionan las cosas por dentro. La programación me da la libertad de crear algo desde cero solo con un ordenador y lógica. Además, esa sensación cuando solucionas un bug que te llevaba loco... ¡no tiene precio!",
    "¿Windows, Mac o Linux?": "La pregunta del millón. Me adapto a lo que use el equipo, aunque tengo mis preferencias personales para desarrollar. Como siempre digo: ¡lo importante no es la flecha, sino el indio! ;)",
    "¿Por qué debería contratarte?": "Porque más allá de las habilidades técnicas, aporto actitud. Soy alguien que suma al equipo, que no tiene miedo a preguntar si tiene dudas y que se toma cada proyecto como propio.",
    "¿Tema Claro o Tema Oscuro?": "¿De verdad hace falta preguntar? Tema Oscuro siempre. Mis ojos lo agradecen y, seamos sinceros, el código parece más importante sobre fondo negro. ¡Aunque te he puesto un interruptor en la barra de navegación por si prefieres el modo claro! ;)",
    "¿Eres una IA de verdad?": "Mmm... me gustaría decirte que soy una superinteligencia artificial, pero en realidad soy un conjunto de respuestas predefinidas que Yunai programó con mucho cariño para ti. ¡Pero doy el pego, eh!",
    "¿Qué haces cuando te atascas con un bug?": "Tengo un protocolo: 1. Leer el error detalladamente. 2. Investigar en documentación oficial. 3. Si sigo atascado tras un buen rato, pido ayuda. No me da miedo preguntar; es mejor levantar la mano a tiempo que perder horas dando vueltas.",
    "¿Prefieres trabajar solo o en equipo?": "Disfruto de ambos. Al trabajar solo soy responsable de todo el proyecto y me gusta tener ese control, sin embargo, en equipo cuatro ojos ven más que dos. El mejor software suele nacer de la colaboración y el intercambio de ideas, no de un llanero solitario."
  },
  en: {
    "How are you?": "Very well! As always, full of energy and grateful for your interest. Thanks for asking.",
    "What is your name?": "Well, if after seeing my name in large letters all over the web you haven't realized yet... my name is Yunai Cárdenes! ;)",
    "Where are you from?": "I'm from Gran Canaria (Spain), although if you mean where I am physically right now... you never know! haha.",
    "What projects have you done?": "I've developed projects like a web app for a coffee shop, where I polished skills in database creation and connection, online payment methods integration, and frontend design. I also have other specific projects and many more to come.",
    "Do you have work experience?": "That's the question we juniors fear most, right? The answer is 'technically yes'. I've done internships in companies, which allowed me to have a first real contact with the work world and its dynamics.",
    "What are your soft and hard skills?": "It's hard to summarize everything here, but regarding my soft skills, I highlight my proactivity, positive attitude, teamwork ability, and charisma. My hard skills include mastery of Java, JavaScript, React, HTML/CSS, SQL, MongoDB, and Git/GitHub.",
    "Are you open to relocation?": "Although the Canary Islands are incredible, I am open to listening to interesting proposals. If the project motivates me and the opportunity is good, I have no problem packing my bags or working remotely from here.",
    "What is your availability?": "Right now I have full availability to join. I'm ready to start whenever you say!",
    "Why programming?": "I've always liked knowing how things work from the inside. Programming gives me the freedom to create something from scratch with just a computer and logic. Plus, that feeling when you solve a bug that was driving you crazy... priceless!",
    "Windows, Mac or Linux?": "The million-dollar question. I adapt to whatever the team uses, although I have my personal preferences for developing. As I always say: the arrow doesn't matter, the archer does! ;)",
    "Why should I hire you?": "Because beyond technical skills, I bring attitude. I'm someone who adds to the team, who isn't afraid to ask if I have doubts, and who takes every project as my own.",
    "Light or Dark Theme?": "Do you really need to ask? Dark Theme always. My eyes appreciate it and, let's be honest, code looks more important on a black background. Although I've put a switch in the navbar if you prefer light mode! ;)",
    "Are you a real AI?": "Mmm... I'd like to tell you I'm a super-intelligent AI, but actually I'm a set of predefined responses that Yunai programmed with love for you. But I play the part well, right!",
    "What do you do when you get stuck with a bug?": "I have a protocol: 1. Read the error in detail. 2. Research official documentation. 3. If I'm still stuck after a while, I ask for help. I'm not afraid to ask; it's better to raise your hand in time than lose hours going in circles.",
    "Do you prefer working alone or in a team?": "I enjoy both. Working alone I'm responsible for the whole project and I like having that control, however, in a team four eyes see more than two. The best software usually comes from collaboration and exchange of ideas, not from a lone wolf."
  }
};
