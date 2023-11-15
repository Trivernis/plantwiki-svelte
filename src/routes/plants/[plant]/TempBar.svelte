<script lang="ts">
  import type { PlantData } from "$lib/plants";

  export let temp: PlantData["temp"];
</script>

<div
  class="temp-bar"
  title="Tolerates temperatures between {temp.lower}°C and {temp.upper}°C. Dies below {temp.death}°C."
>
  <div
    class="temp lower-temp-death"
    style="width: {temp.death / (4 / 10)}%"
    aria-hidden="true"
  >
    <p>
      <i class="ri-skull-fill icon" aria-hidden="true" /> &lt; {temp.death}} °C
    </p>
  </div>
  <div
    class="temp lower-temp-live"
    aria-hidden="true"
    style="width: {(temp.lower - temp.death) / (4 / 10)}%"
  />
  <div
    class="temp temp-live"
    aria-hidden="true"
    style="width: {(temp.upper - temp.lower) / (4 / 10)}%"
  >
    <p>
      <i class="ri-plant-fill icon" aria-hidden="true" />{temp.lower}°C - {temp.upper}°C
    </p>
  </div>
  <div
    class="temp upper-temp-live"
    aria-hidden="true"
    style="width: {(40 - temp.upper) / (4 / 10)}%"
  />
  <div class="shadow-pseudo" />
</div>

<style lang="scss">
  @use "../../../colors.scss";

  .temp-bar {
    height: 1em;
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 0.5em;

    .temp {
      height: 1em;
      display: flex;
      position: relative;

      p {
        font-size: 0.85em;
        display: flex;
        margin: -0.1em auto 0;
        white-space: nowrap;
        z-index: 3;

        .icon {
          padding-right: 0.25em;
          margin-top: 0.15em;
          line-height: 1;
        }
      }
    }

    .shadow-pseudo {
      height: 1em;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0.35em 0.35em colors.$highlight;
      border-radius: 1em;
    }

    .lower-temp-death {
      text-align: right;
      border-radius: 1em 0 0 1em;
      background-image: linear-gradient(to right, colors.$red, colors.$yellow);

      p {
        right: 0;
      }
    }

    .lower-temp-live {
      background-image: linear-gradient(to right, colors.$yellow, colors.$blue);
    }

    .temp-live {
      background-color: colors.$blue;
      text-align: center;
    }

    .upper-temp-live {
      background-image: linear-gradient(to right, colors.$blue, colors.$yellow);
      border-radius: 0 1em 1em 0;

      p {
        left: 0;
      }
    }
  }
</style>
