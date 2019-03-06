import { render, html } from "lighterhtml";
import TransitionEffect from "./transition-effect";

class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.render = render.bind(
      // used as update callback context
      this,
      // used as target node
      // it could either be the node itself
      // or its shadow root, even a closed one
      this.attachShadow({ mode: "closed" }),
      // the update callback
      this.render
    );
    // first render
    this.render();
  }
  render() {
    return html`
      <button onclick="${this}">foo</button>
    `;
  }
  handleEvent(event) {
    this[`on${event.type}`](event);
  }
  onclick(event) {
    event.preventDefault();
    console.log(this.transitionState);
    this.setAttribute("animating", true);
    this.render();
  }
}

export default TransitionEffect(CustomElement);
