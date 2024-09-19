import { useEffect, useState } from "react";
import { getTopics } from "../../../API/TopicsApi";
import TopicCard from "./TopicCard";
import { Link } from "react-router-dom";

const TopicPage = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then(({ data: { topics } }) => {
        setTopics(topics);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load topics...");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Topics Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container bg-gray-200 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Topics</h1>
      <ul className="space-y-4">
        {topics.map((topic, index) => {
            return (
                <li key={index} >
            <Link to={`/topics/${topic.slug}`}>
              <TopicCard topic={topic} />
            </Link>
          </li>
            );
        })}
      </ul>
    </div>
  );
};

export default TopicPage;
