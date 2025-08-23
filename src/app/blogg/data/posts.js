export const posts = [
{
title: "Så optimera din hemsida med IA",
slug: "sa-optimera-din-hemsida-med-ia",
category: "SEO",
bild: "/photos/SEO.png",
},
{
title: "Så bygger du WordPress-hemsidor",
slug: "sa-bygger-du-wordpress-hemsidor",
category: "Hemsida, SEO",
bild: "/photos/SEO.png",
},
];


export const toSlug = (str) =>
str
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "") // ta bort diakritiska tecken
.replace(/[^a-z0-9]+/g, "-")
.replace(/(^-|-$)/g, "");


export const getCategoryList = (post) =>
post.category.split(",").map((s) => s.trim());


export const getCategorySlugs = (post) => getCategoryList(post).map(toSlug);