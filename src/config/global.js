export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Herramientas y metodologías de desarrollo de software',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios de diseño (cohesión, acoplamiento, modularidad)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Introducción a sistemas de control de versiones (Git y GitHub)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es un sistema de control de versiones?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Introducción a Git',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas básicas para el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Monte Galiano, J. (2016). Implantar scrum con éxito. Editorial UOC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58575',
    },
    {
      referencia:
        'Heras del Dedo, R. D. L. & Álvarez García, A. (2017). Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122933',
    },
    {
      referencia:
        'Clery Aguirre, A. G. (2009). Aplicación y uso del sistema Kanban para lograr la eficiencia operativa de una empresa. El Cid Editor | apuntes.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/28569',
    },
    {
      referencia:
        'Gomez, J. (2015). Git: Introducción y fundamentos, día 1. Universidad de Córdoba.',
      link:
        'https://www.uco.es/aula<em>software</em>libre/wp-content/uploads/2015/11/git-cosfera-dia-1.pdf',
    },
    {
      referencia: 'Fiqus. (2016). Git-Manual básico de usuario.',
      link: ' https://www.valor.es/wp-content/uploads/2016/04/git_manual.pdf',
    },
    {
      referencia:
        'Díaz Polo, D. (2011). Definición de un proceso de desarrollo de <em>software</em> en un entorno universitario. D - Instituto Superior Politécnico José Antonio Echeverría. CUJAE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/86033 ',
    },
    {
      referencia: 'Ilerna Online. (2021). Entornos de desarrollo. Cartagena99.',
      link:
        'https://www.cartagena99.com/recursos/alumnos/apuntes/210927125051-Entornos%20de%20desarrollo_%20Material%20didactico.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Compilador',
      significado:
        'Programa que traduce el código fuente escrito en un lenguaje de programación de alto nivel a un lenguaje de bajo nivel, como código máquina, para que pueda ser ejecutado por una computadora.',
    },
    {
      termino: 'Control de versiones',
      significado:
        'Herramienta que permite a los desarrolladores gestionar y hacer un seguimiento de los cambios realizados en el código fuente a lo largo del tiempo.',
    },
    {
      termino: '<em>Debugging</em> (Depuración)',
      significado:
        'Proceso de identificar, analizar y corregir errores o "bugs" en el código de un programa informático. Es una tarea esencial en el desarrollo de <em>software</em> para garantizar su correcto funcionamiento.',
    },
    {
      termino: 'Git',
      significado:
        'Sistema de control de versiones distribuido que permite a los desarrolladores gestionar el código fuente y su historial de cambios.',
    },
    {
      termino: 'GitHub',
      significado:
        'Plataforma de desarrollo colaborativo basada en la web que utiliza Git para el control de versiones. Permite a los usuarios almacenar y compartir repositorios de código, facilitando la colaboración en proyectos de <em>software</em>.',
    },
    {
      termino: 'IDE (Entorno de Desarrollo Integrado)',
      significado:
        '<em>software</em> que proporciona un conjunto de herramientas necesarias para el desarrollo de <em>software</em> en un solo entorno. Incluye un editor de código, un compilador, un depurador y herramientas de control de versiones.',
    },
    {
      termino: 'Kanban',
      significado:
        'Metodología ágil de gestión de proyectos que utiliza un sistema visual de tarjetas o tableros para representar el flujo de trabajo. Kanban ayuda a visualizar las tareas y priorizar el trabajo en equipo de manera eficiente.',
    },
    {
      termino: 'Métodos Ágiles',
      significado:
        'Conjunto de prácticas de desarrollo de <em>software</em> que enfatizan la colaboración, la flexibilidad y la entrega incremental. Los métodos ágiles buscan adaptarse rápidamente a los cambios en los requerimientos y necesidades del cliente.',
    },
    {
      termino: 'Scrum',
      significado:
        'Marco de trabajo ágil utilizado para gestionar proyectos de <em>software</em> de manera iterativa e incremental. Scrum organiza el trabajo en ciclos llamados <em>sprints</em> y se enfoca en mejorar la productividad del equipo mediante la colaboración y la revisión constante.',
    },
    {
      termino: 'Sistema de control de versiones distribuido',
      significado:
        'Tipo de sistema de control de versiones donde cada desarrollador tiene una copia completa del proyecto y su historial, lo que permite trabajar sin conexión y facilita la colaboración entre equipos distribuidos.',
    },
    {
      termino: 'Texto plano',
      significado:
        'Tipo de archivo que contiene solo texto sin formato ni estructura adicional, sin incluir elementos de estilo como negrita o cursiva. Los editores de texto suelen trabajar con archivos de texto plano, lo que los hace ligeros y rápidos.',
    },
    {
      termino: 'Versión',
      significado:
        'Cada actualización o modificación significativa de un programa o proyecto de <em>software</em>. En el control de versiones, las versiones ayudan a gestionar los cambios a lo largo del tiempo, permitiendo a los desarrolladores regresar a una versión anterior si es necesario.',
    },
  ],
}
