import React, { useState } from "react";

const VoteComponent = ({ initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);

  const handleUpvote = () => {
    if (!hasUpvoted && !hasDownvoted) {
      setVotes(votes + 1);
      setHasUpvoted(true);
    } else if (hasDownvoted) {
      setVotes(votes + 1);
      setHasDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (!hasUpvoted && !hasDownvoted) {
      setVotes(votes - 1);
      setHasDownvoted(true);
    } else if (hasUpvoted) {
      setVotes(votes - 1);
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
    </div>
  );
};

export default VoteComponent;
