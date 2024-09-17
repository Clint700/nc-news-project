import { Link } from "react-router-dom";
import VoteComponent from "../Vote";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="max-w-lg mx-auto rounded overflow-hidden shadow-lg bg-white p-4 m-4 transition-transform transform hover:scale-105 max-w-screen-xl mx-auto px-4 py-8">
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
          <div className="mt-4 flex items-center space-x-4">
            <p className="text-lg font-semibold text-gray-700">
              Comments: {article.comment_count}
            </p>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <p className="text-lg font-semibold text-gray-700">
              Votes:
              {<VoteComponent initialVotes={article.votes} votes="Votes" />}
            </p>
          </div>
        </div>
      </section>
    </Link>
  );
};

//max-w-screen-xl mx-auto px-4 py-8

export default ArticleCard;
