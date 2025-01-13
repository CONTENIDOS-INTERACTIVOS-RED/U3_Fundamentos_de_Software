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
            p.mb-0(data-aos="fade-up") El diseño de <em>software</em>, constituye un pilar esencial en el desarrollo de sistemas tecnológicos que sean funcionales, escalables y de fácil mantenimiento. Aplicar principios sólidos como cohesión, acoplamiento y modularidad, asegura que las soluciones cumplan con los objetivos actuales y puedan adaptarse a necesidades futuras. A continuación, se detalla cada uno de estos principios, destacando su significado, importancia, beneficios y aplicaciones prácticas.
    
    h2.mb-3(data-aos="fade-right") Principio de cohesión en el diseño de <em>software</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-1
        .bg-color-1.p-4(data-aos="fade-left").mb-3.mb-lg-0
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La cohesión mide el nivel de relación entre las responsabilidades dentro de un módulo. Un módulo cohesivo concentra funciones y datos que trabajan en conjunto, para un propósito único. Este principio mejora la mantenibilidad, escalabilidad y comprensión del <em>software</em>.
      
    h2.mb-3(data-aos="fade-right") Definición y propósito de la cohesión

    p.mb-5 La cohesión evalúa qué tan relacionadas están las partes de un módulo. En un diseño cohesivo, funciones y datos están alineados con un objetivo único, lo que elimina responsabilidades dispersas. Un módulo cohesivo:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-5.h-100.p-4.tarjeta
          h2 01
          p.mb-0.text-center <b>Tiene un propósito claro: </b> cada función contribuye a un objetivo común.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-4.h-100.p-4.tarjeta
          h2 02
          p.mb-0.text-center <b>Reduce la complejidad interna: </b> al enfocarse en tareas específicas, minimiza interacciones innecesarias.
      .col-lg-4(data-aos="fade-up")
        div.bg-color-5.h-100.p-4.tarjeta
          h2 03
          p.mb-0.text-center <b>Facilita el mantenimiento: </b> delimita áreas de trabajo claras.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Tipos de cohesión

    p.mb-5 La cohesión se clasifica en una escala de baja a alta, según la relación entre los elementos del módulo:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")(data-aos="zoom-in")
        
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Cohesión coincidente
                  p.mb-0.text-center Los elementos están agrupados sin relación clara. 
                  p.mb-0.text-center <b>Ejemplo:</b> un módulo que gestiona usuarios, calcula precios y procesa pagos. 
                  p.mb-0.text-center <b>Impacto:</b> dificulta el mantenimiento y comprensión.
   
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Cohesión lógica
                  p.text-center.mb-0 Los elementos realizan tareas similares, pero no están conectados funcionalmente.  
                  p.text-center.mb-0 <b>Ejemplo:</b> un módulo para leer, escribir y modificar diferentes tipos de archivos.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Cohesión temporal
                  p.text-center.mb-0 Agrupa funciones por ejecución en la misma secuencia temporal. 
                  p.text-center.mb-0 <b>Ejemplo:</b> inicialización de variables y apertura de conexiones.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Cohesión funcional
                  p.text-center.mb-0 Todos los elementos trabajan en conjunto, para una tarea específica 
                  p.text-center.mb-0 <b>Ejemplo:</b> un módulo que gestiona reservas en un hotel.         

          .col-md-8.col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')
    
        h2.mb-3(data-aos="fade-right") Importancia de la cohesión en el diseño de <em>software</em>

        p.mb-5 La cohesión impacta directamente la calidad del diseño. Los beneficios incluyen:

    .row.justify-content-center.align-items-center.bg-h85.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>Facilidad de comprensión: </b> los módulos cohesivos son claros y fáciles de entender.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Mantenimiento optimizado:</b> sus responsabilidades bien definidas, facilitan modificaciones.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>Reutilización de código: </b>pueden extraerse y utilizarse en otros proyectos.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 <b>Reducción de errores:  </b> se minimizan interacciones complejas, que provocan fallos.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/9.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2.mb-3(data-aos="fade-right") Cómo lograr alta cohesión

    p.mb-5 Lograr alta cohesión requiere estrategias específicas:

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Definir el propósito del módulo
              p.mb-0.text-center Identificar claramente su objetivo.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Evitar agregar funciones no relacionadas
              p.mb-0.text-center Distribuir responsabilidades entre módulos distintos.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/12.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Aplicar principios de diseño SOLID
              p.mb-0.text-center En especial, el principio de responsabilidad única.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/13.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Revisar y refactorizar
              p.mb-0.text-center Asegurar que cada función contribuya al propósito del módulo.

        .row.justify-content-center.align-items-center.bg-h85-2.mb-5
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p.text-bold(data-aos="fade-right") Ejemplo práctico: cohesión en un sistema de gestión escolar
                p.mb-0 Un módulo cohesivo para la gestión de estudiantes incluiría funciones como registrar información, actualizar datos y consultar calificaciones. En cambio, un módulo no cohesivo que incluya asignar horarios a profesores o procesar pagos de matrícula, sería difícil de mantener.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/14.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 La cohesión fomenta claridad, sostenibilidad y mejora la colaboración en equipo. Diseñar módulos cohesivos garantiza que el sistema pueda evolucionar fácilmente.

    .bg-full-width.bg-color-9.mb
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Principio de acoplamiento en el diseño de <em>software</em>
            p.mb-4(data-aos="fade-right") El documento se centra en el principio de acoplamiento en el diseño de <em>software</em>, destacando su importancia para lograr sistemas modulares, mantenibles y escalables. Se describen los niveles de acoplamiento, desde el ideal desacoplamiento completo hasta el menos deseable acoplamiento de contenido, ofreciendo ejemplos para ilustrar cada tipo.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principio de acoplamiento en el diseño de <em>software</em>.

          .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='')
    

    #t_1_2.titulo-segundo(data-aos="flip-up").mt-5
      h2 #[span 1.2] Principio de modularidad en el diseño de <em>software</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p El principio de modularidad es un enfoque esencial en el diseño de <em>software</em>, que busca dividir un sistema complejo en partes más pequeñas y manejables, llamadas módulos. Cada módulo tiene una función específica y está diseñado para ser independiente o, al menos, para mantener una dependencia mínima con otros módulos. Este enfoque facilita el desarrollo, mantenimiento y evolución del <em>software</em>, mejorando su calidad.
        .bg-color-1.p-4(data-aos="fade-left").mb-3.mb-lg-0
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La modularidad se define como la capacidad de un sistema para dividirse en componentes funcionales autónomos, que trabajan juntos para cumplir los objetivos generales. Un módulo es una unidad lógica, conceptual o física, que agrupa elementos relacionados, como funciones, datos o clases, y opera como una entidad separada.
    
    h2.mb-3(data-aos="fade-right") Propiedades claves de un módulo

    p.mb-5 Los módulos son componentes esenciales en el desarrollo de sistemas, definidos por propiedades claves que aseguran su funcionalidad y eficiencia.

    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-3
          .col-lg-8
            figure
              img(src="@/assets/curso/tema1/18.svg", data-aos="zoom-in") 
        
        h2.mb-3(data-aos="fade-right") Importancia de la modularidad

        p.mb-5 La modularidad es un principio clave en el desarrollo de sistemas, por los múltiples beneficios que aporta.

        .row.justify-content-center.align-items-center.bg-h85-4.mb-5
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left")
                ol.lista-ol--cuadro(data-aos="fade-up").mb-0
                  li.mb-0.d-flex.p-2
                    .lista-ol--cuadro__vineta
                      span 1
                    p.mb-0 <b>Mantenibilidad: </b> facilita la localización y corrección de errores, además de implementar cambios.
                  li.mb-0.d-flex.p-2 
                    .lista-ol--cuadro__vineta
                      span 2
                    p.mb-0 <b>Reutilización: </b> los módulos bien diseñados pueden utilizarse en otros proyectos o partes del sistema, ahorrando tiempo y esfuerzo.
                  li.mb-0.d-flex.p-2 
                    .lista-ol--cuadro__vineta
                      span 3
                    p.mb-0 <b>Escalabilidad: </b>permite agregar nuevas funcionalidades sin reestructurar el <em>software</em> existente.
                  li.mb-0.d-flex.p-2 
                    .lista-ol--cuadro__vineta
                      span 4
                    p.mb-0 <b>Colaboración: </b> los equipos de desarrollo pueden trabajar simultáneamente en diferentes módulos.
                  li.mb-0.d-flex.p-2 
                    .lista-ol--cuadro__vineta
                      span 5
                    p.mb-0 <b>Adaptabilidad: </b> los módulos independientes facilitan la adaptación del sistema a nuevas tecnologías o requisitos.
              .col-md-8.col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/19.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Alta cohesión" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Alta cohesión
            p Cada módulo debe enfocarse en una tarea específica y contener elementos relacionados entre sí.  
            p <b>Ejemplo:</b> un módulo dedicado exclusivamente a la autenticación de usuarios

        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Bajo acoplamiento" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Bajo acoplamiento
            p Los módulos deben ser lo más independientes posible, permitiendo cambiar o reemplazar un módulo, sin afectar a los demás.  
            p <b>Ejemplo:</b> un módulo de base de datos diseñado para ser sustituible sin impactar al módulo de lógica de negocio.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Interfaces bien definidas" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Interfaces bien definidas
            p Los módulos deben interactuar mediante interfaces claras y consistentes, evitando exponer detalles internos. 
            p <b>Ejemplo:</b> una API que facilita la comunicación entre los módulos de <em>frontend</em> y <em>back-end</em>.

          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/22.png', alt='', style="width: 100%;")

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Encapsulación" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Encapsulación
            p Los detalles internos de un módulo, deben estar ocultos para otros módulos.  
            p <b>Ejemplo:</b> una clase que oculta la lógica de un algoritmo y expone solo métodos públicos para interactuar con ella.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/23.png', alt='', style="width: 100%;")
    
    h2.mb-3(data-aos="fade-right") Ejemplo del principio de modularidad

    p.mb-5 En un sistema sin modularidad, funcionalidades como autenticación, gestión de usuarios y lógica de negocio, podrían encontrarse en un único archivo, lo que dificulta el mantenimiento. Por el contrario, un diseño modular, separa estas funcionalidades en módulos independientes:

    .row.justify-content-center.align-items-center.bg-h85-2.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3
            ol.lista-ol--cuadro(data-aos="fade-up")
              li.d-flex.p-4
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Un módulo para la autenticación de usuarios.
              li.d-flex.p-4 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Un módulo para la gestión de perfiles.
              li.d-flex.p-4 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Un módulo para la lógica de negocio.
            p.mb-0 Cada módulo interactúa mediante interfaces claras, lo que minimiza el impacto de los cambios en un módulo sobre los demás.          
          .col-md-8.col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/24.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 La modularidad en el diseño de sistemas ,ofrece tanto ventajas como desventajas, que deben considerarse cuidadosamente. 


    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 El principio de modularidad es esencial para construir sistemas de <em>software</em> mantenibles y escalables. Dividir un sistema en módulos funcionales con alta cohesión y bajo acoplamiento, permite gestionar la complejidad del desarrollo y facilita su evolución. Sin embargo, es crucial equilibrar la cantidad y tamaño de los módulos, para evitar complicaciones innecesarias. Este principio es un fundamento de metodologías modernas como la programación orientada a objetos, la arquitectura basada en microservicios y las prácticas de desarrollo ágil.



  


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/68913 " target="_blank" rel="noopener noreferrer") Echeverri, J. Aristizábal, M. & González, L. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de <em>software</em>. Corporación Universitaria Remington. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elblogdelprogramador.com/#gsc.tab=0 " target="_blank" rel="noopener noreferrer") El Blog Del Programador.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.euroinnova.com/https://www.autodesk.com/solutions/generative-design-ai-<em>software</em>?msockid=27322ed8fb286645002a3a85fa8767cb" target="_blank" rel="noopener noreferrer") Autodesk Generative Design.
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=STw8rKDFMaQ" target="_blank" rel="noopener noreferrer") Canarias JS. (2019). Simplicidad y otros principios del diseño de <em>software</em>. 

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
