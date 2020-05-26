<script>
  import Header from "../components/Header.svelte";
  export let segment;
  import { stores } from "@sapper/app";
  const { page } = stores();
  $: if (typeof gtag !== "undefined") {
    gtag("config", "UA-124602515-6", {
      page_path: $page.path
    });
  }
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: white;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #aaa;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: -webkit-fill-availableb;
  }
  .heart {
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png");
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline-block;
    position: relative;
    height: 22px;
    width: 17px;
    top: 10px;
  }
</style>

<div class="layout">
  <Header {segment} />

  <main>
    <slot />
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} CodingStark. Build With
      <a href="https://svelte.dev" target="_blank">Svelte</a>
      . Made With
      <span class="heart" />
      by
      <a href="https://www.instagram.com/codingstark/" target="_blank">
        Himanshu Maurya
      </a>
      .
    </span>
  </footer>
</div>
