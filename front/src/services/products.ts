'use server'

import { axiosApiBack } from "./utils";


  export const getProducts = async () => {
  try{
const res = await axiosApiBack.get('/products')
//const res = null

if (!res.data || !Array.isArray(res.data)){
  console.warn('invalid products data format', res.data)
  return[];
} 
return res.data
  }catch(e) {
if (e instanceof Error) {
console.warn("error fetching products list", e?.message)
  };

    return[];
  };
};

  export const getProductById = async (id:string): Promise<IProduct | null> => {
  try{
const res = await axiosApiBack.get('/products/' + id)
//const res = null

if (!res.data){
  console.warn('invalid product data format', res.data);
  return null;
} 
return res.data
  }catch(e){
if (e instanceof Error)
console.warn("error fetching product", e?.message)
  };
  return null;
};

export const getProductsByCategory = async (
  categoryId: string
): Promise<IProduct[]> => {
  try {
    const res = await axiosApiBack.get("/products/category/" + categoryId);
    // const res = null

    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Invalidad products by category data format", res.data);
      return [];
    }

    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      console.warn("Error fetching products by category", e?.message);
    }

    return [];
  }
};
