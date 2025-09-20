import React from "react";

function NotFound({ onNavigate }) {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-header">
            <div className="not-found-number">404</div>
            <h1>Page Not Found</h1>
            <p>
              Oops! The page you're looking for seems to have wandered off into
              the digital wilderness. Don't worry, even the best explorers
              sometimes take a wrong turn.
            </p>
          </div>

          <div className="not-found-actions">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate("home")}
            >
              Return Home
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>

          <div className="not-found-suggestions">
            <h3>Popular destinations:</h3>
            <div className="suggestion-links">
              <button
                className="suggestion-link"
                onClick={() => onNavigate("blog")}
              >
                Blog
              </button>
              <button
                className="suggestion-link"
                onClick={() => onNavigate("youtube")}
              >
                YouTube
              </button>
              <button
                className="suggestion-link"
                onClick={() => onNavigate("about")}
              >
                About
              </button>
              <button
                className="suggestion-link"
                onClick={() => onNavigate("survival-guide")}
              >
                Survival Guide
              </button>
            </div>
          </div>

          <div className="not-found-help">
            <p>
              Still can't find what you're looking for?{" "}
              <a
                href="mailto:hello@thelastsurvivalguide.com"
                className="help-link"
              >
                Drop us a line
              </a>{" "}
              and we'll help you navigate back to civilization.
            </p>
          </div>
        </div>

        <div className="not-found-visual">
          <div className="lost-traveler">
            <div className="traveler-icon">🧳</div>
            <div className="traveler-text">Lost but not defeated!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

