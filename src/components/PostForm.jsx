import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    if (post.title !== "" && post.body !== "") {
      create({ ...post, id: Date.now() });
    }

    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <MyInput
        value={post.body}
        onChange={(e) => {
          setPost({ ...post, body: e.target.value });
        }}
      />
      <MyButton onClick={addNewPost}> Добавить пост</MyButton>
    </form>
  );
}
