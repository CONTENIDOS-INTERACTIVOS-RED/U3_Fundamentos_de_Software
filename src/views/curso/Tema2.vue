<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Introducción a sistemas de control de versiones (Git y GitHub)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los sistemas de control de versiones son herramientas fundamentales en el desarrollo de <em>software</em> moderno, dado que permiten gestionar el código fuente, realizar un seguimiento de los cambios y colaborar de manera eficiente. En este capítulo, se presenta una introducción a Git y GitHub, dos herramientas claves para la gestión de versiones.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] ¿Qué es un sistema de control de versiones?

    p.mb-5 Un sistema de control de versiones (SCV), es una herramienta que registra los cambios en el código fuente de un proyecto, manteniendo un historial completo y permitiendo restaurar versiones anteriores. Además, facilita la colaboración entre los miembros del equipo.

    h2.mb-3(data-aos="fade-right") Características principales

    p.mb-5 Las características principales de los sistemas de control de versiones, garantizan un desarrollo eficiente y organizado.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/2.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Seguimiento de cambios
              p.mb-0.text-center Registra todas las modificaciones en el código.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/3.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Colaboración
              p.mb-0.text-center Permite a varios desarrolladores trabajar en el mismo proyecto, sin sobrescribir los cambios de los demás.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/4.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Recuperación de versiones anteriores
              p.mb-0.text-center Facilita volver a versiones previas, en caso necesario.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/5.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Desarrollo paralelo
              p.mb-0.text-center Facilita trabajar en ramas (<em>branches</em>), permitiendo un desarrollo simultáneo.
  
        h2.mb-3(data-aos="fade-right") Ventajas que tienen los sistemas de control de versiones

        p.mb-5 Los sistemas de control de versiones ofrecen ventajas significativas que optimizan el desarrollo de proyectos.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1.mb-3.mb-lg-0
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Seguridad")
            p Permite recuperar el trabajo perdido ante errores graves, asegurando la integridad del proyecto.
          div(numero="2" titulo="Colaboración eficiente")
            p Facilita la integración de cambios realizados por diferentes desarrolladores.
          div(numero="3" titulo="Gestión de versiones")
            p Proporciona un historial detallado de las modificaciones realizadas, permitiendo rastrear cambios.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Introducción a Git

    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Git es un sistema de control de versiones distribuido de código abierto. Cada desarrollador tiene una copia completa del repositorio, lo que permite trabajar de forma independiente e integrar cambios, posteriormente.
    
    h2.mb-3(data-aos="fade-right") Características principales

    p.mb-5 Los sistemas de control de versiones distribuidos, destacan por características claves que optimizan el flujo de trabajo.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/8.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Distribuido
              p.mb-0.text-center Cada colaborador tiene una copia completa del proyecto y su historial.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/9.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Rendimiento
              p.mb-0.text-center Es rápido en operaciones como creación de ramas y fusión de cambios.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/10.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Integración de cambios
              p.mb-0.text-center Usa herramientas como <em>merge</em> y <em>rebase</em>, para combinar cambios.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/11.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Ramas (<em>branches</em>)
              p.mb-0.text-center Facilita el desarrollo de características, sin afectar la versión principal.

        h2.mb-5(data-aos="fade-right") Ventajas que tiene Git

        p.mb-5 Git ofrece diversas ventajas que lo posicionan como una herramienta esencial en el desarrollo de proyectos.

    .row.justify-content-center.align-items-center.bg-h85-2.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>Desarrollo paralelo sin interferencias:</b> permite trabajar en ramas, sin alterar el código principal.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Control total sobre el código:</b> proporciona acceso al historial completo del proyecto.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>Facilidad de uso:</b> ofrece comandos simples, para tareas básicas.
              
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/12.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2.mb-5(data-aos="fade-right") Flujo de trabajo con Git y GitHub

    .bg-color-16.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/13.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El flujo de trabajo combina pasos esenciales para gestionar el código de manera eficiente, desde la creación del repositorio, hasta la integración de cambios de varios desarrolladores.
    
    h2.mb-5(data-aos="fade-right") Características principales

    p.mb-5 Las características principales de Git, lo convierten en una herramienta versátil y poderosa para la gestión de proyectos de desarrollo.

    .row.justify-content-center.align-items-center.bg-h85-5.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>Clonación de repositorios:</b> copia el repositorio a la máquina local.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Creación de ramas:</b> facilita el desarrollo de características o correcciones.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>Commits:</b> registra cambios realizados en el código.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 <b>Pull requests:</b> permite revisar y fusionar cambios en el repositorio principal.
              
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/14.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2.mb-5(data-aos="fade-right") Ventajas que tiene este flujo de trabajo

    p.mb-5 El flujo de trabajo de Git, presenta múltiples ventajas que optimizan el desarrollo colaborativo.

    .bg-full-width-1.bg-color-7.mb-5
      .px-4.px-md-5
        .row.justify-content-center.p-5
          .col-lg-10.align-items-center
            figure
              img(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in")
    

    h2.mb-3(data-aos="fade-right") Beneficios de usar Git y GitHub

    p.mb-5 Git y GitHub ofrecen múltiples beneficios que mejoran la productividad y la colaboración, en proyectos de desarrollo.

    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1.mb-3.mb-lg-0
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Control total sobre el código")
            p Permite gestionar de forma precisa, las versiones e historial del proyecto.
          div(numero="2" titulo="Colaboración mejorada")
            p Facilita revisiones de código y combina aportes de manera eficiente, entre los desarrolladores.
          div(numero="3" titulo="Acceso desde cualquier lugar")
            p Ofrece acceso a proyectos, desde cualquier dispositivo con conexión a Internet.
          div(numero="3" titulo="Seguridad")
            p Garantiza un almacenamiento seguro y permite la recuperación de versiones anteriores del proyecto.
    
    h2.mb-5(data-aos="fade-right") Principales comandos de Git

    p.mb-5 Git proporciona comandos claves para gestionar repositorios de forma eficiente, mejorando el flujo de trabajo y la productividad.

    .row.justify-content-center.align-items-center.bg-h85-2
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").order-2
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>git init: </b> inicializa un nuevo repositorio.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>git clone: </b> clona un repositorio existente
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>git add: </b> agrega cambios a la zona de preparación (<em>staging area</em>).
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 <b>git commit: </b> registra cambios en el repositorio.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 <b>git push: </b> sube los cambios locales al repositorio remoto.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 6
                p.mb-0 <b>git pull: </b> descarga cambios recientes del repositorio remoto
              
          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema2/17.png', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 Git y GitHub son herramientas esenciales para desarrolladores modernos. Proporcionan control sobre el código, facilitan la colaboración y mantienen un historial completo del trabajo. Con su uso, se optimiza la productividad, la calidad del código y la capacidad de colaboración en proyectos de <em>software</em>.


  

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.freecodecamp.org/espanol/news/hoja-de-referencia-de-git-50-comandos-de-git-que-debe-conocer-2/" target="_blank" rel="noopener noreferrer") FreeCodeCamp. (2023). Hoja de referencia de Git: 50 comandos de Git que debe conocer. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://codigonautas.com/comandos-basicos-git-debes-conocer/" target="_blank" rel="noopener noreferrer") 30 Comandos Básicos de Git que debes Conocer. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://github.com/features/copilot/plans" target="_blank" rel="noopener noreferrer") GitHub Copilot.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wfSrFbob9-8 " target="_blank" rel="noopener noreferrer") Crysfel Villa. (2013). Curso de GIT: El worflow.  

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
