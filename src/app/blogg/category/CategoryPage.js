import Link from "next/link";
import Image from "next/image";
import { posts, getCategorySlugs, getCategoryList } from "../../data/posts";


function BlogCard({ post, categorySlug }) {
return (
<div className="bg-[#121212] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
<Link href={`/blog/${categorySlug}/${post.slug}`} className="block">
<div className="relative w-full h-48">
<Image
src={post.bild || "/photos/default.png"}
alt={post.title}
fill
className="object-cover"
/>
</div>
<div className="py-4 px-4">
<h2 className="text-xl text-[#F5F5F5] hover:text-[#3B429F] transition">{post.title}</h2>
</div>
</Link>


<div className="flex gap-2 px-4 pb-4 flex-wrap">
{getCategoryList(post).map((cat, i) => (
<Link key={cat} href={`/blog/${getCategorySlugs(post)[i]}`} className="text-sm hover:underline">
{cat}
</Link>
))}
</div>
</div>
);
}


export default function CategoryPage({ params }) {
const { seo } = params; 


const filtered = posts.filter((post) => getCategorySlugs(post).includes(category));


return (
<main className="p-8 mx-auto">
<h1 className="pb-8 text-2xl font-bold">Kategori: {category.toUpperCase()}</h1>


{filtered.length === 0 ? (
<p>Inga inlägg hittades i denna kategori.</p>
) : (
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{filtered.map((post) => (
<BlogCard key={post.slug} post={post} categorySlug={category} />
))}
</div>
)}
</main>
);
}
