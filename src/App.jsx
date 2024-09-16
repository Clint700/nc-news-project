import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header";
import ArticlePage from "./Components/Article/ArticlePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;