<script lang="ts">
  import LazyImage from "$lib/components/LazyImage.svelte";
  import { plants } from "$lib/plants";
  const images = import.meta.glob("$lib/assets/images/*.{png,jpg,jpeg,webp}", {
    import: "default",
    eager: true,
    query: { w: 256, h: 128, fit: "cover", as: "run", normalize: true },
  });
</script>

<h1>Plantwiki</h1>
<div class="plants-list">
  {#each Object.entries(plants) as [key, plant] (key)}
    <div class="plant-item-wrapper">
      <div class="plant-item">
        <a class="plant-link" href="/plants/{plant.slug}">
          <LazyImage
            class="sv-image"
            src={images[`/src/lib/assets/images/${plant.image.local}`] ?? {
              img: { src: plant.image.remote, w: plant.image.width },
              sources: {
                [plant.image.format ?? "jpeg"]: [
                  { src: plant.image.remote, w: plant.image.width },
                ],
              },
            }}
            alt={plant.image.alt}
          />
          <h2 class="plant-title">{plant.name}</h2>
        </a>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  @use "../colors.scss";

  .plants-list {
    width: 100%;
    display: block;

    .plant-item-wrapper {
      margin: 0;
      display: block;
      float: left;
      height: calc(128px + 2em);
      width: calc(256px + 2em);
    }

    .plant-item {
      margin: 1em;
      display: flex;
      border-radius: 0.5em;
      box-shadow: 0.5em 0.5em colors.$highlight;
      transition-duration: 0.25s;
      height: 128px;
      width: 256px;
      user-select: none;
      overflow: hidden;

      &:hover {
        margin: 0.75em 1.25em 0.75em 0.75em;
        box-shadow: 0.75em 0.75em colors.$highlight;

        a.plant-link h2.plant-title {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }

      &:active {
        margin: 1em;
        box-shadow: 0.5em 0.5em colors.$highlight;
      }

      a.plant-link {
        display: block;
        position: relative;

        h2.plant-title {
          transition-duration: 0.25s;
          position: absolute;
          bottom: 0;
          margin: 0;
          width: 100%;
          text-align: center;
          color: white;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 0.5rem;
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .plants-list {
      display: block;

      .plant-item-wrapper {
        float: none;
        margin: auto;
      }

      .plant-item {
        float: none;
        margin: 1em auto;

        &:hover {
          margin: 1em auto;
          box-shadow: 0.5em 0.5em colors.$secondary;
        }

        &:active {
          margin: 1em auto;
          box-shadow: 0.5em 0.5em colors.$secondary;
        }
      }
    }
  }
  :global(.plants-list .sv-image) {
    border-radius: 0.5em;
    height: 128px;
    width: 256px;
    object-fit: cover;

    --reveal-transform: scale(1.02);
    --reveal-transition: opacity 1s ease-in, transform 0.8s ease-out;
    --reveal-filter: blur(20px);
  }
</style>
