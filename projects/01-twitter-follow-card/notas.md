# 01 - Componentes, Props y Convenciones

## 🧱 Componentes en PascalCase

Los componentes en React deben escribirse en **PascalCase** (primera letra en mayúscula).

Ejemplo correcto:

```jsx
<TwitterFollowCard />
```

React diferencia entre:

- Elementos HTML → minúscula (`div`, `section`, `button`)
- Componentes personalizados → Mayúscula (`TwitterFollowCard`)

Si escribimos un componente en minúscula, React lo interpretará como un elemento HTML y no como una función de componente.

---

## 🚪 Punto de entrada de la aplicación

`main.js` es el punto de entrada de la aplicación React.

En una configuración con Vite seleccionando **React + SWC**, se utiliza:

- **SWC** → Transpilador escrito en Rust.
- Es una alternativa a Babel.
- Convierte JSX y TypeScript a JavaScript compatible.
- Es considerablemente más rápido que Babel.

---

## 📦 Manejo de Props

Las **props** son propiedades que se pasan a un componente.

Regla importante:

> Las props son inmutables.

No deben modificarse dentro del componente.

❌ Incorrecto:

```js
userName = @{userName}
```

✅ Correcto:

```js
const userName = @{userName}
```

Si necesitamos modificar un valor derivado de una prop, debemos:

- Crear una variable nueva
- O usar estado (`useState`) si el valor cambiará dinámicamente

Modificar directamente una prop es una mala práctica.

---

## 🧩 Prop `children`

`children` es una prop especial que contiene lo que se pasa entre las etiquetas de un componente.

Ejemplo:

```jsx
<TwitterFollowCard>
  <p>Este es un mensaje dentro del componente</p>
</TwitterFollowCard>
```

Ese contenido se recibe como `children` dentro del componente:

```jsx
export function TwitterFollowCard({ userName, name, isFollowing, children }) {
  return <article className="tw-followCard">{children}</article>;
}
```

Esto permite crear componentes más flexibles y reutilizables.

---

## 🎯 Valores por defecto en Props

Podemos asignar valores por defecto usando destructuración:

```jsx
export function TwitterFollowCard({ userName, name, isFollowing = false }) {
  return <article className="tw-followCard">...</article>;
}
```

Si no se pasa `isFollowing`, su valor será `false`.

Esto evita validaciones adicionales dentro del componente.

---

## 🎨 Convenciones de nombres en CSS (SUIT CSS)

Es recomendable utilizar convenciones de nombres en CSS para:

- Mantener consistencia
- Evitar conflictos entre componentes
- Facilitar la escalabilidad

Una convención utilizada es **SUIT CSS**.

Consiste en:

- Prefijo del componente
- Guión
- Nombre del elemento

Ejemplo:

```
tw-followCard-header
tw-followCard-avatar
tw-followCard-button
```

Esto permite identificar fácilmente a qué componente pertenece cada clase y mantiene el CSS organizado.

---

## 🧠 Componente vs Elemento

Es importante diferenciar entre **componente** y **elemento** en React.

### 📌 Componente

Un componente es una **función** que devuelve elementos.

Ejemplo:

```jsx
function Boton() {
  return <button>Click</button>;
}
```

Aquí `Boton` es un componente porque es una función que retorna algo renderizable.

---

### 📌 Elemento

Un elemento es un **objeto de JavaScript** que describe lo que queremos renderizar en la pantalla.

Cuando escribimos:

```jsx
<button>Click</button>
```

JSX lo transforma en algo equivalente a:

```js
React.createElement("button", null, "Click");
```

Eso devuelve un objeto (elemento de React).

---

### 🔎 Relación entre ambos

- Los componentes **crean elementos**.
- Los elementos son lo que React **renderiza en el DOM**.
- React no renderiza componentes directamente, ejecuta componentes para obtener elementos.

---
