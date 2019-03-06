export default function TransitionEffect(K) {
  return class extends K {
    constructor() {
      super();

      this.transitionState = "foo";
      console.log("y");
    }

    attributeChangedCallback(...args) {
      console.log(...args);
    }
  };
}
