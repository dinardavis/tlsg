import React, { useState } from "react";

function SurvivalGuide() {
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
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="survival-guide">
        <div className="survival-guide-container">
          <div className="survival-guide-success">
            <div className="success-icon">✓</div>
            <h2>Thank you for subscribing!</h2>
            <p>
              Check your email for the Bangkok Relocation Starter Kit download
              link.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "" });
              }}
            >
              Get Another Kit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="survival-guide">
      <div className="survival-guide-container">
        <div className="survival-guide-content">
          <div className="survival-guide-left">
            <div className="survival-guide-header">
              <h1>
                Practical guides for real-world moves
              </h1>
            </div>

            <div className="survival-guide-offer">
              <div className="offer-badge">This month's freebie:</div>
              <h2>Bangkok Relocation<br></br> Starter Kit</h2>

              <ul className="offer-features">
                <li>Visa pathways explained in plain English</li>
                <li>Where to find condos that balance comfort + cost</li>
                <li>A budgeting template that tracks real monthly burn</li>
                <li>Travel tech & transit hacks for landing on your feet</li>
              </ul>
            </div>

            <form className="survival-guide-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? "error" : ""}`}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? "error" : ""}`}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary survival-guide-cta"
              >
                Get the Free Kit Now
              </button>
            </form>
          </div>

          <div className="survival-guide-right">
            <div className="image-grid">
              <div className="image-row">
                <div className="image-item portrait">
                  <img src="/images/beach.png" alt="Beach scene" />
                </div>
                <div className="image-item portrait">
                  <img src="/images/monument.png" alt="Monument" />
                </div>
              </div>
              <div className="image-row">
                <div className="image-item landscape">
                  <img
                    src="/images/emquartier.png"
                    alt="Emquartier shopping center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurvivalGuide;

