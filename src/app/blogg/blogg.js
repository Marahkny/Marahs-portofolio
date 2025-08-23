"use client";


import Link from "next/link";
import Image from "next/image";
import { posts, getCategoryList, getCategorySlugs } from "../blogg/data/posts";


function BlogCard({ post }) {
const categories = getCategoryList(post);
const categorySlugs = getCategorySlugs(post);
const primaryCategorySlug = categorySlugs[0];


return (
<div className="bg-[#121212] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
{/* Bild + titel länkar till posten (primär kategori + slug) */}
<Link href={`/blog/${primaryCategorySlug}/${post.slug}`} className="block">
<div className="relative w-full h-48">
<Image
src={post.bild || "/photos/default.png"}
alt={post.title || "Bloggpost bild"}
fill
className="object-cover"
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
priority
/>
</div>
<div className="py-4 px-4">
<h2 className="text-2xl text-[#F5F5F5] hover:text-[#3B429F] transition">
{post.title}
</h2>
</div>
</Link>


{/* Kategorilänkar */}
<div className="flex gap-2 px-4 pb-4 flex-wrap">
{categories.map((cat, i) => (
<Link key={cat} href={`/blog/${categorySlugs[i]}`} className="text-sm hover:underline">
{cat}
</Link>
))}
</div>
</div>
);
}


export default function Blog() {
return (
<main className="p-8 mx-auto">
<h1 className="pb-8 text-2xl font-bold">Blogg</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{posts.map((post) => (
<BlogCard key={post.slug} post={post} />
))}
</div>
</main>
);
}