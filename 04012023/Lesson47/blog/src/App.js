import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="55px" />
        <ul className="App-menue">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about-us">
            <li>About</li>
          </Link>
          <Link to="contact-us">
            <li>Contact</li>
          </Link>
        </ul>
        <h1>My blog!</h1>
      </header>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="post/:postId" element={<Post />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
          <Route path="" element={<Home />} />
        </Routes>
      </div>
      <footer className="App-footer">
        <p>Created by me, © 2023</p>
      </footer>
    </div>
  );
}

export default App;
