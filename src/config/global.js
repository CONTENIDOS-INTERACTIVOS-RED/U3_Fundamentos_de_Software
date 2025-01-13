export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Principios de diseño de software',
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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de cohesión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Principio de modularidad en el diseño de <em>software</em>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagramas UML básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Las fases del SDLC',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos del SDLC',
            hash: 't_2_2',
          },
        ],
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
        'Díaz, J. Harari, I. & Amadeo, A. P. (2013). Guía de recomendaciones para diseño de <em>software</em> centrado en el usuario. Editorial de la Universidad Nacional de La Plata. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66410',
    },
    {
      referencia:
        'García Bermúdez, J. C. (2023). Diseño de elementos <em>software</em> con tecnologías basadas en componentes. IFCT0609 (2 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/246682 ',
    },
    {
      referencia:
        'Jiménez de Parga, C. (2014). UML Aplicaciones en Java y C++. RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106466 ',
    },
    {
      referencia:
        'Teniente López, E. Costal Costa, D. & Sancho Samsó, M. R. (2015). Especificación de sistemas <em>software</em> en UML. Universitat Politècnica de Catalunya. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61407 ',
    },
    {
      referencia:
        'Quintero, J. B. (2006). Un estudio comparativo de herramientas para el modelado con UML. Red Universidad Eafit. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5285',
    },
    {
      referencia:
        'Vélez Serrano, J. (2011). Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63076',
    },
  ],
  glosario: [
    {
      termino: 'Acoplamiento',
      significado:
        'Relación y dependencia entre módulos o componentes de un sistema. Un bajo acoplamiento indica que los módulos interactúan de manera mínima, favoreciendo la flexibilidad y el mantenimiento del sistema.',
    },
    {
      termino: 'Actor',
      significado:
        'En los diagramas de casos de uso, representa a una entidad externa (persona, sistema u organización) que interactúa con el sistema, para lograr un objetivo.',
    },
    {
      termino: 'Clase',
      significado:
        'Plantilla o modelo en el diseño, orientado a objetos que definen atributos (propiedades) y métodos (comportamientos) comunes a un grupo de objetos.',
    },
    {
      termino: 'Cohesión',
      significado:
        'Grado en que los elementos de un módulo o componente están relacionados y trabajan juntos para cumplir un propósito específico. Alta cohesión mejora la claridad y el mantenimiento.',
    },
    {
      termino: 'Diagrama de casos de uso',
      significado:
        'Representación gráfica en UML que describe las interacciones entre los actores y el sistema, mostrando las funcionalidades principales desde una perspectiva del usuario.',
    },
    {
      termino: 'Diagrama de clases',
      significado:
        'Modelo en UML que muestra las clases, sus atributos, métodos y las relaciones entre ellas, representando la estructura estática del sistema.',
    },
    {
      termino: 'Diagrama de secuencia',
      significado:
        'Representación en UML de las interacciones entre objetos a lo largo del tiempo, mostrando el orden cronológico de los mensajes intercambiados.',
    },
    {
      termino: 'Herencia',
      significado:
        'Principio del diseño orientado a objetos que permite que una clase (subclase) adquiera las características y comportamientos de otra clase (superclase), promoviendo la reutilización de código.',
    },
    {
      termino: 'Mensaje',
      significado:
        'Comunicación enviada entre objetos en un diagrama de secuencia, representando la invocación de un método o el intercambio de información.',
    },
    {
      termino: 'Modularidad',
      significado:
        'Principio del diseño que implica dividir un sistema en componentes independientes (módulos) que puedan ser desarrollados, probados y mantenidos por separado.',
    },
    {
      termino: 'Objeto',
      significado:
        'Instancia concreta de una clase en el diseño orientado a objetos, que encapsula datos (estado) y comportamiento (métodos).',
    },
    {
      termino: 'Relación',
      significado:
        'Conexión entre clases en un diagrama de clases, como asociación, agregación, composición o herencia, que define cómo interactúan o dependen entre sí.',
    },
  ],
}
