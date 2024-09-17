import { useParams } from "react-router-dom";
import { getArticleByID } from "../../../API/ArticlesApi";
import { useEffect, useState } from "react";
import VoteComponent from "../Vote";
import CommentList from "../Comment/CommentList";

const ArticleForm = () => {
  const { article_id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleByID(article_id)
      .then(({ data: { article } }) => {
        setSelectedArticle(article);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <p>Article Loading...</p>;
  }
  return (
    <section className="max-w-screen-xl mx-auto rounded overflow-hidden shadow-lg bg-white p-4 m-4 transition-transform transform px-4 py-8">
      <img
        className="w-full h-96 object-cover rounded-lg mb-6"
        src={selectedArticle.article_img_url}
        alt={selectedArticle.title}
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {selectedArticle.title}
        </h1>
        <p className="text-sm text-gray-600">
          By {selectedArticle.author} | Topic: {selectedArticle.topic}
        </p>
        <p className="text-sm text-gray-500">
          Published on{" "}
          {new Date(selectedArticle.created_at).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-700">{selectedArticle.body}</p>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold mt-8">Comments</h2>
          <CommentList article_id={selectedArticle.article_id} />
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <p className="text-lg font-semibold text-gray-700">
            Comments: {selectedArticle.comment_count}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          Votes:
          {<VoteComponent initialVotes={selectedArticle.votes} />}
        </div>
      </div>
    </section>
  );
};

export default ArticleForm;
