<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diagramas UML básicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés), es una herramienta clave para representar y planificar sistemas de <em>software</em>. Este lenguaje permite a desarrolladores, analistas y diseñadores, visualizar, especificar y documentar, distintos aspectos de un sistema, facilitando la comunicación entre equipos técnicos y no técnicos.
        p.mb-0 UML se compone de diagramas clasificados en dos categorías principales: diagramas estructurales, que representan los elementos estáticos de un sistema, y diagramas de comportamiento, que describen las dinámicas e interacciones entre los elementos.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tipos de diagramas UML y su clasificación

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.order-lg-2.mb-3
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Los diagramas UML (Unified Modeling Language) son herramientas esenciales para modelar y documentar sistemas, ofreciendo diferentes perspectivas a través de su clasificación en diagramas estructurales y de comportamiento.
        h2.mb-3(data-aos="fade-right") Diagramas estructurales
        p Representan los elementos estáticos del sistema, como clases, objetos y componentes físicos.
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")(data-aos="zoom-in")
        
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Diagrama de clases
                  p.mb-0.text-center Muestra la estructura estática de las clases, sus atributos, métodos y relaciones.  
                  p.mb-0.text-center <b>Ejemplo:</b> una clase "Vehículo" con atributos como marca y modelo, y métodos como arrancar ().
   
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Diagrama de objetos
                  p.text-center.mb-0 Representa instancias específicas de las clases, en un momento determinado.
                  p.text-center.mb-0 <b>Ejemplo:</b> un objeto "MiCoche" basado en la clase "Vehículo".
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Diagrama de componentes
                  p.text-center.mb-0 Representa los componentes físicos del sistema, como archivos o módulos.  
                  p.text-center.mb-0 <b>Ejemplo:</b> un módulo "Autenticación" que depende de una librería externa.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Diagrama de despliegue
                  p.text-center.mb-0 Describe cómo el sistema se distribuye en <em>hardware</em>. 
                  p.text-center.mb-0 <b>Ejemplo:</b> un servidor web conectado a una base de datos en otro servidor. 
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Diagrama de paquetes
                  p.text-center.mb-0 Agrupa clases u otros elementos relacionados.  
                  p.text-center.mb-0 <b>Ejemplo:</b> un paquete "Servicios" que incluye clases como "Usuario" y "Autenticación".

          .col-md-8.col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema2/3.png', alt='')
    
        h2.mb-3(data-aos="fade-right") Diagramas de comportamiento
        p Modelan las interacciones y cambios de los elementos del sistema a lo largo del tiempo.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.5%" y="64.7%" numero="+")
                  h5 Diagrama de casos de uso
                  p Representa funcionalidades del sistema desde la perspectiva del usuario. 
                  p <b>Ejemplo:</b> un actor "Cliente" que realiza un caso de uso "Realizar compra".


                .bg-color-white.box-shadow.p-3(x="10.5%" y="35.5%" numero="+")
                  h5 Diagrama de secuencia
                  p Muestra interacciones entre objetos, en orden temporal. 
                  p <b>Ejemplo:</b> una solicitud de inicio de sesión, que pasa por un controlador, un servicio y una base de datos.


                .bg-color-white.box-shadow.p-3(x="40%" y="6%" numero="+")
                  h5 Diagrama de actividades
                  p Representa flujos de trabajo o procesos dentro del sistema. 
                  p <b>Ejemplo:</b> un flujo para "Procesar pedido" con pasos como "Validar datos" y "Generar factura".


                .bg-color-white.box-shadow.p-3(x="72.5%" y="35.3%" numero="+")
                  h5 Diagrama de estados
                  p Describe los estados que atraviesa un objeto, durante su ciclo de vida.
                  p <b>Ejemplo:</b> un pedido que pasa de "Creado" a "Enviado" y luego a "Entregado".

                .bg-color-white.box-shadow.p-3(x="78%" y="65%" numero="+")
                  h5 Diagrama de interacción
                  p Combina interacciones específicas en diferentes escenarios. 
                  p <b>Ejemplo:</b> cómo interactúan un cliente, un sistema de pagos y un banco, durante una transacción.

    h2.mb-3(data-aos="fade-right") Ventajas del uso de UML
    p El uso de UML ofrece múltiples ventajas que lo convierten en una herramienta indispensable, en el desarrollo de sistemas.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
            div.bg-color-11.h-100.p-4.tarjeta
              h2 01
              p.text-bold.text-center Facilita la comunicación
              p.mb-0.text-center Proporciona un lenguaje común entre técnicos y no técnicos.
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
            div.bg-color-5.h-100.p-4.tarjeta
              h2 02
              p.text-bold.text-center Documentación estandarizada
              p.mb-0.text-center Garantiza un registro claro, para referencia futura.
          .col-lg-4(data-aos="fade-up")
            div.bg-color-11.h-100.p-4.tarjeta
              h2 03
              p.text-bold.text-center Reducción de complejidad
              p.mb-0.text-center Divide el sistema en múltiples perspectivas.
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
            div.bg-color-11.h-100.p-4.tarjeta
              h2 04
              p.text-bold.text-center Mejora la planificación 
              p.mb-0.text-center Permite prever problemas antes de la implementación.
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
            div.bg-color-5.h-100.p-4.tarjeta
              h2 05
              p.text-bold.text-center Reutilización de modelos
              p.mb-0.text-center Diagramas estructurales, pueden aplicarse en proyectos similares.
          .col-lg-4(data-aos="fade-up")
            div.bg-color-11.h-100.p-4.tarjeta
              h2 06
              p.text-bold.text-center Soporte para metodologías ágiles
              p.mb-0.text-center UML se adapta a enfoques de desarrollo. 

        h2.mb-3(data-aos="fade-right") Diagrama de casos de uso
        p Un diagrama de casos de uso, representa funcionalidades o requisitos desde la perspectiva del usuario, mostrando qué hace el sistema, no cómo lo hace. Este tipo de diagrama es clave en las primeras etapas de desarrollo, para definir objetivos claros y alinearlos con las necesidades del usuario.
        p.mb-5.text-bold Los componentes del diagrama de casos de uso, son: 

    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1.mb-3.mb-lg-0
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Actores")
            p Representan a los usuarios o sistemas externos, que interactúan con el sistema. 
            p <b>Ejemplo:</b> un "Cliente" realiza una compra, mientras un "Sistema de pagos", valida el proceso.
          div(numero="2" titulo="Casos de uso")
            p Funcionalidades que el sistema ofrece.  
            p <b>Ejemplo:</b> "Reservar un vuelo".
          div(numero="3" titulo="Sistema")
            p Define los límites del sistema representado.
          div(numero="4" titulo="Relaciones")
            p Conexiones entre actores y casos de uso:  
            p.mb-0 - Asociación: relación directa entre un actor y un caso de uso. 
            p.mb-0 - Inclusión: un caso de uso que incluye otro, como parte de su funcionalidad. 
            p.mb-0 - Extensión: un caso de uso que se activa bajo ciertas condiciones.
    
    .bg-full-width.bg-color-9.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Ejemplo de diagrama de casos de uso
            p.mb-4(data-aos="fade-right") El documento presenta un diagrama de casos de uso, para un sistema de biblioteca digital, con actores (Usuario y Administrador) y casos de uso clave, como Buscar libros, Reservar libros, Registrar usuarios y Actualizar catálogo de libros.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo de diagrama de casos de uso.

          .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')
    
    h2.mb-3(data-aos="fade-right") Diagrama de clases

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8.order-1
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El diagrama de clases es fundamental en el diseño de sistemas, orientados a objetos, puesto que representa visualmente la estructura estática del sistema, detallando las clases, atributos, métodos y relaciones. Este diagrama se utiliza principalmente en la etapa de diseño, para definir la arquitectura del <em>software</em>.
        p Un diagrama de clases modela la estructura estática del sistema, mediante la representación de clases, sus propiedades (atributos), comportamientos (métodos) y relaciones. Es crucial para lograr sistemas bien organizados, modulares y fáciles de mantener.
        p.text-bold Los objetivos del diseño y construcción del diagrama de clases, son: 

    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/11.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Definir la arquitectura del sistema
              p.mb-0.text-center Establecer la organización de los componentes básicos mediante clases y relaciones.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/11.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Capturar los requisitos estructurales
              p.mb-0.text-center Representar entidades del dominio y su comportamiento.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/11.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Facilitar la comunicación
              p.mb-0.text-center Actuar como lenguaje visual entre analistas, diseñadores y desarrolladores.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/11.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Soporte a la implementación
              p.mb-0.text-center Servir de base para construir el diseño en código.
      
        h2.mb-3(data-aos="fade-right") Componentes del diagrama de clases

        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-4
            figure
              img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-6.p-4(data-aos="fade-left").mb-3
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El diagrama de clases es fundamental en el diseño de sistemas, orientados a objetos, puesto que representa visualmente la estructura estática del sistema, detallando las clases, atributos, métodos y relaciones. Este diagrama se utiliza principalmente en la etapa de diseño, para definir la arquitectura del <em>software</em>.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 <b>Clases:</b> representan entidades o componentes principales del sistema. Se representan como rectángulos divididos en tres secciones: 
    
    .row.justify-content-center.align-items-center.bg-h85-3.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-4
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>Nombre: </b> identificación de la clase.
              li.mb-0.d-flex.p-4 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Atributos: </b> propiedades o datos que describen la clase.
              li.mb-0.d-flex.p-4 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>Métodos: </b>funcionalidades o comportamientos de la clase.
              
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/15.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 El diagrama de clases es esencial para garantizar un diseño estructurado y comprensible, sirviendo de puente entre los requisitos del negocio y la implementación técnica.

    .titulo-figura.mb-5
      h5 <b>Figura</b> 1. 
      span Ejemplo estructura de una Clase
    
    .row.mb-5.justify-content-center
      .col-lg-7
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 <b>Relaciones:</b> las relaciones conectan clases para modelar interacciones y dependencias dentro del sistema.
    
    h2.mb-3(data-aos="fade-right") Tipos principales
    p.mb-5 En los diagramas de clases, las relaciones representan cómo interactúan y se conectan las entidades del sistema.

    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/18.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Asociación")
            p Representa una relación básica entre dos clases. 
            p <b>Ejemplo:</b> una clase "Usuario" está asociada con "Perfil".
          div(numero="2" titulo="Agregación")
            p Representa una relación "todo-parte" débil, donde las partes pueden existir, independientemente del todo.  
            p <b>Ejemplo:</b> una "Biblioteca" tiene muchos "Libros".
          div(numero="3" titulo="Composición")
            p Representa una relación "todo-parte" fuerte, donde las partes no pueden existir sin el todo.
            p <b>Ejemplo:</b> un "Pedido" contiene "Ítems de pedido". 
          div(numero="4" titulo="Herencia")
            p Representa una relación "es-un", donde una clase hija hereda atributos y métodos de una clase padre.  
            p <b>Ejemplo:</b> "Administrador" hereda de "Usuario".
          div(numero="5" titulo="Dependencia")
            p Representa una relación temporal donde una clase utiliza otra, para una operación específica.
            p <b>Ejemplo:</b> un "Controlador" depende de un "Servicio". 
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 <b>Visibilidad:</b> define el nivel de acceso a los atributos y métodos de una clase.
    
    .row.justify-content-center.align-items-center.bg-h85-3
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-4
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>+Público: </b> accesible desde cualquier parte del sistema.
              li.mb-0.d-flex.p-4 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>-Privado: </b> accesible solo dentro de la clase.
              li.mb-0.d-flex.p-4 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>#Protegido: </b>accesible dentro de la clase y sus subclases.
              
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/19.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 <b>Interfaces:</b> las interfaces representan contratos que otras clases deben implementar.
    
    .row.justify-content-center.align-items-center.bg-h85-3
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").order-2
            p <b>Ejemplo:</b> una interfaz "Autenticable" define un método autenticar () que debe ser implementado por las clases "Usuario" y "Administrador".
          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema2/20.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p.mb-0 <b>Clases abstractas: </b> son clases que no pueden ser instanciadas directamente y sirven como base para otras clases.

    .row.justify-content-center.align-items-center.bg-h85-3.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            p <b>Ejemplo:</b> una clase "Vehículo" con métodos abstractos arrancar () y detener ().
            p Estos elementos son fundamentales para modelar la estructura y las interacciones de los sistemas orientados a objetos, asegurando claridad y coherencia en el diseño.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/21.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-9.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Relaciones entre clases en el diagrama de clases
            p.mb-4(data-aos="fade-right") En el documento se profundiza en las relaciones entre clases dentro de un diagrama de clases, destacando su importancia para modelar la estructura lógica de un sistema. Se describen los tipos principales de relaciones, como la asociación, agregación, composición, generalización, dependencia y realización, detallando sus características, representaciones gráficas y ejemplos prácticos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relaciones entre clases en el diagrama de clases.

          .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')
    
    h2.mb-3(data-aos="fade-right") Diagrama de secuencia

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El diagrama de secuencia es una herramienta clave en UML para representar la interacción de objetos en el tiempo para realizar funciones específicas. Este diagrama se centra en el orden cronológico de los mensajes y las interacciones entre actores y sistemas.
        p.mb-0 Es un modelo dinámico que describe:
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/24.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center El orden de las interacciones o mensajes.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/24.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center El rol de cada actor u objeto en el proceso.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/24.svg"
                alt=""
                style="width: 90px"
              )       
              p.mb-0.text-center El tiempo relativo de las operaciones, en formato secuencial.
    
        p.mb-5 Se utiliza para modelar casos de uso, analizar requisitos y detallar el diseño de sistemas orientados a objetos.
        h2.mb-3(data-aos="fade-right") Componentes del diagrama de secuencia
        p Los diagramas de secuencia, son una herramienta clave en el modelado de sistemas, dado que detallan cómo interactúan los actores y objetos, en el tiempo.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/25.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1.mb-3
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Actores")
            p Representan usuarios o sistemas externos que interactúan con el sistema.  
            p <b>Ejemplo:</b> Usuario, Cliente, Administrador.
          div(numero="2" titulo="Objetos")
            p Clases o instancias participantes en el proceso.   
            p <b>Ejemplo:</b> CarritoDeCompras, BaseDeDatos.
          div(numero="3" titulo="Línea de vida (<em>Lifeline</em>)")
            p Representa la existencia de un actor u objeto durante la interacción. Es una línea vertical debajo del actor u objeto, indicando su tiempo de vida en el proceso.
          div(numero="4" titulo="Mensajes")
            p Comunicaciones entre objetos o entre actores y objetos: 
            p - Síncrono: el emisor espera una respuesta (línea sólida con flecha llena). 
            p - Asíncrono: el emisor no espera una respuesta (línea sólida con flecha vacía). 
            p - Respuesta: respuesta a un mensaje síncrono (línea punteada con flecha llena). 
            p <b>Ejemplo:</b> método autenticar ().
    
    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="5" titulo="Bloques de activación")
            p Indican el período durante el cual un objeto procesa un mensaje. Se representan como rectángulos sobre la línea de vida.
          div(numero="6" titulo="Condiciones y bifurcaciones")
            p Decisiones en el flujo de interacción, representadas como notas con texto condicional o marcadores.   
            p <b>Ejemplo:</b> [si autenticación exitosa].
          div(numero="7" titulo="Regiones de bucle o fragmentos combinados")
            p Representan repeticiones o condiciones en la interacción, marcadas con palabras clave como <em>loop, alt o opt</em>.
    
    p.mb-5 El diagrama de secuencia es una herramienta esencial para analizar dinámicas del sistema, facilitando la planificación y el diseño detallado de las interacciones entre componentes.

    .titulo-figura.mb-5
      h5 <b>Figura</b> 2. 
      span Diagrama de secuencia, componentes
    
    .row.mb-5.justify-content-center.bg-color-7.p-4
      .col-lg-7
        figure
          img(src="@/assets/curso/tema2/27.png", data-aos="zoom-in")
    

    h2.mb-3(data-aos="fade-right") Ventajas del diagrama de secuencia

    p.mb-5 El diagrama de secuencia es una herramienta esencial en el desarrollo de <em>software</em>, debido a las múltiples ventajas que ofrece.

    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")(data-aos="zoom-in")
        
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Claridad en las interacciones
                  p.mb-0.text-center Permite detallar la lógica de procesos complejos, mostrando cada interacción entre actores y objetos.
   
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Documentación completa
                  p.text-center.mb-0 Facilita la documentación de flujos específicos y la colaboración entre objetos, para alcanzar un objetivo.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Soporte al diseño de <em>software</em>
                  p.text-center.mb-0 Proporciona una base sólida para implementar la lógica de métodos y funciones.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Facilita la comunicación
                  p.text-center.mb-0 Es útil para presentar el diseño a desarrolladores, analistas y partes interesadas.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Detección de problemas tempranos
                  p.text-center.mb-0 Ayuda a identificar lagunas o inconsistencias en el flujo de mensajes, antes de la implementación.
          .col-md-8.col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema2/28.png', alt='')
    
    .bg-full-width.bg-color-15.mb-5
      .p-4.px-md-5.pb-md-3
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")
          .col-lg-7.order-1
            p.text-bold Ejemplo de diagrama de secuencia
            p.mb-0 <b>Escenario:</b> proceso de compra en línea.
            p Un usuario selecciona productos en un carrito, confirma su pedido y realiza el pago.

            p.text-bold Participantes:

            p.mb-0 ●	Usuario (actor).
            p.mb-0 ●	CarritoDeCompras (objeto).
            p.mb-0 ●	SistemaDePagos (objeto).
            p ●	BaseDeDatos (objeto).

            p.text-bold Flujo:

            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex.p-2
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 El usuario selecciona un producto y lo agrega al carrito.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 El sistema confirma la adición al carrito.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 El usuario realiza el pedido.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 El sistema verifica el inventario (consulta a la base de datos).
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 5  
                p.mb-0 El usuario realiza el pago.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 6  
                p.mb-0 El sistema de pagos procesa la transacción.
              li.mb-0.d-flex.p-2 
                .lista-ol--cuadro__vineta
                  span 7
                p.mb-0 El sistema confirma el pedido al usuario.
              
            p Es un modelo dinámico que describe:
    
    p.mb-5 Este ejemplo ilustra cómo los participantes interactúan en un proceso secuencial, facilitando la comprensión del flujo y las responsabilidades de cada componente.
    
    .titulo-figura.mb-5
      h5 <b>Figura</b> 3. 
      span Diagrama de secuencia 
    
    .row.mb-5.justify-content-center.bg-color-7.p-4
      .col-lg-7
        figure
          img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in")
    
    .bg-full-width.bg-color-9.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Diseño orientado a objetos: conceptos de clases, objetos y herencia
            p.mb-4(data-aos="fade-right") El documento analiza el diseño orientado a objetos, destacando los conceptos fundamentales de clases, objetos y herencia. Una clase se define como un plano conceptual que establece atributos y métodos comunes, mientras que los objetos son instancias concretas de estas clases, con un estado, comportamiento e identidad propios.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Diseño orientado a objetos: conceptos de clases, objetos y herencia.

          .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/32.png', alt='')
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    

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
              a(href="https://www.thecodingdiva.com/blog/coding/unified-modeling-language " target="_blank" rel="noopener noreferrer") A Comprehensive Guide to Unified Modeling Language. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://miro.com/es/diagrama/diagrama-uml/ " target="_blank" rel="noopener noreferrer") Miro. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wfSrFbob9-8 " target="_blank" rel="noopener noreferrer") NicoPaez. (2017). UML: Introducción. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Principios de Diseño de <em>Software</em>',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué se entiende por "cohesión" en los principios de diseño de <em>software</em>? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La relación entre diferentes módulos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El grado en que un módulo realiza una tarea específica',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La capacidad de un sistema de trabajar sin fallos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La integración de sistemas externos al proyecto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La cohesión se refiere a qué tan enfocado y específico es un módulo dentro de un sistema. Un módulo con alta cohesión tiene responsabilidades bien definidas, lo que facilita su mantenimiento.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'El acoplamiento bajo entre módulos implica',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una alta dependencia entre módulos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una baja dependencia entre módulos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Una interdependencia compleja entre módulos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ninguna de las anteriores',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un bajo acoplamiento significa que los módulos están poco dependientes entre sí, lo que facilita la modificación y reutilización del código.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes diagramas UML describe cómo interactúan los objetos a lo largo del tiempo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Diagrama de casos de uso',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Diagrama de clases',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Diagrama de secuencia',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Diagrama de actividad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los diagramas de secuencia muestran cómo los objetos interactúan a través del tiempo, ilustrando el flujo de mensajes entre ellos durante un proceso específico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué característica define a un diagrama de clases UML? (API)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Muestra la secuencia de eventos entre actores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Representa las clases, sus atributos y métodos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Muestra el flujo de control entre objetos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Representa las actividades que se realizan en el sistema',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El diagrama de clases es uno de los diagramas estructurales más importantes en UML, y se utiliza para mostrar las clases de un sistema, sus atributos y los métodos o funciones que ejecutan.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué concepto en diseño orientado a objetos permite que una clase herede comportamientos de otra? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Polimorfismo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Encapsulamiento',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Herencia',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Abstracción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La herencia permite que una clase derive de otra, heredando sus atributos y métodos, lo que facilita la reutilización del código.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
