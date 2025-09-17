import React from "react";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Header({ onNavigate, currentPage }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="nav-logo" onClick={() => onNavigate("home")}>
          <img src="/images/tlsg_logo.png" alt="The Last Survival Guide logo" />
        </div>
        <nav className="nav">
          <button
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === "blog" ? "active" : ""}`}
            onClick={() => onNavigate("blog")}
          >
            Blog
          </button>
          <button
            className={`nav-link ${currentPage === "youtube" ? "active" : ""}`}
            onClick={() => onNavigate("youtube")}
          >
            YouTube
          </button>
          <button
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            onClick={() => onNavigate("about")}
          >
            About
          </button>
          <button
            className={`nav-link ${
              currentPage === "survival-guide" ? "active" : ""
            }`}
            onClick={() => onNavigate("survival-guide")}
          >
            Free Survival Guide
          </button>
          <div className="nav-text">
            Follow Us:
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-link-anchor"
            >
              <FaYoutube className="nav-link nav-icon nav-yt" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-link-anchor"
            >
              <AiFillInstagram className="nav-link nav-icon nav-ig" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
