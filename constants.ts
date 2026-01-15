
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Yunai Cárdenes',
  age: 24,
  role: 'Junior Fullstack Developer',
  bio: "Soy Desarrollador Full Stack. Para mí, esto va mucho más allá de 'picar código': se trata de construir soluciones que tengan sentido lógico. No me conformo con que las cosas simplemente funcionen; necesito entender el porqué para hacerlo bien. Soy inquieto por naturaleza, así que siempre me verás probando nuevas herramientas o metodologías para mejorar mi forma de trabajar.",
  location: 'Gran Canaria, España',
  email: 'cardenesyunai@gmail.com',
  phone: '+34 675 46 83 07',
  github: 'https://github.com/Yunicaard',
  linkedin: 'https://www.linkedin.com/in/alejandro-yunai-c%C3%A1rdenes-iglesias/',
  twitter: 'https://twitter.com/yunai',
  avatarUrl: './profile.jpg'
};

export const PROJECTS: Project[] = [
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
];

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

export const FAQ_ANSWERS: Record<string, string> = {
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
  "¿Tema Claro o Tema Oscuro?": "¿De verdad hace falta preguntar? Tema Oscuro siempre. Mis ojos lo agradecen y, seamos sinceros, el código parece más importante sobre fondo negro.",
  "¿Eres una IA de verdad?": "Mmm... me gustaría decirte que soy una superinteligencia artificial, pero en realidad soy un conjunto de respuestas predefinidas que Yunai programó con mucho cariño para ti. ¡Pero doy el pego, eh!",
  "¿Qué haces cuando te atascas con un bug?": "Tengo un protocolo: 1. Leer el error detalladamente. 2. Investigar en documentación oficial. 3. Si sigo atascado tras un buen rato, pido ayuda. No me da miedo preguntar; es mejor levantar la mano a tiempo que perder horas dando vueltas.",
  "¿Prefieres trabajar solo o en equipo?": "Disfruto de ambos. Al trabajar solo soy responsable de todo el proyecto y me gusta tener ese control, sin embargo, en equipo cuatro ojos ven más que dos. El mejor software suele nacer de la colaboración y el intercambio de ideas, no de un llanero solitario."
};
