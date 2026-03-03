# 03 - Inmutabilidad, Spread/Rest y Estado en React

## 📦 Inmutabilidad de las Props

Las **props no deben modificarse** dentro de un componente.

En React, las props se tratan como datos de solo lectura.  
Si necesitamos modificar un valor basado en una prop, debemos crear una nueva copia en lugar de alterarla directamente.

> Regla mental: nunca mutar props, siempre crear una nueva versión.

---

## 🧱 Copiar Arrays u Objetos

Cuando trabajamos con estado (por ejemplo, un array), debemos evitar modificarlo directamente.

Podemos crear copias usando:

```js
const newBoard = [...board];
const newBoard = structuredClone(board);
```

### 🔎 Diferencia importante

- **Spread (`...`)** → Hace una **copia superficial** (shallow copy).
- **structuredClone()** → Hace una **copia profunda** (deep copy).

### 📌 ¿Qué significa esto?

- Copia superficial: solo copia el primer nivel.
- Copia profunda: copia también los objetos o arrays internos.

Ejemplo de spread:

```js
const nuevo = [...array];
const obj = { ...otroObj };
```

---

## 🔄 Spread vs Rest Operator

Aunque usan el mismo símbolo (`...`), no hacen lo mismo.

### ✅ Spread → Expande

Expande los elementos de un array u objeto.

Se usa para:

- Copiar
- Combinar
- Pasar argumentos

```js
const nuevo = [...array];
const obj = { ...otroObj };
```

---

### ✅ Rest → Agrupa

Agrupa múltiples valores en un array u objeto.

Se usa en:

- Parámetros de funciones
- Desestructuración

```js
function fn(...args) {}
const [a, ...resto] = array;
```

📌 Mismo operador, diferente comportamiento según el contexto.

---

## ⏳ Actualización de estado en React

La actualización de estado en React es **asíncrona**.

Esto significa que cuando usamos `useState`, el cambio:

- No ocurre inmediatamente.
- No bloquea la ejecución del código siguiente.
- React agenda la actualización y luego re-renderiza.

Ejemplo conceptual:

```js
setCount(count + 1);
console.log(count); // Puede mostrar el valor anterior
```

React primero termina el ciclo actual y luego aplica la actualización.

---

## 📍 Reglas importantes de `useState`

Los hooks (como `useState`) deben:

- Estar siempre en el nivel superior del componente.
- No estar dentro de `if`, `while`, `for`, etc.

¿Por qué?

React guarda los hooks en un arreglo interno basado en el **orden en el que se ejecutan**.

Si cambiamos ese orden (por ejemplo, metiéndolo dentro de un `if`), React pierde la referencia correcta y rompe el comportamiento.

> Regla mental: los hooks siempre arriba y siempre en el mismo orden.

---

## 💾 Leer LocalStorage correctamente

Leer `localStorage` en cada render es mala práctica, ya que es una operación relativamente costosa.

En lugar de eso, podemos usar una función inicializadora en `useState`:

```js
const [board, setBoard] = useState(() => {
  const boardFromStorage = window.localStorage.getItem("board");
  if (boardFromStorage) return JSON.parse(boardFromStorage);
  return Array(9).fill(null);
});
```

### 📌 ¿Qué hace esto?

- La función solo se ejecuta en el **primer render**.
- Evita leer `localStorage` en cada re-render.
- Mejora el rendimiento.

---
