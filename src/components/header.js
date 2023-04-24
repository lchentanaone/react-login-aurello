import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Contact from "./Contact";

const Header = () => {
  return (
    <div class="fixed-header">
      <div className="header">
        <Router>
          <ul class="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {/* <li>
              <a href="/blog">Timeline</a>
            </li> */}
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found etc</h2>
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Header;
