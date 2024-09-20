import { deleteComment } from "../../../API/CommentsApi";
import { useState } from "react";
import CommentVoteComponent from "../Vote/CommentVote";

const CommentCard = ({ comment, onDelete }) => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    deleteComment(comment.comment_id)
      .then(() => {
        setMessage("Comment deleted successfully");
        onDelete();
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error deleting comment");
      });
  };

  return (
    <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 my-6 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 text-lg font-semibold">
          {comment.author}
        </h2>
        <p className="text-sm text-gray-500">
          {new Date(comment.created_at).toLocaleDateString()}
        </p>
      </div>
      <p className="text-base text-gray-800 mt-4">{comment.body}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CommentVoteComponent initialVotes={comment.votes} />
        </div>

        <div className="flex flex-col items-end space-y-2">
          <button
            to="#reply"
            className="text-sm text-blue-600 hover:underline hover:text-blue-800 bg-inherit"
          >
            Reply
          </button>
          {comment.author === "cooljmessy" && (
            <button
              t0="#delete"
              className="text-sm hover:text-red-600 text-red-600 hover:underline hover:bg-inherit bg-inherit"
              onClick={handleClick}
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {message && <p className="text-sm mt-2 text-gray-500">{message}</p>}
    </section>
  );
};

export default CommentCard;
