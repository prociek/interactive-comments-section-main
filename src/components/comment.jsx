/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

import PlusIcon from "../assets/icon-plus.svg";
import MinusIcon from "../assets/icon-minus.svg";
import ReplyIcon from "../assets/icon-reply.svg";

import "./comment.css";

const Comment = ({ user, score, createdAt, content }) => {
  const [img, setImage] = useState("");
  useEffect(() => {
    async function loadImage() {
      const loadedImage = await import(user.image.png);
      setImage(loadedImage.default);
    }
    loadImage();
  }, [user.image.png]);
  return (
    <article className="comment">
      <header className="header">
        <img src={img} alt={user.username} />
        <h2>{user.username}</h2>
        <span>{createdAt}</span>
      </header>
      <main className="content">{content}</main>
      <footer className="footer">
        <div className="score">
          <img src={PlusIcon} alt="plus icon" />
          {score}
          <img src={MinusIcon} alt="minus icon" />
        </div>
        <button className="reply">
          <img src={ReplyIcon} alt="reply icon" />
          Reply
        </button>
      </footer>
    </article>
  );
};

export default Comment;
