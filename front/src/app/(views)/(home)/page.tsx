
import { getProducts } from "@/services/products";
import ProductsList from "./components/products-list";

const getData = async () => {
const products = await getProducts();
const categories: unknown[] = [];

  return {
    products,
    categories
  }
}

export default async function Home() {
  const {products, categories} = await getData();

return (
    <div>
      <section className="w-full h-96 flex items-center justify-center bg-gray-100 mb-8">
        <img
          src="https://vinylmoon.co/cdn/shop/files/Alumni_vinyl_header.jpg?v=1719489603"
          alt="Hero"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </section>
      <section>
        <h2 className="text-center font-semibold text-lg mb-4">Productos Destacados 🎶</h2>
      <ProductsList products={products} />
      </section>
    </div>
);
}
