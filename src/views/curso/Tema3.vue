<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Herramientas básicas para el desarrollo de <em>software</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un editor de texto es una aplicación que permite crear y modificar archivos de texto plano. En el desarrollo de <em>software</em>, estos editores son esenciales para escribir y editar código fuente. A diferencia de los procesadores de texto como Word, están diseñados para manejar texto sin formato, lo que los hace ideales para trabajar con lenguajes de programación (Ilerna Online, 2021).  
        p.mb-0 Los editores de texto son aplicaciones informáticas que permiten crear, visualizar y editar archivos en formato de texto plano. Estos archivos suelen contener código fuente, configuraciones o datos que no requieren formato visual complejo como negritas o tablas. Su uso es fundamental en programación, porque el código necesita ser trabajado en un formato limpio y legible para ser procesado por compiladores o intérpretes.
    
    h2.mb-3(data-aos="fade-right") Historia y evolución de los editores de texto

    p.mb-5 La evolución de los editores de texto, refleja los cambios en la tecnología y las necesidades de los usuarios. Desde herramientas rudimentarias hasta plataformas avanzadas, estos programas han sido esenciales para el desarrollo del <em>software</em> y la gestión de datos. A continuación, se presenta su evolución:

    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")(data-aos="zoom-in")
        
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 1950-1960. Inicios
                  p.mb-0.text-center Uso en <em>mainframes</em> con terminales de tarjetas perforadas. Ejemplo: TECO (1962), que permitía manipular texto programáticamente.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 1970. Basados en línea
                  p.text-center.mb-0 Editores como <em>ed</em> operaban línea por línea. 
                  p.text-center <b>Ventajas:</b> ligeros, útiles para sistemas con pocos recursos. Introducían comandos básicos de edición.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 1980. Pantalla completa
                  p.text-center.mb-0 Editores como <em>vi y Emacs</em>, revolucionaron la edición con interacción directa en pantalla. Incluían atajos de teclado y personalización mediante <em>scripts</em> (como LISP).
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 1990. GUI
                  p.text-center.mb-0 Aparición de interfaces gráficas. 
                  p.text-center <b>Ejemplo:</b> Notepad (Windows). Incorporación de resaltado de sintaxis y soporte para el mouse.
 
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 2000. Extensibles
                  p.text-center.mb-0 Editores como Notepad++ y Sublime Text, ofrecían personalización mediante <em>plugins</em>, autocompletado y soporte para múltiples lenguajes.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-8.tarjeta.bg-color-white
                  img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 2010 en adelante. Modernos
                  p.text-center.mb-0 Editores como VS Code y Atom integran IA, colaboración en línea (<em>Live Share</em>), y desarrollo en la nube.

          .col-md-8.col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema3/5.png', alt='')
    
    h2.mb-3(data-aos="fade-right") Características principales de los editores de texto

    p.mb-5 Las herramientas actuales ofrecen una amplia gama de funciones que optimizan el trabajo de los desarrolladores:

    .row.align-items-center.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema3/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1.mb-3.mb-lg-0
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Resaltado de sintaxis")
            p Mejora la legibilidad del código mediante colores específicos para palabras claves, errores y estructuras.
          div(numero="2" titulo="Búsqueda y reemplazo")
            p Localiza y modifica texto en múltiples archivos, agilizando cambios masivos.
          div(numero="3" titulo="Soporte multilenguaje")
            p Configuraciones específicas para lenguajes como Python, JavaScript y HTML.
          div(numero="4" titulo="Personalización")
            p Mediante <em>plugins</em> y temas, los usuarios pueden adaptar el editor a sus necesidades.
          div(numero="3" titulo="Portabilidad")
            p Ejecutables ligeros que no requieren instalación y funcionan en distintos sistemas operativos.
    
    p.mb-5 A continuación, se presenta una visión general de los diferentes tipos de editores, destacando sus características, ejemplos representativos y los usos más comunes.

    .titulo-figura.mb-4
      h5 <b>Tabla</b> 1. 
      span Clasificación de editores de texto

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th.bg-color-3.text-white.text-center Tipo
            th.bg-color-3.text-white.text-center Características
            th.bg-color-3.text-white.text-center Ejemplo
            th.bg-color-3.text-white.text-center Usos Comunes
        tbody
          tr
            td <b>Básicos</b>
            td Ligereza, funcionalidad limitada, sin resaltado de sintaxis.
            td Bloc de Notas (Windows)
            td Edición de configuraciones, creación de notas simples.
            
          tr
            td <b>Avanzados</b> 
            td Resaltado de sintaxis, soporte multilenguaje, personalización mediante <em>plugins</em>.
            td VS Code, Sublime Text
            td Desarrollo de aplicaciones, análisis de datos.
          tr
            td <b>En línea</b> 
            td Basados en la web, ideales para colaboración en tiempo real.
            td CodeSandbox, Replit
            td Edición remota, proyectos educativos.
    
    h2.mb-3(data-aos="fade-right") Ejemplos destacados

    p.mb-5 Los editores de texto son herramientas esenciales para programadores, diseñadores y cualquier profesional que trabaje y utilice contenido digital.

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Notepad++" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Notepad++
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Gratuito y ligero, ideal para usuarios de Windows.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | <b>Funciones:</b> resaltado de sintaxis, macros, soporte para más de 50 lenguajes.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | <b>Uso:</b> configuraciones de servidores, edición rápida.

        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/7.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sublime Text" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Sublime Text
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Interfaz minimalista con herramientas avanzadas como "Goto Anything".
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | <b>Uso:</b> desarrollo web con HTML, CSS y JavaScript.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/8.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Visual Studio Code" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Visual Studio Code
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Gratuito, con ecosistema robusto de extensiones.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | <b>Funciones:</b> depuración, integración con Git.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | <b>Uso:</b> proyectos complejos de gran escala.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/9.png', alt='', style="width: 100%;")
    
    h2.mb-3(data-aos="fade-right") Impacto de los editores de texto en la productividad

    p.mb-5 Los editores modernos tienen un impacto significativo en la productividad debido a las siguientes razones:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Reducción del tiempo
              p Herramientas como autocompletado y búsqueda global, ahorran tiempo en tareas repetitivas.
              p <b>Ejemplo:</b> Visual Studio Code puede reducir tareas repetitivas hasta en un 30 %.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Disminución de errores
              p Resaltado de sintaxis y Linters, ayudan a identificar problemas antes de ejecutar el código.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Colaboración en tiempo real
              p Funcionalidades como <em>Live Share</em>, permiten trabajo simultáneo entre equipos distribuidos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7
              h5 Escalabilidad
              p Capacidad para manejar proyectos extensos o archivos grandes sin afectar el rendimiento.

    h2.mb-3(data-aos="fade-right") Importancia de la portabilidad

    p.mb-5 La portabilidad es esencial para desarrolladores que trabajan en diferentes entornos o dispositivos:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/14.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Uso multiplataforma
              p.mb-0.text-center Notepad++ portable, funciona en cualquier Windows sin instalación.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/15.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Sincronización en la nube	
              p.mb-0.text-center VS Code permite sincronizar configuraciones y extensiones entre dispositivos.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.tarjeta
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/16.svg"
                alt=""
                style="width: 90px"
              )
              p.text-bold.text-center Reducción de dependencias	
              p.mb-0.text-center Los editores portátiles eliminan problemas de compatibilidad al no depender de configuraciones del sistema operativo.
    
    .bg-full-width.bg-color-9.mb
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Entornos de desarrollo integrados y compiladores: potenciando la productividad en programación
            p.mb-4(data-aos="fade-right") Los entornos de desarrollo integrados (IDEs), optimizan el flujo de trabajo al centralizar herramientas claves como editores de código, depuradores y gestores de proyectos. Ofrecen funcionalidades como autocompletado, integración con control de versiones y soporte para múltiples lenguajes, adaptándose a diversas necesidades con opciones ligeras, multipropósito, en la nube o especializadas.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Entornos de desarrollo integrados y compiladores: potenciando la productividad en programación.

          .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/17.png', alt='')
          
    
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
              a(href="https://rootstack.com/es/blog/los-pilares-del-scrum-claves-para-la-gestion-de-procesos" target="_blank" rel="noopener noreferrer") Rootstack. (s.f.). Los pilares del Scrum: Claves para la gestión de procesos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dev.to/orlidev/-los-mejores-entornos-de-desarrollo-integrado-ide-explicados-con-la-magia-de-escandalosos--m07" target="_blank" rel="noopener noreferrer") Los Mejores Entornos de Desarrollo Integrado (IDE) Explicados con la Magia de Escandalosos.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.jetbrains.com/ai/" target="_blank" rel="noopener noreferrer") AI Assistant.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/shorts/Bj_DmBpsLws" target="_blank" rel="noopener noreferrer") Code With Me. (2023). Top 5 IDE's in 2023. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas y Metodologías de Desarrollo de <em>software</em>',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes es un principio clave de las metodologías ágiles?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Documentación extensiva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Planificación rígida',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Entregas continuas de valor',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Aislamiento de equipos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En las metodologías ágiles, uno de los principios fundamentales es la entrega continua de valor, lo que permite a los clientes ver resultados de manera temprana y frecuente, mejorando la adaptación a cambios.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿En qué consiste un "Sprint" en Scrum? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un ciclo de trabajo continuo sin descansos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un ciclo de trabajo de duración variable con entrega de valor',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Un ciclo de trabajo de duración fija con entrega de valor',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un periodo de pruebas y planificación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un sprint es un ciclo de trabajo de duración fija (generalmente de 1 a 4 semanas) en el que el equipo Scrum trabaja en tareas específicas para entregar un incremento del producto al final del ciclo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué rol en Scrum es responsable de priorizar el trabajo? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '<em>Scrum Master</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '<em>Product Owner</em>',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Equipo de Desarrollo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '<em>Stakeholder</em>',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El <em>Product Owner</em> es el responsable de gestionar y priorizar el <em>Product Backlog</em>, asegurando que el equipo trabaje en las tareas más valiosas para el cliente.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes herramientas de Scrum ayuda a medir el progreso de las tareas durante un sprint? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '<em>Product Backlog</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '<em>Burndown Chart</em>',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '<em>Daily Standup</em>',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '<em>Kanban Board</em>',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El <em>Burndown Chart</em> es una herramienta visual que muestra el progreso de un <em>sprint</em>, permitiendo a los equipos ver cuánto trabajo queda por hacer y si están alcanzando sus objetivos.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué significa "WIP" en Kanban? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '<em>Work In Production</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '<em>Work In Progress</em>',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '<em>Workflow Input Process</em>',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '<em>Work Integrated Process</em>',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'WIP (<em>Work In Progress</em>) es una medida crucial en Kanban que se refiere al número de tareas que el equipo puede tener en proceso simultáneamente, lo que ayuda a mejorar la eficiencia y reducir el desperdicio.',
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
