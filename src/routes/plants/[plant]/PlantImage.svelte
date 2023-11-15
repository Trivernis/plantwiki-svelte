<script lang="ts">
  import type { PlantData } from "./proxy+page";

  export let image: PlantData["image"];
</script>

<figure class="plant-image">
  <img src={image.medium} alt={image.alt} />

  {#if image.source != ""}
    <a class="image-source" href={image.source} aria-label="Image Source">
      Source
    </a>
  {/if}
</figure>

<style lang="scss">
  @use "../../../colors.scss";
  .plant-image {
    width: 100%;
    aspect-ratio: 2 / 1;
    display: flex;
    margin: auto;
    border-radius: 0.5em;
    color: colors.$highlight-text;
    box-shadow: 0.5em 0.5em colors.$highlight;
    position: relative;

    a {
      color: colors.$highlight-text;
    }

    .image-source {
      position: absolute;
      padding: 0.25em;
      border-radius: 0.25em;
      margin: 0.25em;
      bottom: 0;
      right: 0;
      font-size: 0.8em;
      background-color: transparentize(colors.$highlight, 0.75);
      transition-duration: 0.5s;
    }

    img {
      border-radius: 0.5em;
      width: 100%;
      object-fit: cover;
    }

    &:hover .image-source {
      background-color: colors.$highlight;
    }
  }
</style>
