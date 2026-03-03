# 00 - React sin dependencias

## 📌 Usar React sin instalaciones

Es posible usar React directamente en el navegador sin instalar dependencias con npm.

Esto permite:

- Inyectar React en cualquier proyecto existente
- Probar conceptos rápidamente
- Usarlo en proyectos pequeños
- Entender cómo funciona sin abstracciones

En este caso se importa desde CDN usando esm.sh:

```js
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
```

---

## 🧱 Creación del root

React necesita un punto de entrada para renderizar la aplicación.

```js
const appDomElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDomElement);
```

`createRoot` crea el contenedor principal donde React controlará el DOM.

---

## 🧠 React renderiza elementos, no HTML

React no trabaja renderizando strings de HTML directamente por defecto.

En lugar de eso, renderiza **elementos de React**, que son objetos JavaScript que describen lo que debe mostrarse en pantalla.

Ejemplo:

```js
const boton = React.createElement(
  "button",
  { className: "boton", "data-id": 123 },
  "Botón 1",
);
```

---

## 📦 React.Fragment

React solo puede renderizar un elemento raíz.

Si queremos renderizar múltiples elementos sin envolverlos en un `div` innecesario, usamos:

```js
React.Fragment;
```

Ejemplo:

```js
const fragment = React.createElement(React.Fragment, null, [
  boton,
  boton2,
  boton3,
]);
```

`React.Fragment` permite agrupar elementos sin añadir nodos extra al DOM.

---

## ✍ JSX

JSX es una sintaxis que permite escribir código similar a HTML dentro de JavaScript.

No es obligatorio para usar React, pero hace el código más legible y mantenible.

Ejemplo equivalente usando JSX:

```jsx
<React.Fragment>
  <button className="boton" data-id="123">
    Botón 1
  </button>
  <button className="boton" data-id="124">
    Botón 2
  </button>
  <button className="boton" data-id="125">
    Botón 3
  </button>
</React.Fragment>
```

JSX necesita un transpilador (como Babel o SWC) para convertirse en llamadas a `React.createElement`.

---
