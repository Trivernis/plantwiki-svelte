<script lang="ts">
  import type { PageData } from "./$types";
  import Badge from "./Badge.svelte";
  import PlantImage from "./PlantImage.svelte";
  import TempBar from "./TempBar.svelte";

  export let data: PageData;
</script>

<div class="card">
  <h1>{data.name} (<i>{data.bin_name}</i>)</h1>
  <PlantImage image={data.image} />
  <section>
    <a href="#site"><h2 id="site">Site</h2></a>
    <TempBar temp={data.temp} />

    <Badge
      icon="sun"
      text={data.site.light}
      alt="Prefers {data.site.light} lighting conditions."
    />

    {#if data.site.humidity}
      <Badge
        icon="drop"
        text={data.site.humidity}
        alt="Prefers {data.site.light} humidity."
      />
    {/if}

    <p>
      {@html data.site.description}
    </p>
  </section>
  <section>
    <a href="#care"><h2 id="care">Care</h2></a>

    <Badge
      icon="drizzle"
      text="every {data.care.water_schedule}"
      alt="Water every {data.care.water_schedule}."
    />

    {#if data.care.mist_schedule}
      <Badge
        icon="mist"
        text="every {data.care.mist_schedule}"
        alt="Mist every {data.care.mist_schedule}."
      />
    {/if}

    {#if data.care.clean_schedule}
      <Badge
        icon="brush-2"
        text="every {data.care.clean_schedule}"
        alt="Clean every {data.care.clean_schedule}."
      />
    {/if}

    <p>{data.care.description}</p>
  </section>
</div>
