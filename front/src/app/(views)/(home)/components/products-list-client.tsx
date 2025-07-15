"use client";

import React, { FC, useEffect, useState } from "react";
import ProductCard from "@/components/ui/product-card/product-card";
import { getProducts } from "@/services/products";

const ProductsListClient: FC = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const request = async () => {
      const data = await getProducts();
      setProducts(data); // [] o [...productos]
    };

    request();
  }, []);

  // EN HANDLE SUBMIT

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
      {!products?.length && <span>No hay productos para mostrar</span>}
    </div>
  );
};

export default ProductsListClient;
