<script lang="ts">
  import SEO from "$components/SEO.svelte"
  import ProjectIcons from "$components/ProjectIcons.svelte"
  import ProjectBtnLink from "$components/ProjectBtnLink.svelte"
  let icons = [
    "Nuxt",
    "Bootstrap-Vue",
    "Sass",
    "Adobe-XD",
    "GitHub",
  ]
</script>

<SEO title="Group Sale Tracker" hideHeader  />

# Group Sale Tracker

Group Sale Tracker is a web application that can be run on a computer, tablet, or mobile phone that helps groups keep track of sales that they make. Imagine a neighborhood yard sale where different families bring in items and mix them together. How would you know how much money each family made? That is what this app solves.

<img src="/images/optimized/projects/group-sale-tracker/lg_group-sale-tracker-screenshot.png" alt="Screenshot" />

Okay, now that is out of the way, I don't think anyone (including myself) has ever used this. I thought of it as a fun problem to solve, and I really wanted to learn Nuxt.js a little better, so I put them together and came up with this app. Don't get me wrong, I put a lot of effort into the design and concepts of this, but I also developed it knowing that it wouldn't be a big "money-making app". I did spend a lot of time designing it using paper prototypes, then moving it in to Adobe XD before finally developing it.

Instead of writing out what this app does, here is a video of how the app works.

<div class="ratio ratio-16x9 mb-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8ZreBYWXQVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<ProjectBtnLink href="https://ngblaylock.github.io/group-sale-tracker/docs/"></ProjectBtnLink>

More than anything, this was just a fun pet project that I worked on. I learned a lot not only by using Nuxt.js, but also using client-side storage, and exporting and uploading JSON data.

<ProjectIcons {icons} />
