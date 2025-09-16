import React, { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real app, you'd send this to your email service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setError("");
  };

  if (isSubmitted) {
    return (
      <div className="newsletter-signup">
        <div className="newsletter-success">
          <h3>Welcome aboard!</h3>
          <p>
            Check your email for the Bangkok Relocation Survival Kit. You'll
            also get future tools like country cheat sheets, mini survival
            drills, and budgeting templates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="newsletter-signup">
      <div className="newsletter-header">
        <h2>
          Get the <span>Free</span> Survival Starter Kit
        </h2>
        <p>
          Join the newsletter and grab the Bangkok Relocation Survival Kit—plus
          future tools like country cheat sheets, mini survival drills, and
          budgeting templates.
        </p>
      </div>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className={`newsletter-input form-input ${error ? "error" : ""}`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          Get the Starter Kit
        </button>
      </form>

      <p className="newsletter-note">
        Zero spam. Occasional dark humor.<br></br>Unsubscribe anytime.
      </p>
    </div>
  );
}

export default NewsletterSignup;
