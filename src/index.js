import CustomElement from "./custom-element";

customElements.define("my-ce", CustomElement);

const el = document.createElement("my-ce");
document.body.appendChild(el);
