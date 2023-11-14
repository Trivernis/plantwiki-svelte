<footer>
  <div class="footer-item float-left">
    <a href="https://trivernis.net">My Website</a>
  </div>
  <div class="footer-item float-right">
    <a href="https://git.trivernis.net/trivernis/plantwiki">Source</a>
  </div>
</footer>

<style lang="scss">
  @use "../colors.scss";

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0.5em;
    padding: 0 0.5em;
    overflow: hidden;
    background-color: colors.$highlight;
    color: colors.$highlight-inactive-text;
    width: calc(100% - 2em);
    border-radius: 0.5em;

    .footer-item {
      display: block;
      padding: 0.5em 1em;
    }

    a {
      color: colors.$highlight-inactive-text;
      text-decoration-color: colors.$highlight-inactive-text;

      &:hover {
        color: colors.$highlight-text;
        text-decoration-color: colors.$highlight-text;
      }
    }
  }
</style>
