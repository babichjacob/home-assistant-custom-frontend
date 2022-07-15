<script>
  import Icon from "@iconify/svelte";
  import Lights from "$lib/cards/Lights.svelte";

  const hass = { todo: "imitate hass" };

  const lights = {};

  const thermostat_status = "cooling";
</script>

<!-- <Lights {hass} config={lights} /> -->

<article name="overview">
  <div>Hi, good evening Jacob</div>

  <section name="current-room">
    <div>
      <span>It looks like you're in</span>
      <div>
        <span class="font-semibold">Front Room</span>
      </div>
    </div>

    <div name="devices-in-room">
      <!-- Switch icon type depending on if "active" or not -->
      <div name="cameras">
        <Icon icon="mdi:cctv" class="inline align-sub" />Camera(s)
      </div>

      <div name="lights">
        <Icon icon="mdi:bulb" class="inline align-sub" />Light(s)
      </div>

      <div name="locks">
        <Icon icon="mdi:lock" class="inline align-sub" />Lock(s)
      </div>

      <div name="speakers">
        <Icon icon="mdi:speaker" class="inline align-sub" />Speaker(s)
      </div>

      <div name="tvs"><Icon icon="mdi:tv" class="inline align-sub" />TV(s)</div>

      <div name="windows">
        <Icon icon="mdi:blinds" class="inline align-sub" />Window(s)
      </div>
    </div>

    <div name="sensors">
      <div name="climate">
        <span name="temperature">72*F</span>

        <span name="thermostat-status">
          {#if thermostat_status === "cooling"}
            <span>Cooling</span>
          {:else if thermostat_status === "heating"}
            <span>Heating</span>
          {:else if thermostat_status === "off-windows"}
            <span>Off <em>because the windows are open</em></span>
          {:else}
            <span>Unknown</span>
          {/if}
        </span>
      </div>
    </div>
  </section>

  <section name="switch-to-other-room">
    <span>See another room</span>

    <div class="nearby-rooms">
      <span>Nearby</span>
      <ul>
        <li><Icon icon="mdi:hallway" class="inline align-sub" />Hallway</li>
        <li><Icon icon="mdi:kitchen" class="inline align-sub" />Kitchen</li>
      </ul>
    </div>
    <div class="all-rooms">
      <span>All rooms</span>
      <ul>
        <li>
          <Icon icon="mdi:bedroom" class="inline align-sub" />Baka's Bedroom
        </li>
        <li><Icon icon="mdi:hallway" class="inline align-sub" />Hallway</li>
        <li>
          <Icon icon="mdi:bedroom" class="inline align-sub" />Jacob's Bedroom
        </li>
        <li>
          <Icon icon="mdi:bedroom" class="inline align-sub" />Jenna's Bedroom
        </li>
        <li><Icon icon="mdi:kitchen" class="inline align-sub" />Kitchen</li>
        <li>
          <Icon icon="mdi:bedroom" class="inline align-sub" />Matt's Bedroom
        </li>
      </ul>
    </div>
  </section>

  <section name="" />
</article>
