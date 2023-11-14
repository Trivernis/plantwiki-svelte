<header>
  <ul class="navbar">
    <li>
      <a href="/">Home</a>
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
      float: left;

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
</style>
