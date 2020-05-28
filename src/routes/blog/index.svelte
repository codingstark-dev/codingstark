<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
 
</style>

<!-- Blog.svelte -->
<svelte:head>
  <title>CodingStark Blog</title>
</svelte:head>

<div class="container">
  <!-- <h4>Blog</h4> -->
  {#each posts.reverse() as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
     
      <h2>
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </h2> 
      <!-- <img
        src="https://1.bp.blogspot.com/-USyBVNe2RTU/XlI24dmbkeI/AAAAAAAALuA/ULI_0Yel4qQ-qBPe-J7M-V6aBnbWebRLQCLcBGAsYHQ/s1600/kinemaster%2Bdiamond%2Bapk.webp"
        alt="" /> -->
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
