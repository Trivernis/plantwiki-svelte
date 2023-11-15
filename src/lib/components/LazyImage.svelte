<script context="module" lang="ts">
  export type Source = {
    img: { src: string; w?: number; h?: number };
  } & {
    [key: string]: { src: string; w?: number; h?: number }[];
  };
</script>

<script lang="ts">
  import Img from "@zerodevx/svelte-img";
  import { onMount } from "svelte";

  export let src: Source | any;
  export let alt: string;

  let imgref: Img;
  let loaded: boolean = false;
  let quickloaded: boolean = false;
  let loadStart = Date.now();

  onMount(() => {
    loadStart = Date.now();
    if (imgref && imgref.complete) quickloaded = true;
  });
</script>

<Img
  bind:imgref
  {src}
  {alt}
  {...$$restProps}
  on:load={() => {
    if (Date.now() - loadStart > 500) {
      console.log("slow");
      loaded = true;
    } else {
      console.log("quick");
      quickloaded = true;
    }
  }}
/>
<div class="blur" class:loaded class:quickloaded />

<style lang="scss">
  @use "../../colors.scss";
  @use "sass:color";

  .blur {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(20px);
    pointer-events: none;
    opacity: 1;
    animation: loading;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
  .quickloaded {
    opacity: 0;
  }
  .loaded {
    opacity: 0;
    transition-duration: 1s;
  }

  @keyframes loading {
    0%,
    100% {
      background: rgba(0, 0, 0, 0);
    }
    50% {
      background: color.adjust(colors.$background, $alpha: -0.8);
    }
  }
</style>
