<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: -webkit-fill-available;
    /* overflow: auto; */
  }
</style>

<header>
  <Logo />
  <Nav {segment} />
</header>
