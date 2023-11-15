<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import "../app.scss";

  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    // @ts-expect-error
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      // @ts-expect-error
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Header>
  <slot slot="header-items" name="header-items" />
</Header>

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
