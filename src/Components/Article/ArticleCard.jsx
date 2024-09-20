import { Link } from "react-router-dom";
import VoteComponent from "../Vote";
import CommentList from "../Comment/CommentList";

const ArticleCard = ({ article }) => {
  return (
    <section className="max-w-screen-xl mx-auto rounded overflow-hidden shadow-lg bg-white p-4 m-4 transition-transform transform hover:scale-20 px-4 py-8">
      <Link to={`/articles/${article.article_id}`}>
        <img
          className="w-full h-64 sm:h-64 md:h-80 lg:h-96 object-cover rounded"
          src={article.article_img_url}
          alt={article.title}
        />
        <div className="px-6 py-4">
          <h2 className="text-gray-700 text-xl font-bold mb-2">
            Author: {article.author}
          </h2>
          <h3 className="text-gray-500 text-sm mb-2">Topic: {article.topic}</h3>
          <p className="text-gray-700 text-base">
            <strong>Title:</strong> {article.title}
          </p>
        </div>
      </Link>
      <div className="mt-4 flex items-center space-x-4 text-lg font-semibold text-gray-700">
        <div className="text-lg font-semibold text-gray-700">
          Votes:
          {<VoteComponent initialVotes={article.votes} article_id={article.article_id}/>}
        </div>
      </div>
      <div className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold mt-8">Comments</h2>
        Comments: {article.comment_count}
        <CommentList article_id={article.article_id} limit={2} />
        <div className="flex justify-between w-full">
          <Link to={`/articles/${article.article_id}`}>
            <button
              type="button"
              className="bg-gray-100 text-gray-700 transition rounded"
            >
              More comments...
            </button>
          </Link>
          <Link to={`/articles/${article.article_id}`}>
            <button
              type="button"
              className="bg-gray-100 text-gray-700 items-end ml-auto transition rounded"
            >
              Add comments
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
