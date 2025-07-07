import ProductsList from "./components/products-list";

export default function Home() {
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
        <h2>Productos Destacados 🎶</h2>
      <ProductsList />
      </section>
    </div>
  );
}
