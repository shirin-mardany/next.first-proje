import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
// ________________________________________
const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.in/api/products');
                const data = await res.json();
                const products = data.products;
                return products;
            } catch (error) {
                console.log('eror',error);
            }
        }
// ___________________________________________________
export default async function Products() {
    const products = await fetchData();
    console.log(products);
      //conditional rendering
      if (!products || products.length === 0) {
        return notFound();
      }

    // Map through the products and render them
    const item = products.map((product) => (
      <li key={product.id}>
        <Link
          href={`/products/${product.id}/${product.title.replaceAll(" ", "-")}`}
        >
          {product.title.slice(0, 50) + "..."}
        </Link>
      </li>
    ));
  return (
    <div>
      <ul>{item}</ul>
    </div>
  )
}
