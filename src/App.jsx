import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );


}

export default App
