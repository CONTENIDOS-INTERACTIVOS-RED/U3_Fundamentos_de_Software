<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5.justify-content-center
      .col-lg-7
        p.bg-color-1.p-4 Las metodologías ágiles han revolucionado la forma en que se gestionan los proyectos, especialmente en el desarrollo de <em>software</em>. Estas metodologías, como Scrum y Kanban, se caracterizan por su enfoque en la colaboración, la adaptabilidad y la entrega continua de valor. A diferencia de los modelos tradicionales, las metodologías ágiles permiten responder de manera eficiente a los cambios y ajustar el rumbo del proyecto, según las necesidades del cliente y los desafíos del entorno.
        p Entre las metodologías ágiles más utilizadas, Scrum destaca por su estructura basada en sprints, roles definidos y ceremonias organizadas que fomentan la transparencia y la mejora continua. Por otro lado, Kanban optimiza los flujos de trabajo mediante tableros visuales que permiten gestionar tareas de manera flexible y eficiente. Ambas metodologías priorizan la colaboración y la comunicación entre los equipos, logrando un enfoque más dinámico y centrado en los resultados.
      .col-md-8.col-lg-5
        figure
          img(src='@/assets/curso/intro/1.svg', data-aos="zoom-in")
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 En complemento, herramientas como Git y GitHub, potencian la gestión colaborativa y el control de versiones, facilitando el trabajo en equipo y el manejo del código fuente. Asimismo, los editores de texto modernos y entornos integrados de desarrollo (IDE) ofrecen funcionalidades que mejoran la productividad y simplifican tareas complejas. En conjunto, estas herramientas y metodologías son esenciales para afrontar los retos del desarrollo de <em>software</em> en un entorno dinámico y competitivo.

</template>
