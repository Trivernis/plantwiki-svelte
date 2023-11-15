<script lang="ts">
  import LazyImage from "$lib/components/LazyImage.svelte";
  import type { PlantData } from "$lib/plants";

  export let image: PlantData["image"];

  const images = import.meta.glob("$lib/assets/images/*.{png,jpg,jpeg,webp}", {
    import: "default",
    eager: true,
    query: { w: 1024, h: 512, fit: "cover", as: "run", normalize: true },
  });

  const src = images[`/src/lib/assets/images/${image.local}`] ?? {
    img: { src: image.remote, w: image.width },
    sources: {
      [image.format ?? "jpeg"]: [{ src: image.remote, w: image.width }],
    },
  };
</script>

<figure class="plant-image">
  <div class="image-wrap">
    <LazyImage class="sv-image" {src} alt={image.alt} />
  </div>

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

    .image-wrap {
      aspect-ratio: 2 / 1;
      overflow: hidden;
      border-radius: 0.5em;
      width: 100%;
      object-fit: cover;
    }

    &:hover .image-source {
      background-color: colors.$highlight;
    }
  }

  :global(.plant-image picture) {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 1;
  }

  :global(.sv-image) {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 1;
    object-fit: cover;

    --reveal-transform: scale(1.02);
    --reveal-transition: opacity 1s ease-in, transform 0.8s ease-out;
    --reveal-filter: blur(20px);
  }
</style>
