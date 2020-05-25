<script>
  import Header from "../components/Header.svelte";

  export let segment;
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
      <i class="fa fa-heart" style="font-size:16px;color:red" />
      by
      <a href="https://www.instagram.com/codingstark/" target="_blank">
        Himanshu Maurya
      </a>
      .
    </span>
  </footer>
</div>
