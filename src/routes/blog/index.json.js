import posts from "./_posts.js";

const contents = JSON.stringify(
    posts.map((post) => {
        return {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            printDate: post.printDate,
            published: post.published,
        };
    })
);

export function get(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(contents);
}