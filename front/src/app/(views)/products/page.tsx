import { categories } from "@/helpers/categories";
import React from "react";
import ProductsList from "../(home)/components/products-list";
import { getProductsByCategory } from "@/services/products";
import { routes } from "@/routes";
import Link from "next/link";
import clsx from "clsx";

const ProductsPage = async (
{
    searchParams,
}: {
    searchParams?: SearchParams<{ category: string }>;
}
) => {
const { category = undefined } = (await searchParams) || {};
console.log("Category:", category);

const products = await getProductsByCategory(category || "all");

return (
    <div style={{ display: "flex", gap: "2rem" }}>
    {/* Categorías a la izquierda */}
    <aside style={{ minWidth: "200px" }}>
    <h2 className="font-black mb-3">Categorías</h2>
    <ul style={{ listStyle: "none", padding: 0 }}>
    <li>
    <Link href={routes.products + "?category=all"}>
    <span 
        className={clsx({
    "font-bold":
    'all' === category,
})}
    >Ver todos</span>
    </Link>
    </li>
    {categories.map((currentCategory) => (
    <li key={currentCategory.id}>
    <Link href={`${routes.products}?category=${currentCategory.id}`}>
    <span
    className={clsx({
    "font-bold":
    currentCategory.id.toLocaleString() === 
    category,
})}
    >
    {currentCategory.name}
    </span>
    </Link>
    </li>
    ))}
    </ul>
    </aside>
    {/* Productos a la derecha */}
    <main style={{ flex: 1 }}>
    <h1 className="font-black m-3">Productos</h1>
    <ProductsList products={products} />
    </main>
    </div>
);
};

export default ProductsPage;