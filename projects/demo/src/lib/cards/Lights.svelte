<svelte:options accessors={true} />

<script>
  /**
   * @typedef {object} Light
   * @property {string} short_name
   * @property {string} full_name
   */

  /** @typedef {Record<string, Light>} Config */

  /** @type {Hass} */
  export let hass;

  /** @type {Config} */
  export let config;

  import Icon from "@iconify/svelte";

  $: console.log(hass);
</script>

<h1 class="text-yellow-800 bg-yellow-200">
  Hi from <Icon icon="mdi:bulb" style="display: inline" /> lights card
</h1>

<p>This is <b>still</b> the lights card.</p>

<table>
  <thead>
    <tr>
        <th>slug</th>
        <th>light</th>
        <th>hass entity object</th>
    </tr>
  </thead>
  <tbody>
    {#each Object.entries(config) as [slug, light]}
      <tr>
        <td>{slug}</td>
        <td>{light}</td>
        <td>TODO: hass entity object here</td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="postcss">
  b {
    color: var(--section-header-text-color, var(--primary-text-color));
  }
</style>
