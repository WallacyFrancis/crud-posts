import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Readmore from "./pages/Readmore";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/readmore/:id" element={<Readmore />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
