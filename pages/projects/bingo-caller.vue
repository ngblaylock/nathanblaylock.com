<template>
  <div class="pb-5">
    <img src="/img/projects/bingo/bingo-hero.png" class="img-fluid" alt="" />
    <div class="container-sm">
      <h1>
        Bingo Caller
      </h1>
      <p>
        This project was initially inspired from an activity where I helped run
        a bingo game. One person called out the numbers, and I wrote the numbers
        called in a word document that was projected for everyone to see. As I
        ran the word document, I realized that there was a better way to do it
        where it would only need one person to manage the game. I decided to
        make my own system.
      </p>
      <p>
        There are several different bingo callers out there, however this one is
        free to use, free of ads, and there is no personal information that you
        need to give in order to use it. To me, I feel like these are enough
        reasons to use a program like this. Bingo Caller also comes with an
        adjustable timer. You can set it to call a new number every set number
        of seconds. If you do that, then everyone can have the chance to play.
      </p>
      <p>
        As for the branding, I didn’t spend a lot of time on it, but I thought
        it still turned out pretty good. I went with the font Pacifico. I added
        a little wave to the font, and really liked it. As for the color, purple
        seemed to do the trick.
      </p>
      <img
        src="/img/projects/bingo/bingo-screenshot.png"
        class="img-fluid d-block mx-auto mb-3"
        alt=""
      />
      <p class="text-center">
        <a
          href="https://bingo.nathanblaylock.com"
          class="btn btn-primary"
          target="_blank"
          >Visit Bingo Caller</a
        >
      </p>
      <p>
        I have had a few people use my bingo caller, and am glad that they enjoy
        using it. I have a few ideas in the future, such as adding audio, and
        maybe adding in some auto generated cards that the user can print off.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: "Bingo Caller",
      meta: [
        {
          hid: "description",
          content:
            "Bingo Caller is a project created and maintained by Nathan Blaylock. It is a free and ad-free web application to help groups of people enjoy a classic game of Bingo.",
          name: "description",
        },
        {
          hid: "og:description",
          content:
            "Bingo Caller is a project created and maintained by Nathan Blaylock. It is a free and ad-free web application to help groups of people enjoy a classic game of Bingo.",
          property: "og:description",
        },
        {
          hid: "og:title",
          content: "Bingo Caller",
          property: "og:title",
        },
      ],
    };
  },
};
</script>
