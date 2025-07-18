import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
// -------------------------------------------------------------
//fetch data from the server
const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
// ____________________________________________________________________
export default async function Posts() {
  // Fetch data from the server
  // This will run on the server side
  const posts = await fetchData();

  //conditional rendering
  if (!posts || posts.length === 0) {
    return notFound();
  }

  // Map through the posts and render them
  const items = posts.map((post) => (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));
// -------------------------------------------------------------------------
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
