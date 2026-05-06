# SPEC.md

## Descripción de la aplicación

La aplicación **Hola Mundo** será una aplicación web sencilla que permita mostrar un saludo inicial y personalizarlo introduciendo un nombre.

El objetivo no es únicamente desarrollar una aplicación funcional, sino seguir un flujo de trabajo ordenado basado en especificación, generación de tests con ayuda de IA, implementación asistida por IA, validación automática y registro del proceso mediante Git.

## Objetivo

La aplicación debe permitir que una persona usuaria vea un saludo inicial al cargar la página y pueda modificar ese saludo escribiendo su nombre y pulsando un botón.

## Requisitos funcionales

1. La aplicación debe mostrar el texto `Hola Mundo` al cargarse por primera vez.
2. La aplicación debe incluir un campo de texto donde la persona usuaria pueda introducir su nombre.
3. La aplicación debe incluir un botón con una acción de saludo.
4. Cuando la persona usuaria introduzca un nombre válido y pulse el botón, la aplicación debe mostrar el mensaje `Hola, <nombre>`.
5. Si la persona usuaria pulsa el botón sin haber escrito ningún nombre, la aplicación debe seguir mostrando `Hola Mundo`.
6. La aplicación debe actualizar el saludo en la misma pantalla, sin necesidad de recargar la página.

## Casos de uso

### Caso de uso 1: visualización inicial

- La persona usuaria accede a la aplicación.
- La aplicación muestra el mensaje `Hola Mundo`.

### Caso de uso 2: saludo personalizado

- La persona usuaria accede a la aplicación.
- La persona usuaria escribe su nombre en el campo de texto.
- La persona usuaria pulsa el botón de saludo.
- La aplicación muestra el mensaje `Hola, <nombre>`.

### Caso de uso 3: campo vacío

- La persona usuaria accede a la aplicación.
- La persona usuaria deja el campo de texto vacío.
- La persona usuaria pulsa el botón de saludo.
- La aplicación mantiene el mensaje `Hola Mundo`.

## Criterios de aceptación

1. Al abrir la aplicación por primera vez debe verse el texto `Hola Mundo`.
2. Debe existir un campo de entrada visible para escribir un nombre.
3. Debe existir un botón visible para ejecutar la acción de saludo.
4. Si la persona usuaria escribe `Ana` y pulsa el botón, debe mostrarse el texto `Hola, Ana`.
5. Si la persona usuaria escribe `Pedro` y pulsa el botón, debe mostrarse el texto `Hola, Pedro`.
6. Si el campo está vacío y se pulsa el botón, debe seguir mostrándose `Hola Mundo`.
7. El cambio del mensaje debe producirse sin recargar la página.

## Alcance de la primera versión

Esta primera versión únicamente cubrirá la funcionalidad básica de saludo inicial y saludo personalizado. No incluirá todavía mejoras adicionales como almacenamiento, varios idiomas, contador de saludos o botón de limpieza.

## Restricciones

- La aplicación debe ser lo bastante simple como para poder probarse automáticamente.
- Los tests deberán derivarse de esta especificación.
- La implementación posterior no deberá modificar estos requisitos sin actualizar antes este documento.