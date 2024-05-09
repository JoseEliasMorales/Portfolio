import { briefcase, concept, css, file, home, html, instagram, javaScript, linkedin, message, pocket, rally, react, tailwind, user, uxf } from '../assets'

export const EsData = {
  navbar: [
    { img: home, text: 'Home' },
    { img: user, text: 'About' },
    /* { img: file, text: 'Service' }, */
    { img: briefcase, text: 'Portfolio' },
    { img: message, text: 'Contact' }
  ],
  home: {
    title: 'Bienvenido/a',
    howIAm: 'Soy Jose Elias Morales',
    job: 'Web Developer'
  },
  about: {
    name: 'Jose Elias Morales',
    job: 'Web Developer',
    description: 'Soy  un apasionado desarrollador web con una historia laboral sólida y emocionante. Durante más de una década, trabajé en el sector privado de la logística, donde adquirí habilidades en resolución de problemas, gestión de recursos humanos y colaboración interempresarial. En 2023, decidí seguir mi pasión por la programación y me gradué como Desarrollador Front-End, manteniéndome siempre entre los mejores alumnos de mi clase.  \nMi objetivo profesional es consolidarme como desarrollador web, aprovechando mi iniciativa y responsabilidad para enfrentar nuevos desafíos con confianza y determinación. \nAdemás de mi carrera, disfruto del baloncesto, las series y la lectura, lo que me ayuda a mantener un equilibrio entre el trabajo y el ocio. Si estás buscando a alguien con iniciativa, responsabilidad y un enfoque lógico para resolver problemas, ¡no dudes en contactarme!',
    skills: {
      title: 'My Skills',
      skills: [
        { name: 'JavaScript', img: javaScript },
        { name: 'React', img: react },
        { name: 'HTML', img: html },
        { name: 'CSS3', img: css },
        { name: 'Tailwindcss', img: tailwind }
      ]
    }
  },
  portfolio: {
    title: 'Portfolio',
    description: 'See my work',
    projects: [
      { name: 'UXFinity', category: 'Portfolio', url: 'https://www.uxfinityagency.com/', img: uxf },
      { name: 'PocketPal', category: 'Billetera Virtual - Practica', url: 'https://pocketpal-66fc9.web.app/', img: pocket },
      { name: 'Rallyfund', category: 'Crowfunding - Practica', url: 'https://rallyfund-1b44f.web.app/', img: rally },
      { name: 'Concept Desing', category: 'Portfolio', url: 'https://concept-design-17b79.web.app/', img: concept }
    ]
  },
  contact: {
    title: 'Contacto',
    labelName: 'Nombre',
    labelEmail: 'Email',
    labelSubject: 'Asunto',
    lamelMessagge: 'Escribe tu mensaje aqui...',
    btn: 'Send Message'
  },
  footer: {
    name: 'Jose Elias Morales',
    email: 'joselias.dev@gmail.com',
    followTitle: 'Sigueme',
    contactTitle: 'Contactame',
    follow: [
      { socialImg: instagram, link: 'https://www.instagram.com/joselias.m', socialName: 'Instagram' },
      { socialImg: linkedin, link: 'https://www.linkedin.com/in/joseeliasmorales', socialName: 'Linkedin' }
    ],
    copyrigthYear: 'Copyright ©',
    rigths: 'Todos los derechos reservados',
    done: 'Esta web esta hecha con',
    done2: 'por',
    done3: 'Mi',
    love: 'amor'
  }
}
