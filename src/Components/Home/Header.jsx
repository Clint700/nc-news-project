import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="max-w-scree-xl mx-auto flex overflow-auto items-center justify-around bg-gray-300 p-4 m-4 transform px-4 py-4">
      <button type="button" className="bg-gray-200">
        Menu
      </button>
      <input
        type="button"
        className="text-white hover:bg-blue-700 px-3 py-2 rounded"
        value="search"
      />
      <Link to="/" className="text-gray-700">
        <button type="button" className="bg-gray-200">
          Home
        </button>
      </Link>
      <button type="button" className="bg-gray-200">
        Search
      </button>
      <button type="button" className="bg-gray-200">
        Articles
      </button>
      <button type="button" className="bg-gray-200">
        Profile
      </button>
      <button type="button" className="bg-gray-200">
        Settings
      </button>
    </nav>
  );
};

export default Header;
