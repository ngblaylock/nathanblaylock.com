<template>
  <div class="pb-5">
    <Seo title='JRWCPATAX Portfolio' description="Learn how I helped Jeffery Wangsgard with his new start-up by assisting with branding, web development, and photography." />
    <img src="/img/projects/jrwcpatax/JRW-hero.png" class="img-fluid" alt="" />
    <div class="container-sm">
      <h1>Jeffrey R. Wangsgard &amp; Associates</h1>
      <p>
        Jeffrey Wangsgard is a Certified Public Accountant in Cache Valley, and
        has been working with a partner for a number of years. After he and his
        partner decided to split the business and go separate directions Jeffrey
        started looking for branding and a website for his new business. He had
        a one month timeline between when he contacted me to when he would be in
        his new office space. It was time to get started.
      </p>
      <p>
        The first thing to start on was branding. I did quite a bit of brand
        research and tried out a few options, and ended up with a wordmark. The
        font I chose was Alegreya Sans SC. It is professional, clean, and not a
        common font. I especially liked it because it was designed to be a small
        cap font. Another thing that I liked about the font was that the “J” in
        Jeffrey goes below the font baseline. I thought that worked really well
        being the first character in the wordmark.
      </p>
      <ProjectImg src="/img/projects/jrwcpatax/JRW-wordmarks.png" />
      <p>
        I played around with a few colors, and chose to go with teal and dark
        teal. To add some contrast, I also added in a golden orange color, which
        actually helps tie in his previous business color scheme. Once we had
        his branding in order, I gathered all of his branding assets into one
        package that he could keep at his business, and use however he needed.
        Some important parts of his package included his logo in different
        colors and formats (jpg, png, eps), the fonts we used, and the colors
        listed out in HEX, RGB, and CMYK.
      </p>
      <ProjectImg src="/img/projects/jrwcpatax/JRW-colors.png" />
      <p>
        Once Jeffrey gave me the go-ahead, we moved on to some building signage
        and promotional materials. Jeffrey’s business is on Main Street in
        Logan, and he had a space where he could put his logo on an outdoor
        sign. He connected me with a sign maker in town that he had worked with
        before, and got me the dimensions of the sign. We worked together to
        talk about materials and his process. Before too long, we had his logo
        up so everyone could see it. Inside the building, we put up a big window
        sign on all the exterior windows, and included some instructions to
        which door was the correct door to go in (it was a pretty confusing
        space if you enter the building through the wrong door). We got some
        business cards for Jeffrey and his employees, as well as a tax folder.
        Jeffrey was officially ready to start seeing clients.
      </p>
      <ProjectImg src="/img/projects/jrwcpatax/JRW-gallery.png" />
      <BaguetteBox class="d-block mb-3 text-center" :gallery="gallery" button />
      <p>
        During the same time that we worked on the promotional materials, we
        also got the website up and running. The website reflected his brand
        really well. We used the same teal and dark teal colors primarily
        throughout the website, and used the golden orange color for some
        buttons to help them stand out more. For me, the hardest part of
        building a website is getting all the content in order. Fortunately,
        Jeffrey was able to get me all the content quickly. That was very
        helpful since Jeffrey knew his own content much better than I ever
        could. One extra feature that we were able to put on his website is a
        login to a third party software group that Jeffrey uses for his clients.
        A client would normally go to this company’s website and login from
        there, but the company gave us some code that would allow the user to
        log in straight from Jeffery’s website, then be redirected to where they
        needed to go. We felt like that would provide a better user experience.
      </p>
      <ProjectImg src="/img/projects/jrwcpatax/JRW-screenshot.png" />
      <p class="text-center">
        <a href="https://jrwcpatax.com" target="_blank" class="btn btn-primary"
          >View Website</a
        >
      </p>
      <p>
        It was so much fun to work on this branding and website project with
        Jeffrey. I still continue to help him out with any needs he has with
        branding. I loved working with Jeffrey, and feel like the work I did for
        him really helped his business out in many ways. We got lots of
        compliments from his returning clients on how well the brand turned out
        and how easy the website was to use.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      gallery: [
        {
          img: "/img/projects/jrwcpatax/JRW-gallery-1.png",
          thumbnail: "/img/projects/jrwcpatax/JRW-gallery-1.png",
          title: "Outdoor Sign",
        },
        {
          img: "/img/projects/jrwcpatax/JRW-gallery-2.png",
          thumbnail: "/img/projects/jrwcpatax/JRW-gallery-2.png",
          title: "Indoor Sign",
        },
        {
          img: "/img/projects/jrwcpatax/JRW-gallery-3.png",
          thumbnail: "/img/projects/jrwcpatax/JRW-gallery-3.png",
          title: "Wordmark Sign",
        },
        {
          img: "/img/projects/jrwcpatax/JRW-gallery-4.png",
          thumbnail: "/img/projects/jrwcpatax/JRW-gallery-4.png",
          title: "Letterhead Design",
        },
        {
          img: "/img/projects/jrwcpatax/JRW-gallery-5.png",
          thumbnail: "/img/projects/jrwcpatax/JRW-gallery-5.png",
          title: "Business Card & Tax Folder",
        },
      ],
    };
  },
};
</script>
