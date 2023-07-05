---
title: Scoresheet App
icons:
  - Figma
  - Tailwind
  - Svelte
---

Growing up, my family played games frequently, especially card games. We would often find ourselves scrambling to come up with some scratch paper to write down scores. It was also an argument on who would be the scorekeeper because no one wanted to do the math that came with it. The Scoresheet app is the answer to handle this tedious task. I wanted to develop an app that would allow the user to easily add players and scores without needing to worry about adding any scores. It also needed to primarily work on a phone for ease of use.

After I made some mockups and a prototype in Figma, I passed it around my family to see if they would actually use this if I made it. I got the green light from them and headed to my development phase.

<content-img src="/img/projects/scoresheet/screenshot-mockup.png" alt="Figma mockup of app"></content-img>

This was my first project using Svelte and SvelteKit. It ended up being pretty good timing since SvelteKit 1.0.0 was just released. I knew there wouldn't be many resources online for how to do something in SvelteKit, but I figured this project was low-risk if it didn't turn out.  

For CSS I decided to try out Tailwind. I heard a lot about Tailwind but was hesitant to try it out. I decided to give it a fair chance. Honestly, I didn't really like using Tailwind but I won't bore you with those reasons here. I will likely stick to Bootstrap for future projects.

Developing the app was a little bit of a learning curve, but I really enjoyed SvelteKit. To me it appeared to follow more of a development flow of a standard HTML page. One of my challenges with this project, as I mentioned, is that SvelteKit was pretty new at the time and there weren't many resources. I was pretty determined to include some drag-and-drop functionality. I was able to figure out how to use [sortable.js](https://github.com/SortableJS/Sortable) with Svelte in a [REPL](https://svelte.dev/repl/c57065538da641f5bbe6b3798faaa936?version=4.0.4) and merge that over to my project.

Overall the app has been very successful. As always, there are a few things I would like to improve on it but for now it gets the job done. This app is available to anyone so give it a try.

<content-img src="/img/projects/scoresheet/screenshot.png" alt="Screenshot of the total scores after round 3" width="400"></content-img>

<content-btn href="https://scoresheet.nathanblaylock.com/">Open App</content-btn>