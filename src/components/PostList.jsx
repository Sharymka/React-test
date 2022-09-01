import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, onClick }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem number={index} onClick={onClick} post={post} key={post.id} />
      ))}
    </div>
  );
}
