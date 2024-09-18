import { useEffect, useState } from "react";
import { postComment } from "../../../API/CommentsApi";

const CommentForm = ({ article_id, onCommentPosted }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    setLoading(true)
    setError("");
    setSuccessMessage("");


    postComment(article_id, {username: 'cooljmessy', body: comment})
    .then(() => {
        setSuccessMessage("Comment posted successfully!");
        setComment("")
        onCommentPosted();
    })
    .catch((err) => {
        console.log(err)
        setError("Failed to post comment")
    })
    .finally(() => {
        setLoading(false);
    })
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if(successMessage || error){
      const timer = setTimeout(() => {
        setSuccessMessage("")
        setError('')
      }, 3000);
      return () => clearTimeout(timer)
    }
  }, [successMessage, error])

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
    >
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-meduim text-gray-700 mb-2"
        >
          Add Comment
        </label>
        <textarea
          name="comment"
          id="comment"
          rows="4"
          className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
          value={comment}
          onChange={handleChange}
          disabled={loading}
        ></textarea>
        {error && <p className="text-red-500 text-sm mt-2" > {error} </p>}
      </div>
      <button
        type="submit"
        className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Posting.." : "Submit"}
      </button>
      {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
    </form>
  );
};

export default CommentForm;
