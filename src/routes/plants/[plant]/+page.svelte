<script lang="ts">
  import type { PageData } from "./$types";
  import Badge from "./Badge.svelte";
  import PlantImage from "./PlantImage.svelte";
  import Section from "./Section.svelte";
  import TempBar from "./TempBar.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import { ShareButton } from "drab";

  export let data: PageData;
</script>

<div class="card">
  <h1>
    {data.name} (<i>{data.bin_name}</i>)
  </h1>

  <PlantImage image={data.image} />

  <Section title="Site">
    <div slot="subheading">
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
    </div>

    <p>
      <SvelteMarkdown source={data.site.description} />
    </p>
  </Section>
  <Section title="Care">
    <div slot="subheading">
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
    </div>

    <SvelteMarkdown source={data.care.description} />
  </Section>
  {#if data.common_issues != null}
    <Section title="Common Issues">
      <SvelteMarkdown source={data.common_issues.description} />
    </Section>
  {/if}
</div>

<style lang="scss">
</style>
