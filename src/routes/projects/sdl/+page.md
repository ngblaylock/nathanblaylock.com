<script lang="ts">
  import SEO from "$components/SEO.svelte"
  import ProjectIcons from "$components/ProjectIcons.svelte"
  import ProjectBtnLink from "$components/ProjectBtnLink.svelte"
  let icons = [
    "Nuxt",
    "Figma",
    "Bootstrap-Vue",
    "Sass",
    "Node-JS",
    "Bash"
  ]
</script>

<SEO title="Space Dynamics Laboratory" hideHeader  />

# Space Dynamics Laboratory

Space Dynamics Laboratory (SDL) is a nonprofit organization owned by Utah State University that develops technology for government, military, space, and more. SDL's website which was developed in 2015 was long overdue for a style change and content update. The marketing team at SDL got the go-ahead to redesign the company website and began research and designing. As the primary UX/UI designer on other projects, I was able to help guide the marketing team to create a top-notch design that would work well as an online format. As part of guiding the design, I also trained the designers to use Figma, which is a fantastic tool for mockups and prototypes.

My role in gathering content and doing user research was pretty minimal. My main role was taking website mockups and converting them to code. The top three priorities on this new website were to:

1. Pay attention to search engine optimization
2. Ensure the website was highly accessible
3. Support a responsive nature for all screen sizes

For development I went to my favorite stack; Bootstrap Vue, Nuxt, and Sass. Setting up the site was a breeze. One of the tools I created was an SEO checker. On every page we could quickly see if there were any missing critical titles or meta tags. These little development helper tools allowed our team to keep in sync with the development status of certain pages.

Another neat feature I developed was a site-wide keyword search. We wanted a way for users to quickly find information on the site without needing to click on every link. I developed a node script that would crawl each page and extract the page title, description, and any keywords we wanted to provide. It creates a JSON file that returns results with words highlighted as the user types in the searchbox. It also ranks the search results to give the user the best matches on top. If there are no results there is an advanced search available that runs a Google search within our site.

<img src="/images/optimized/sdl/lg_sdl-screenshot.png" alt="Screenshot of SDL Website" />

<ProjectBtnLink href="https://sdl.usu.edu" />

The new website was released in November 2022 and has been one of my favorite projects to work on. It took a lot of teamwork and collaboration but we couldn't have been happier with the result.

<ProjectIcons {icons} />