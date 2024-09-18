import { useEffect, useState } from "react";
import { getArticleComments } from "../../../API/CommentsApi";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id, limit, refresh }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleComments(article_id)
      .then(({ data: { comments } }) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load comments.");
        setLoading(false);
      });
  }, [article_id, refresh]);

  if (loading) {
    return <p>Comments Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const displayedComments = limit ? comments.slice(0, limit) : comments;

  return (
    <div className="mt-8 space-y-4">
      {displayedComments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        displayedComments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </div>
  );
};

export default CommentList;
