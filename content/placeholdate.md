---
title: Placeholdate Figma Plugin
icons: 
  - TypeScript
  - Node JS
  - Alpine
  - Sass
  - Figma
---

Placeholdate is a Figma plugin that adds placeholder data for dates. The Figma community has a lot of extensions that can add in a variety of placeholder data, such as words, sentences, paragraphs, names, addresses, images, and so on. Plugins have been a crucial part of my interface design process by quickly mocking up ideas for my customers, but there was one area that I could not find a suitable solution. As many plugins as there were, none of them really handled date data the way I needed. Unlike sentences or names, dates have so many options on how to display it. Do you write 2022-02-01 or February 1, 2022 or Feb. 01, 2022? I decided to solve that issue.

<content-img src="/img/projects/placeholdate/PlaceholdPlusDateEqPlaceholdate.png" alt="Placehold + Date = Placeholdate"></content-img>

Figma has an awesome guide for developing plugins. They even give you starter code and walk you through adding that plugin as a local plugin for testing. All of that went pretty smoothly. I made a quick prototype for how I would use the plugin using mostly Vue and Day.js. I was able to add in whatever date format I wanted into an input, and it would add that date into my design. It was an awesome success. I called this local plugin "Lorem Date". However, I wasn't very satisfied with a few things.

1. I wasn't able to provide a custom date range. Maybe I wanted dates in the past, or future, and it would just use a set random date
2. It wouldn't sort dates in any particular order. It was always random.
3. The date format would change back to whatever default option I had set it to in the code. It wouldn't remember my last format
4. It wasn't available to share easily with my friends and colleagues. 

I came back to the drawing board and looked at how I could solve these problems. Before any development happened, I prototyped out what it would look like and how it would function (in Figma of course). Then I took another look at the technology I was currently using. Day.js still made a lot of sense to use. I love using Vue, but I had heard about Alpine.js and how small the size was but still had a similar API. I tried it out and liked it. I would definitely recommend Alpine.js for working with Figma Plugins.

<content-img src="/img/projects/placeholdate/placeholdate-sketch.png" alt="Sketch of the plugin"></content-img>

For the design I added in an "options" dropdown where the user could select the date range and order of dates. I also learned that Figma had their own way of handling client-side storage that ties to the Figma plugin ID. Using that allowed any user to select the way they wanted their dates formatted and it would remember it. I also learned how to publish the plugin on the community, which took a grand total of 30 seconds. Everything worked, which was great! 

<content-img src="/img/projects/placeholdate/placeholdate-in-action.png" alt="Placeholdate Plugin in action"></content-img>

There was however, one more issue. The development experience was somewhat difficult to work with. What it takes is two files. One is the typescript file which transpiles to JavaScript connecting your plugins UI to Figma, and another is a very basic html file for the UI. This is normally fine, but when you have to shove all of your CSS, HTML, and JavaScript into one file, it can get long and messy very fast. What I did was created my own build tool that will watch for changes in specific files and will generate the HTML UI for me. Taking this one step further, I was also able to write all of my CSS in Sass which is always so much easier. Now instead of managing 1 extremely large file, I can write my app out in different files and formats and have it immediately compile itself. Check out how I did it on [GitHub](https://github.com/ngblaylock/figma-placeholdate).

<content-img src="/img/projects/placeholdate/placeholdate-screenshot.png" alt="Placeholdate Plugin screenshot"></content-img>

<content-btn href="https://www.figma.com/community/plugin/1098444899707858859/Placeholdate">See Plugin</content-btn>

Since this post, I have had over 750 downloads of what I assume are happy customers. I am glad that I have been able to fill in a gap for other UI designers around the world.