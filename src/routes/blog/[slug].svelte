<script context="module">
  // import { post } from "./../../../__sapper__/build/server/server.js";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Bio from "../../components/Bio.svelte";
  export let post;
  // let lolo = post.keyword.replace(/^"(.*)"$/, "$1");
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.meta} />
  <meta name="keywords" content={post.keyword} />
  <meta name="author" content={post.author} />
  <link rel="canonical" href="http://localhost:300/{post.slug}" />

</svelte:head>


  <header>
    <p>{post.printDate} ~ {post.printReadingTime}</p>
    <h1>{post.title}</h1>
    <p>by {post.author}</p>
    <hr />
  </header>
  <div class="container">
    <article class="content">
      {@html post.html}
    </article>
    <hr />
    <Bio />
  </div>

