# AI-DRIVEN-PROGRAMING

# Hola Mundo

## Descripción

Hola Mundo es una aplicación web sencilla desarrollada como práctica de trabajo guiado por especificación, tests e implementación asistida por IA.

La aplicación muestra un saludo inicial, permite introducir un nombre y generar un saludo personalizado. Además, incluye una mejora adicional que permite limpiar el campo de texto y restaurar el mensaje inicial.

## Funcionalidad

La aplicación permite:

- Mostrar el mensaje inicial `Hola Mundo` al cargar.
- Introducir un nombre en un campo de texto.
- Pulsar un botón `Saludar` para mostrar `Hola, <nombre>`.
- Mantener `Hola Mundo` si el campo está vacío.
- Pulsar un botón `Limpiar` para vaciar el campo y restaurar el mensaje inicial.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Paporrito/AI-DRIVEN-PROGRAMING.git
cd AI-DRIVEN-PROGRAMING
```

2. Instalar las dependencias:

```bash
npm install
```

## Ejecución

Para lanzar los tests del proyecto:

```bash
npm test
```

Si se desea continuar la práctica con ejecución en entorno de desarrollo, se puede añadir posteriormente un script de desarrollo con Vite.

## Tests

Los tests automáticos comprueban los comportamientos principales de la aplicación:

- Visualización de `Hola Mundo` al iniciar.
- Saludo personalizado al introducir un nombre.
- Mantenimiento del saludo inicial si el campo está vacío.
- Existencia del botón `Limpiar`.
- Vaciado del campo de texto al pulsar `Limpiar`.
- Restauración del mensaje `Hola Mundo` al usar la mejora.

## Estructura del proyecto

```text
AI-DRIVEN-PROGRAMING/
├── README.md
├── SPEC.md
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   └── setupTests.js
└── tests/
    └── App.test.jsx
```

## Flujo de trabajo seguido

El proyecto se ha desarrollado siguiendo estas fases:

1. Inicialización del repositorio.
2. Redacción de la especificación en `SPEC.md`.
3. Generación de tests a partir de la especificación.
4. Implementación inicial de la aplicación.
5. Validación de la aplicación mediante tests.
6. Actualización de la especificación con una mejora.
7. Generación de tests para la mejora.
8. Implementación de la mejora.
9. Documentación final del proyecto.

## Uso de IA

### Herramienta utilizada

Se ha utilizado una IA conversacional para ayudar en la redacción de la especificación, la generación de tests, la implementación del código y la resolución de errores durante el desarrollo.

### Prompts principales empleados

Algunos de los prompts utilizados durante el proceso han sido de este tipo:

- "Genera un archivo SPEC.md para una aplicación Hola Mundo con saludo personalizado".
- "Crea tests en React Testing Library y Vitest a partir de esta especificación".
- "Genera el archivo App.jsx para que pasen estos tests".
- "Añade una mejora con botón Limpiar y actualiza la especificación".
- "Corrige los errores de configuración de Vitest, package.json y vite.config.js".
- "Completa el README final del proyecto con la documentación y el uso de IA".

### Código generado con ayuda de IA

La IA ha ayudado a generar o completar:

- El archivo `SPEC.md`.
- El archivo `tests/App.test.jsx`.
- El archivo `src/App.jsx`.
- El archivo `src/setupTests.js`.
- El archivo `vite.config.js`.
- Parte del contenido de `README.md`.

### Tests generados con ayuda de IA

La IA ha generado tests para comprobar:

- El saludo inicial.
- El saludo personalizado.
- El comportamiento cuando el campo está vacío.
- La existencia del botón `Limpiar`.
- El vaciado del input.
- La restauración del mensaje inicial.

### Errores encontrados durante el proceso

Durante la práctica aparecieron varios errores, entre ellos:

- Problemas al enlazar el repositorio local con GitHub.
- Conflictos entre ramas `main` y `master`.
- Falta de commits iniciales.
- Ausencia del archivo `package.json`.
- Falta de instalación de Node.js y npm.
- Error porque `vitest` no estaba disponible correctamente.
- Problemas de detección de archivos de test por nombres incorrectos.
- Necesidad de corregir nombres de archivos y rutas de configuración.

### Cómo se corrigieron

Los errores se corrigieron revisando los mensajes mostrados por Git, npm y Vitest, y aplicando cambios mínimos sobre la estructura del proyecto:

- Se volvió a clonar correctamente el repositorio.
- Se normalizaron las ramas de trabajo.
- Se crearon y corrigieron los archivos necesarios del proyecto.
- Se instalaron las dependencias correctas.
- Se renombraron archivos para que Vitest pudiera detectarlos.
- Se ajustó la configuración de `vite.config.js` y `setupTests.js`.

### Decisiones tomadas por el alumno

Durante el proceso se tomaron estas decisiones:

- Elegir una aplicación muy sencilla para centrarse en el flujo de trabajo.
- Usar React, Vitest y React Testing Library para facilitar los tests automáticos.
- Elegir como mejora un botón `Limpiar`, por ser fácil de especificar, probar e implementar.
- Mantener una estructura mínima de proyecto para que el proceso fuese claro.
- Separar el trabajo en commits distintos para reflejar cada fase de la práctica.

## Autoría

Trabajo realizado como práctica académica de desarrollo guiado por especificación, tests, validación e integración de herramientas de IA.