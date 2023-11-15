<script lang="ts">
  import slugify from "slugify";
  export let title: string;
  export let slug: string = slugify(title, { lower: true });
</script>

<section>
  <a href="#{slug}"><h2 id={slug}>{title}</h2></a>
  <slot name="subheading" />
  <slot />
</section>
