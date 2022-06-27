import createCustomElement from "./create-custom-element";
import Lights from "$lib/cards/Lights.svelte";

console.debug("creating custom elements...");

const LightsCustomElement = createCustomElement(Lights);
window.customElements.define("custom-frontend-lights", LightsCustomElement);

console.debug("created custom elements!");
