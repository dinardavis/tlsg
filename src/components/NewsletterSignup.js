import React, { useState } from "react";

function NewsletterSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you'd send this to your email service
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
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
          Get the <span>Free</span><br></br> Survival Starter Kit
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
            type="text"
            name="name"
            className={`newsletter-input form-input ${
              errors.name ? "error" : ""
            }`}
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className={`newsletter-input form-input ${
              errors.email ? "error" : ""
            }`}
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
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
