<!-- <script context="module">
  export function preload({ params, query }) {
    return this.fetch("sitemap.xml");
  }
</script> -->

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  /* figcaption {
    font-size: .8em;
    font-style: italic;
  } */

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>The CodingStark</title>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-124602515-6">

  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-124602515-6");
  </script>
  <!-- Primary Meta Tags -->
  <title>CodingStark - Becomer easier programmer</title>
  <link rel="canonical" href="https://codingstark.com/" />
   <link rel="apple-touch-icon" href="logo.webp">

  <meta name="title" content="CodingStark - Becomer easier programmer" />
  <meta
    name="description"
    content="If your willing be a good programmer and developer so don't worry
    you will get huge amount of knowledge in this blog " />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://CodingStark.com" />
  <meta property="og:title" content="CodingStark - Becomer easier programmer" />
  <meta
    property="og:description"
    content="If your willing be a good programmer and developer so don't worry
    you will get huge amount of knowledge in this blog " />
  <meta property="og:image" content="logo.webp" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://CodingStark.com" />
  <meta
    property="twitter:title"
    content="CodingStark - Becomer easier programmer" />
  <meta
    property="twitter:description"
    content="If your willing be a good programmer and developer so don't worry
    you will get huge amount of knowledge in this blog " />
  <meta property="twitter:image" content="logo.webp" />

</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>This Website Will Give You Goku Power!</h1>
    <p>
      Check Out Latest Post
      <a href="/blog">Blog.</a>
    </p>
  </div>

  <figure>
    <img alt="Person typing on laptop" src="man.webp" />
  </figure>
</div>
