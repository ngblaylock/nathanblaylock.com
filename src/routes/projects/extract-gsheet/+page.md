<script lang="ts">
  import * as E from "$components/Elemental";
  import Logos from "$components/Logos.svelte"
  import ProjectBtnLink from "$components/ProjectBtnLink.svelte"
  let logos = [
    "Node-JS",
    "Rollup",
    "NPM",
    "Figma",
    "Eleventy",
    "Nunjucks",
    "Markdown",
    "Bootstrap",
    "Sass",
    "GitHub"
  ]
</script>

<E.SEO title="Extract GSheet" hideHeader  />

# Extract GSheet

Extract GSheet is a script that allows a developer to pull information straight out of a published Google Sheet. Think of this as a sort of get request for an API. There is no way to send data to Google Sheets, just retrieve it. This project came about due to [Tabletop.js by jsoma](https://github.com/jsoma/tabletop) no longer able to function. I had relied on that script for quite some time and when it stopped working, I looked at a bunch of other options. Unsatisfied with each of them, I decided to write my own.

This project really encompasses two different sections. First, developing the script and publishing it to NPM, and second, developing friendly documentation.

## Developing the Script

When I started developing the script, I didn't actually know if it would work or not. The method was pretty simple though. Get the HTML content from a page, and convert it to a DOM structure. Then, it would crawl the DOM and pull out data in a table and convert it to a JavaScript object. Each table would need to have a header row. The keys would be based on that row. Then the items would be any following row.

Tabletop was great, but I thought I could handle some of the data even better. One thing that Tabletop didn't really do was bring in data from multiple pages, and it also didn't convert numbers to numbers, and true/false values to booleans. I also liked the idea of converting a checkbox to a boolean value as well. So there was a little bit of manipulation of data in there.

<img src="/images/optimized/projects/extract-gsheet/lg_spreadsheet-screenshot.png" alt="Spreadsheet Screenshot" />

I made a test sheet of content themed around Scooby-Doo, a favorite childhood cartoon. As I thought about all the options of what I would like to see return from the sheet, and through some trial and error, I got the desired data returning from the script. Even if some of the data was mal-structured, it generally worked the way I would expect it.

I was also interested in Rollup. I liked the script that I had made, but there wasn't really a way to use it as an import statement in my Nuxt projects. I did a lot of refactoring and got my code to run through Rollup and output it in multiple formats. I was very happy with the results.

<img src="/images/optimized/projects/extract-gsheet/lg_npm-screenshot.png" alt="NPM Screenshot" />

I got so excited about this, I decided that I wanted to publish it to NPM. This was my first experience publishing to NPM. I learned a little bit about the configuration which wasn't too hard, and I got that published in a few moments. Since the initial push, I have pushed some very minor modifications to the code. That was neat to try out. As an added bonus, I learned that some CDN libraries like unpkg or cdnjs will pull straight from NPM and allow users to use the script as a CDN.

## Developing the Documentation

One thing that has always bugged me about some packages on NPM is the lack of documentation. I started out with just a basic markdown file, but then that transitioned into creating a whole site for my documentation. I really wanted users to know that this project was something that I cared about. I designed out a whole brand for the project, and developed a site using Eleventy and Sass-modified Bootstrap.

<img src="/images/optimized/projects/extract-gsheet/lg_data-screenshot.png" alt="NPM Screenshot" />

The homepage is a demonstration of what data looks like when you load my published Google Sheet, and will allow the user to add their own published sheet URL and see how the data returns. The documentation page is the same markdown file that I used for NPM. I did have to write a node script to transform some of that data into something that both my website and NPM can correctly render, but that is in a deploy script so I don't have to remember to run it every time.

One other thing I find extremely helpful when going through other documentation is seeing how to use the script using different technologies. I thought this would be a great opportunity to learn a variety of languages on a high level. I created example pages (all static) using Alpine, Angular.js, Handlebars, jQuery, React, and Vue.

<img src="/images/optimized/projects/extract-gsheet/lg_extract-gsheet-screenshot.png" alt="Website Screenshot" />

<ProjectBtnLink href="https://ngblaylock.github.io/extract-gsheet" />

Extract GSheet was a really fun personal project to work on. For more information about this project I wrote a blog article called [Extract Data from Google Sheets](https://dev.to/ngblaylock/extract-data-from-google-sheets-13jn) that you can find on dev.to.



<Logos {logos} />