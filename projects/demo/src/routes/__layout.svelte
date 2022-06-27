<script>
  import "$lib/app.css";
</script>

<div class="simulated">
  <slot />
</div>

<style lang="postcss">
  .simulated {
    --test-custom-property: #123456;
  }
</style>
