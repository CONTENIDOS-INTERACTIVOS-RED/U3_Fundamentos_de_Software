<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5.justify-content-center
      .col-lg-7
        p.bg-color-1.p-4 El diseño de <em>software</em> es una disciplina esencial en el desarrollo de sistemas tecnológicos que responden a las necesidades actuales y se adaptan a futuros cambios. Para alcanzar este objetivo, se aplican principios fundamentales como la cohesión, el acoplamiento y la modularidad, los cuales permiten crear soluciones claras, escalables y sostenibles. Estos principios aseguran que los sistemas sean comprensibles y gestionables, a lo largo de su ciclo de vida.
        p Además, el uso de diagramas UML se convierte en una herramienta clave para planificar y comunicar el diseño del <em>software</em>. Representaciones como los diagramas de casos de uso, clases y secuencias, facilitan la comprensión de la estructura estática y dinámica del sistema, permitiendo identificar problemas y soluciones, antes de la implementación. Esto mejora la colaboración entre equipos y optimiza el desarrollo.
      .col-md-8.col-lg-5
        figure
          img(src='@/assets/curso/intro/1.svg', data-aos="zoom-in")
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 Finalmente, el enfoque orientado a objetos, aporta una estructura sólida al diseño, empleando conceptos como clases, objetos y herencia, para organizar y reutilizar componentes. Este enfoque no solo simplifica la complejidad de los sistemas, sino que también fomenta la creación de <em>software</em> que evoluciona junto con las necesidades de los usuarios y la tecnología.

</template>
