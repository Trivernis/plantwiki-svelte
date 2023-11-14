<script lang="ts">
  export let icon: string;
  export let alt: string;
  export let text: string;
</script>

<div class="badge" aria-label={alt}>
  <i class="ri-{icon}-fill icon" aria-hidden="true" /><span aria-hidden="true">
    {@html text}
  </span>
</div>

<style lang="scss">
  @use "../../../colors.scss";

  .badge {
    padding: 0.25em;
    display: inline-block;
    border-radius: 0.5em;
    background-color: colors.$highlight;
    color: colors.$highlight-text;

    .icon,
    span {
      float: left;
      padding-right: 0.25em;
      margin: auto;
      line-height: 1;
    }
    margin: 0.25em;
  }
</style>
