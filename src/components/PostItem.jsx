import React from "react";
import classes from "./UI/button/MyButton.module.css";

export default function PostItem({ post, onClick, number }) {
  return (
    <div className="post">
      <div className="post__content">
        <div>
          {number + 1}.{post.title}
        </div>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => onClick(post.id)} className={classes.myBtn}>
          Удалить
        </button>
      </div>
    </div>
  );
}
