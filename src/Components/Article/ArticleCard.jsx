const ArticleCard = ({ article }) => {
    return (
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
          <p className="text-gray-700 text-base">
            <strong>Votes:</strong> {article.votes}
          </p>
        </div>
      </section>
    );
  };

  //max-w-screen-xl mx-auto px-4 py-8
  
  export default ArticleCard;