import css from "$lib/app.css";

/**
 * @typedef {object} Props
 * @property {unknown} config
 * @property {unknown} [panel] TODO type correctly
 * @property {Hass} hass
 */

/** @typedef {import("svelte").SvelteComponentTyped<Props, {}, {}>} ComponentInstance */

/**
 * @param {SvelteComponentConstructor<ComponentInstance, Svelte2TsxComponentConstructorParameters<Props>>} Svelte 
 */
const createCustomElement = (Svelte) => {
  return class SvelteCustomElement extends HTMLElement {
    constructor() {
      super();
    }

    get panel() {
      return this._panel;
    }
    set panel(value) {
      /** @type {Props["panel"]} */
      this._panel = value;
      if (this.svelte) this.svelte.panel = value;
    }

    get config() {
      return this._config;
    }
    setConfig(value) {
      /** @type {Props["config"]} */
      this._config = value;
      if (this.svelte) this.svelte.panel = value;
    }
    set config(value) {
      this.setConfig(value);
    }

    get hass() {
      return this._hass;
    }
    set hass(value) {
      /** @type {Props["hass"]} */
      this._hass = value;
      if (this.svelte) this.svelte.hass = value;
    }

    connectedCallback() {
      if (import.meta.env.PROD) {
        const style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        this.parentNode.appendChild(style);
      }

      this.svelte = new Svelte({
        target: this,
        props: {
          config: this.config,
          hass: this.hass,
          panel: this.panel,
        },
      });
    }

    disconnectedCallback() {
      this.svelte.$destroy();
      delete this.svelte;
    }
  };
};

export default createCustomElement;
