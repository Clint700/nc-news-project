const TopicCard = ({ topic }) => {
    topic.slug = topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition-transform transform hover:scale-105" >
      <h2 className="text-xl font-bold text-gray-800 mb-2">Title: {topic.slug}</h2>
      <p className="text-gray-600">Description: {topic.description}</p>
    </div>
  );
};

export default TopicCard;
