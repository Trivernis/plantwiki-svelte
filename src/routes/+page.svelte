<script lang="ts">
  import { plants } from "$lib/plants";
</script>

<h1>Plantwiki</h1>
<div class="plants-list">
  {#each Object.entries(plants) as [key, plant] (key)}
    <div class="plant-item-wrapper">
      <div class="plant-item">
        <a class="plant-link" href="/plants/{plant.slug}">
          <img
            class="plant-image"
            src={plant.image.small}
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

        img {
          border-radius: 0.5em;
          height: 128px;
          width: 256px;
          object-fit: cover;
        }
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
</style>
