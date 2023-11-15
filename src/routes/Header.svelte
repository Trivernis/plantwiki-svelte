<script lang="ts">
  import { ShareButton } from "drab";
  import { page } from "$app/stores";

  $: shareData = {
    text: $page.data.title,
    title: $page.data.title,
    url: `${$page.url.protocol}//${$page.url.host}${$page.url.pathname}`,
  };
</script>

<header>
  <ul class="navbar">
    <li class="float-left">
      <a href="/">Home</a>
    </li>
    <li class="float-right">
      <ShareButton class="header-share-button" {shareData} />
    </li>
  </ul>
</header>

<style lang="scss">
  @use "../colors.scss";

  ul.navbar {
    list-style-type: none;
    position: fixed;
    margin: 0;
    padding: 0;
    display: block;
    background-color: colors.$highlight;
    overflow: hidden;
    width: calc(100% - 1em);
    color: colors.$highlight-text;
    border-radius: 0.5em;
    z-index: 99;

    li {
      display: inline;

      a {
        display: block;
        padding: 1em 2em;
        text-decoration: none;
        font-weight: bold;
        color: colors.$highlight-text;

        &:hover {
          background-color: darken(colors.$highlight, 5%);
        }
      }
    }
    li.selected a {
      background-color: lighten(colors.$highlight, 5%);
    }
  }

  :global(.header-share-button) {
    float: right;
    font-size: 1em;
    padding: 1em 2em;
    height: 100%;
    font-weight: bold;
    color: colors.$highlight-text;
    border-radius: 0;
    margin-top: 1px;

    &:hover {
      background-color: darken(colors.$highlight, 5%);
    }
  }
</style>
