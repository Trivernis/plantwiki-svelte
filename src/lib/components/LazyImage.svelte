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

  onMount(() => {
    if (imgref && imgref.complete) loaded = true;
  });
</script>

<Img bind:imgref {src} {alt} {...$$restProps} on:load={() => (loaded = true)} />
<div class="blur" class:loaded />

<style lang="scss">
  @use "../../colors.scss";
  @use "sass:color";

  .blur {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(20px);
    pointer-events: none;
    transition-duration: 0.8s;
    opacity: 1;
    animation: loading;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
  .loaded {
    opacity: 0;
    animation: fade 2s bezier;
  }

  @keyframes fade {
    0%,
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
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
