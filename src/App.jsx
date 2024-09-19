import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header";
import ArticlePage from "./Components/Article/ArticlePage";
import ArticleForm from "./Components/Article/ArticleForm";
import CommentList from "./Components/Comment/CommentList";
import TopicPage from "./Components/Topic/TopicPage";
import TopicArticles from "./Components/Topic/TopicArticles";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/articles/:article_id" element={<ArticleForm />} />
        <Route
          path="/articles/:article_id/comments"
          element={<CommentList />}
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/topics" element={<TopicPage />} />
        <Route path="/topics/:topic_slug" element={<TopicArticles />} />
      </Routes>
    </Router>
  );
}

export default App;
