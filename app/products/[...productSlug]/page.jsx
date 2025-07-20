import { notFound } from "next/navigation";
import React from "react";
// _____________________________________________________
const fetchData = async (productSlug) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.in/api/products/${productSlug[0]}}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(object)
  }
};
export default async function ProductDetails({ params }) {
    const { productSlug } =await params;
    console.log('before fetchData ',productSlug);
    const products = await fetchData(productSlug);
     console.log("beffore if for products", products);

   //conditional rendering
   if (!products || products.length === 0) {
     return notFound();
  }
  const product = products.product;
 console.log("after if for products", product);
    return (
      <>
        <di className='contaner'>
          <h2>{product.title}</h2>
          <img src={product.image} />
          <h3>{product.price}</h3>
        </di>
      </>
    ); 
    
}