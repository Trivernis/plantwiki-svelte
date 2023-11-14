<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import "../app.scss";
</script>

<Header />
<section class="main">
  <slot />
</section>
<Footer />

<style lang="scss">
  @import "../colors.scss";

  .main {
    margin: auto;
    width: 75%;
    padding-top: 3em;
    padding-bottom: 2em;
  }
</style>
