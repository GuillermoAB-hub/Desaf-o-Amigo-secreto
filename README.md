# Amigo Secreto

Esta es una aplicación web para realizar sorteos de amigo secreto. Permite a los usuarios ingresar nombres de amigos y realizar un sorteo para determinar quién será el amigo secreto de cada uno.

## Características

- Añadir nombres a la lista de participantes.
- Mostrar la lista de participantes.
- Realizar un sorteo para determinar el amigo secreto.
- Mostrar el resultado del sorteo.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
    ```bash
    gh repo clone GuillermoAB-hub/Desaf-o-Amigo-secreto
    ```
2. Abre el archivo `index.html` en tu navegador web.

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Contiene los estilos CSS para la aplicación.
- `app.js`: Contiene la lógica de JavaScript para la aplicación.

## Funciones Principales

### `recopilarDatos(elemento)`

Recopila el valor de un input y lo devuelve sin espacios en blanco al inicio y al final.

### `pushElement(lista, elemento)`

Añade un nombre a la lista de participantes si el nombre es válido. Muestra un mensaje de alerta si el nombre no es válido.

### `limpiarCaja(elemento)`

Limpia el valor de un input.

### `asignarTextoElemento(elemento, texto)`

Asigna un texto a un elemento HTML.

### `isValid(elemento)`

Verifica si un nombre es válido (no vacío).

### `asignarlistaHtml(idElemento, lista)`

Muestra la lista de participantes en un elemento HTML.

### `sortearAmigo(lista, idElemento)`

Realiza el sorteo de amigo secreto y muestra el resultado en un elemento HTML.

### `seleccionarPimerElementoLista(lista, idElemento)`

Muestra el primer elemento de una lista en un elemento HTML con el texto "El amigo secreto es: ".

### `randomizarLista(lista)`

Randomiza el orden de los elementos en una lista.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor haz un fork del repositorio y crea un pull request con tus cambios.
