import React, { useState } from "react";
import { voteOnArticle } from "../../../API/ArticlesApi";

const VoteComponent = ({ initialVotes, article_id }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = (change) => {
    setVotes((prevVotes) => prevVotes + change)
    setError(null)

    voteOnArticle(article_id, change)
    .catch((err) => {
      setVotes((prevVotes) => prevVotes - change);
      setError("Failed to save vote...")
    })
  }

  const handleUpvote = () => {
    if (!hasUpvoted && !hasDownvoted) {
      handleVote(1);
      setHasUpvoted(true);
    } else if (hasDownvoted) {
      handleVote(1);
      setHasDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (!hasUpvoted && !hasDownvoted) {
      handleVote(- 1);
      setHasDownvoted(true);
    } else if (hasUpvoted) {
      handleVote(- 1);
      setHasUpvoted(false);
    }
  };


  return (
    <div className="flex items-center space-x-4">
      <button
        className={`${
          hasUpvoted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-700"
        } text-white px-3 py-1 rounded`}
        onClick={handleUpvote}
        disabled={hasUpvoted}
        aria-label="Upvote"
      >
        👍
      </button>

      <span className="text-xl font-bold text-gray-700">{votes}</span>

      <button
        className={`${
          hasDownvoted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-700"
        } text-white px-3 py-1 rounded`}
        onClick={handleDownvote}
        disabled={hasDownvoted}
        aria-label="Downvote"
      >
        👎
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default VoteComponent;