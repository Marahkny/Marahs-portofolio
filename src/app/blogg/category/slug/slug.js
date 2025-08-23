import Image from "next/image";
import Link from "next/link";
import { posts, getCategorySlugs, getCategoryList } from "../../../data/posts";


export default function BlogPostPage({ params }) {
const { slug, category } = params;
const post = posts.find((p) => p.slug === slug);


if (!post) {
return (
<main className="p-8 mx-auto">
<h1 className="text-2xl font-bold">Inlägget hittades inte</h1>
<p className="mt-2">Kontrollera URL:en eller gå tillbaka till <Link className="underline" href="/blog">bloggen</Link>.</p>
</main>
);
}


const categories = getCategoryList(post);
const categorySlugs = getCategorySlugs(post);


return (
<main className="p-8 mx-auto max-w-3xl">
<nav className="mb-6 text-sm">
<Link className="underline" href="/blog">Blogg</Link>
<span className="mx-2">/</span>
<Link className="underline" href={`/blog/${category}`}>{category}</Link>
</nav>


<h1 className="text-3xl font-bold mb-4">{post.title}</h1>


<div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
<Image
src={post.bild || "/photos/default.png"}
alt={post.title}
fill
className="object-cover"
/>
</div>


<article className="prose prose-invert max-w-none">
<p>💡 Här kan du lägga in brödtexten för inlägget med slug <code>{slug}</code>.</p>
<p>Detta är bara en placeholder så du ser att routingen fungerar.</p>
</article>


<div className="mt-8 flex gap-2 flex-wrap">
{categories.map((cat, i) => (
<Link key={cat} href={`/blog/${categorySlugs[i]}`} className="text-sm hover:underline">
{cat}
</Link>
))}
</div>
</main>
);
}
