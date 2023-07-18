import { useEffect, useState } from "react";
import Comment from "./comment";

import "./commentList.css";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    async function fetchComments() {
      try {
        const response = await fetch("../data.json");

        if (!response.ok) throw new Error("Something went wrong!!!");

        const data = await response.json();
        setComments(data.comments);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error(error);
      }
    }
    fetchComments();
  }, []);

  let content = null;
  if (loading) content = "Loading...";
  else if (error) content = "Something went wrong!!!";
  else if (comments.length < 1) content = "No comments to display!";
  else
    content = comments.map((comment) => {
      let commentBlock = [<Comment key={comment.id} {...comment} />];

      if (comment.replies.lenght < 1) return;

      // render replies
      comment.replies.forEach((reply) =>
        commentBlock.push(<Comment key={reply.id} isReply={true} {...reply} />)
      );

      return commentBlock;
    });

  return <section className="comments">{content}</section>;
};

export default CommentsList;
