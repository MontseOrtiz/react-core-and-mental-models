import React from "https://esm.sh/react@18.2.0";
import ReactDom from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDom.createRoot(appDomElement);

const boton = React.createElement(
  "button",
  { className: "boton", "data-id": 123 },
  "Boton 1",
);

const boton2 = React.createElement(
  "button",
  { className: "boton", "data-id": 124 },
  "Boton 2",
);

const boton3 = React.createElement(
  "button",
  { className: "boton", "data-id": 125 },
  "Boton 3",
);

const fragment = React.createElement(React.Fragment, null, [
  boton,
  boton2,
  boton3,
]);

root.render(fragment);
