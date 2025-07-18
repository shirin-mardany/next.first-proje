"use client";
// CSR => use HOOK and event and...
import { notFound } from "next/navigation";
import React, { useState, useEffect, use } from "react";
// ______________________________________________________________
export default function PostDetails({ params }) {
  const { postId } = use(params);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// -----------------------------------------
  useEffect(() => {
    const fetchPost = (async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        // Check if the response is ok (status in the range 200-299)
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setPost(data);
        console.log(post);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(error.message);
        notFound(); // Use notFound from next/navigation to handle 404
      } finally {
        setLoading(false);
      }
    }
  )();
  }, [postId]);
// --------------------------------------------------------
  // conditional rendering
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return notFound(); // If post is null, show 404
  

  // console.log(params);
  // ------------------------------------------------------
  return (
    <div>
      {/* Render post details */}
      <h1>Post Details</h1>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
     
    </div>
  );
}
