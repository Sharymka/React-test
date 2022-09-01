import { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java", body: "Java - Язык программирования" },
    { id: 2, title: "Ruby", body: "Ruby - Язык программирования" },
    { id: 3, title: "JS", body: "JS - Язык программирования" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    console.log(id);
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect />

      {posts.length ? (
        <PostList onClick={deletePost} posts={posts} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}> Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
