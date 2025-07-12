import React, { FC } from "react";
import ProductCard from "@/components/ui/product-card";


interface productsListProps {
products: IProduct[];
}

const ProductsList: FC<productsListProps> = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
      {!products?.length && <span>No hay productos para mostrar</span>}
    </div>
  );
};

export default ProductsList;

