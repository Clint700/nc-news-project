import { useSearchParams } from "react-router-dom";


const Query = ({ onQueryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSearchParams({ sort_by: newSortBy, order });
    onQueryChange(newSortBy, order);
  };

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setSearchParams({ sort_by: sortBy, order: newOrder });
    onQueryChange(sortBy, newOrder);
  };


  return (
    <div className="flex space-x-4">
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="px-4 py-2 border rounded-lg bg-gray-200"
      >
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
      </select>
      <select
        value={order}
        onChange={handleOrderChange}
        className="px-4 py-2 border rounded-lg bg-gray-200"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default Query;
