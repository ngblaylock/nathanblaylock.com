<script lang="ts">
  import SEO from "$components/SEO.svelte"
  import ProjectIcons from "$components/ProjectIcons.svelte"
  let icons = [
    "jQuery",
    "Sass",
    "GitHub"
  ]
</script>

<SEO title="Bingo Caller" hideHeader />

# Bingo Caller

This project was initially inspired from an activity where I helped run a bingo game. One person called out the numbers, and I wrote the numbers called in a word document that was projected for everyone to see. As I ran the word document, I realized that there was a better way to do it where it would only need one person to manage the game. I decided to make my own system.

There are several different bingo callers out there, however this one is free to use, free of ads, and there is no personal information that you need to give in order to use it. To me, I feel like these are enough reasons to use a website like this. Bingo Caller also comes with an adjustable timer. You can set it to call a new number every set number of seconds. If you do that, then everyone can have the chance to play.

As for the branding, I didn’t spend a lot of time on it, but I thought it still turned out pretty good. I went with the font Pacifico. I added a little wave to the font, and really liked it. As for the color, purple seemed to do the trick.

<!-- bingo caller screenshot -->

I have had a few people use my bingo caller, and am glad that they enjoy using it. I have a few ideas in the future, such as adding audio, and maybe adding in some auto generated cards that the user can print off.

<ProjectIcons {icons} />