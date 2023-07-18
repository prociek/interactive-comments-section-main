/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

import PlusIcon from "../assets/icon-plus.svg";
import MinusIcon from "../assets/icon-minus.svg";
import ReplyIcon from "../assets/icon-reply.svg";

import "./comment.css";

const Comment = ({
  user,
  score: initialScore,
  createdAt,
  content,
  isReply,
}) => {
  const [img, setImage] = useState("");
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    async function loadImage() {
      const loadedImage = await import(user.image.png);
      setImage(loadedImage.default);
    }
    loadImage();
  }, [user.image.png]);

  function handleScore(indicator) {
    if (indicator === "plus") setScore((score) => score + 1);
    if (indicator === "minus") setScore((score) => score - 1);
  }

  return (
    <article className={`comment ${isReply ? "isReply" : ""}`}>
      <header className="header">
        <img src={img} alt={user.username} />
        <h2>{user.username}</h2>
        <span>{createdAt}</span>
      </header>
      <main className="content">{content}</main>
      <footer className="footer">
        <div className="score">
          <button onClick={() => handleScore("plus")}>
            <img src={PlusIcon} alt="plus icon" />
          </button>
          {score}
          <button onClick={() => handleScore("minus")}>
            <img src={MinusIcon} alt="minus icon" />
          </button>
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
