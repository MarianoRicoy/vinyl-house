import React from "react";
import ProductCard from "@/components/ui/product-card";
import { products } from "@/helpers/products";

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
