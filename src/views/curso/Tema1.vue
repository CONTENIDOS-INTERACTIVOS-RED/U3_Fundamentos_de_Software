<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Principios de diseño (cohesión, acoplamiento, modularidad)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las metodologías ágiles son prácticas diseñadas para agilizar el desarrollo de <em>software</em> a través de iteraciones rápidas, colaboración constante y adaptabilidad a cambios. A diferencia de enfoques tradicionales como el modelo en cascada, permiten entregar resultados funcionales a corto plazo y ajustar el rumbo del proyecto según sea necesario.
    
    h2.mb-3(data-aos="fade-right") Características principales

    p.mb-5 Las características principales de los proyectos ágiles destacan por su enfoque en la flexibilidad y la colaboración.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-5.h-100.p-4.tarjeta
          h2 01
          p.text-bold Iteración y entregas frecuentes
          p.mb-0 Los proyectos se dividen en ciclos cortos (iteraciones o <em>sprints</em>), facilitando la entrega rápida de resultados.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-4.h-100.p-4.tarjeta
          h2 02
          p.text-bold Colaboración
          p.mb-0 Se fomenta una comunicación constante entre todos los miembros del equipo (desarrolladores, clientes y otros <em>stakeholders</em>).
      .col-lg-4(data-aos="fade-up")
        div.bg-color-5.h-100.p-4.tarjeta
          h2 03
          p.text-bold Adaptabilidad
          p.mb-0 Permiten ajustar el enfoque según surjan nuevos requisitos o problemas.

    h2.mb-3(data-aos="fade-right") Ventajas de las metodologías ágiles

    p.mb-5 Las metodologías ágiles ofrecen múltiples ventajas que las convierten en un enfoque ideal para la gestión de proyectos dinámicos y cambiantes.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/2.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="3%" y="57.7%" numero="+")
                  h5 Flexibilidad
                  p Los cambios pueden realizarse sin interrumpir el progreso general del proyecto.


                .bg-color-white.box-shadow.p-3(x="97%" y="57.5%" numero="+")
                  h5 Visibilidad
                  p Las entregas frecuentes permiten evaluar el progreso del proyecto de forma continua.


                .bg-color-white.box-shadow.p-3(x="88.7%" y="17%" numero="+")
                  h5 Calidad superior
                  p La mejora continua y las pruebas constantes incrementan la calidad del <em>software</em>.

    h2.mb-3(data-aos="fade-right") Origen y valores del manifiesto ágil

    p.mb-5 En el 2001, un grupo de expertos en desarrollo de <em>software</em>, creó el Manifiesto Ágil como respuesta a la rigidez de los métodos tradicionales. Sus principios básicos son:

    .row.justify-content-center.align-items-center.bg-h85.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Priorizar a las personas y sus interacciones sobre los procesos y herramientas.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Enfocarse en <em>software</em> funcional más que en documentación exhaustiva.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Fomentar la colaboración con el cliente, antes que atenerse estrictamente a un contrato.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Responder al cambio en lugar de seguir un plan rígido.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-5 Estos valores trascienden el desarrollo de <em>software</em> y pueden aplicarse a diversos tipos de proyectos.

    h2.mb-3(data-aos="fade-right") Los 12 principios del Manifiesto Ágil

    p.mb-5 Además de los valores, el manifiesto establece 12 principios claves para organizar el trabajo en equipos ágiles. Algunos destacados son: 

    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")(data-aos="zoom-in")
        
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Satisfacción del cliente
                  p.mb-0.text-center Entregas continuas y tempranas de <em>software</em> funcional.
   
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Flexibilidad ante cambios
                  p.text-center.mb-0 Capacidad de adaptarse a cambios, incluso en etapas avanzadas del desarrollo.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Entregas frecuentes
                  p.text-center.mb-0 Ciclos de semanas o meses para garantizar progreso constante.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Trabajo conjunto
                  p.text-center.mb-0 Colaboración entre desarrolladores y clientes para mejorar diseño y funcionalidad.  
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Ritmo sostenible
                  p.text-center.mb-0 Evitar sobrecargas para prevenir agotamiento en el equipo de trabajo. 
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Simplicidad
                  p.text-center.mb-0 Construir <em>software</em> eficiente, eliminando complejidades innecesarias.    

          .col-md-8.col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')
      
    h2.mb-3(data-aos="fade-right") Implementación y beneficios de la filosofía ágil

    p.mb-5 Adoptar los principios del manifiesto ágil, aporta beneficios claves en equipos o proyectos de <em>software</em>, tales como:
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Mejora en la calidad del <em>software</em>" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Mejora en la calidad del <em>software</em>
            p La entrega continua y la retroalimentación constante, permiten corregir errores y realizar mejoras durante el ciclo de vida del proyecto, reduciendo errores críticos al final.

        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Flexibilidad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Flexibilidad
            p Los cambios en requisitos o prioridades se abordan sin grandes interrupciones, ideal en entornos de desarrollo dinámicos.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Comunicación y colaboración" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Comunicación y colaboración
            p El enfoque colaborativo fomenta una comunicación abierta y una cultura de trabajo cohesiva, mejorando el rendimiento del equipo y la satisfacción tanto de clientes como de desarrolladores.

          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/13.png', alt='', style="width: 100%;")

    h2.mb-3(data-aos="fade-right") Scrum - Metodología Ágil

    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") Scrum es un marco de trabajo ágil que facilita la gestión de proyectos iterativos e incrementales. Permite a los equipos de desarrollo trabajar en sprints (ciclos de trabajo) de 1 a 4 semanas, entregando incrementos funcionales del producto. Durante cada sprint, se realiza la planificación, el desarrollo y la evaluación del progreso.

    h2.mb-3(data-aos="fade-right") Características principales

    p.mb-5 Scrum es un marco de trabajo ágil que promueve la colaboración y adaptabilidad en proyectos dinámicos. Sus características principales se enfocan en la organización estructurada y la mejora continua.

    .bg-full-width.bg-color-10.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
          .col-lg-6.order-1            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Scrum"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    h2.mb-3(data-aos="fade-right") Implementación de <em>Scrum</em>

    p.mb-5 La implementación de <em>Scrum</em> requiere un enfoque estructurado y colaborativo.

    .row.justify-content-center.align-items-center.bg-h85.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Formar un equipo con roles bien definidos: <em>Scrum Master, Product Owner</em> y equipo de desarrollo.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Planificar el sprint, seleccionando tareas prioritarias del <em>Product Backlog</em>.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Realizar reuniones diarias para coordinar esfuerzos y resolver bloqueos.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 Revisar los resultados al final del <em>sprint</em> y aplicar retroalimentación para mejoras futuras.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/16.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Scrum es un marco flexible y colaborativo que facilita la entrega continua de valor, permitiendo adaptarse a las necesidades cambiantes de los proyectos.

    .bg-full-width.bg-color-9.mb
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Kanban
            p.mb-4(data-aos="fade-right") Kanban es una metodología ágil que optimiza el flujo de trabajo mediante tableros visuales divididos en columnas como "Por hacer", "En progreso" y "Hecho". Sus principales beneficios incluyen flexibilidad, reducción de sobrecarga, mejora continua y colaboración efectiva. Ideal para equipos que buscan eficiencia y adaptación rápida, puede aplicarse en diversos sectores.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Kanban.

          .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
      

  

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://openlibrary.org/works/OL3526668W/UML_for_Java_programmers" target="_blank" rel="noopener noreferrer") Robert, M. (2003). UML for Java programmers. Addison-Wesley.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/marketing/metodologia-scrum" target="_blank" rel="noopener noreferrer") Metodología Scrum: qué es, cuáles son sus fases y cómo implementarla.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://monday.com/lang/es " target="_blank" rel="noopener noreferrer") Monday.com
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BWyMyq4xu48&t=3s" target="_blank" rel="noopener noreferrer") OpenWebinars. (2018). 10 DIFERENCIAS ENTRE KANBAN Y SCRUM  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
