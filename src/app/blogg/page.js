// app/blog/page.js
import Link from "next/link";

const posts = [
  {
    title: "Vad är UX-design?",
    slug: "vad-ar-ux-design",
    description: "En introduktion till UX och varför det är viktigt.",
  },
  {
    title: "Så bygger du snabbare hemsidor",
    slug: "snabbare-hemsidor",
    description: "Tekniska tips för att optimera din webbsida.",
  },
];

export default function Blog() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blogg</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
