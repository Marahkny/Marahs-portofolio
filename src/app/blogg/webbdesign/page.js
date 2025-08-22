// app/blog/[slug]/page.js
export default function Webbdesign({ params }) {
  const { slug } = params;

  const posts = {
    "vad-ar-ux-design": {
      title: "Vad är UX-design?",
      content: "Här skriver du hela ditt blogginlägg...",
    },
    "snabbare-hemsidor": {
      title: "Så bygger du snabbare hemsidor",
      content: "Teknisk SEO, Core Web Vitals, cache osv...",
    },
  };

  const post = posts[slug];

  if (!post) return <p>Inlägget hittades inte.</p>;

  return (
    <article className="p-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
