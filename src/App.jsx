import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./components/navbar";
import { Search } from "./components/searchpage";
import { Start } from "./components/start";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}