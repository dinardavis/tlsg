import React, { useState, useEffect } from "react";
import NewsletterSignup from "./NewsletterSignup";
import BlogTeaser from "./BlogTeaser";
import YouTubeEmbed from "./YouTubeEmbed";
import ResourcesCarousel from "./ResourcesCarousel";
import IconPill from "./IconPill";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { TRAILER_VIDEO_ID, CHANNEL_HANDLE_URL } from "../utils/youtubeData";

function HomePage({ onPostClick, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger initial animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`homepage ${isVisible ? "visible" : ""}`}>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              The Guide To Building The Life You Want<br></br>
              {/* <span>(without wrecking it)</span> */}
            </h1>
            <div className="hero-media hero-media-img">
              <img
                src="/images/me_peace.jpg"
                alt="Dinar at the airport"
                className="hero-media-img"
              />
              <div className="about-media-tag">
                <IconPill icon={FaPersonWalkingLuggage}>
                  On the road again!
                </IconPill>
              </div>
            </div>
            <p className="hero-subtitle">
              Get the advice, tips, hacks that you've been looking for to help
              you create the life of your dreams. TLSG shares real world
              experience, useful playbooks, and the survival mindset you need to
              relocate, change careers, or just enjoy where you are a bit more.
            </p>
          </div>
          <div className="hero-right">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <section className="youtube-preview scroll-animate">
        <div className="youtube-preview-container">
          <div className="youtube-preview-content">
            <h2>Follow the field reports on YouTube</h2>
            <p>
              Practical breakdowns on moving abroad, surviving the first 90
              days, and budgeting for a life you can actually enjoy. Reporting
              live from Bangkok… for now.
            </p>
            <div className="youtube-ctas">
              <button
                className="btn btn-primary"
                onClick={() =>
                  onNavigate?.("youtube") ||
                  (window.location.hash = "#/youtube")
                }
              >
                Watch the trailer
              </button>
              <a
                href={CHANNEL_HANDLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Visit the channel on YouTube (opens in new tab)"
              >
                Visit the channel
              </a>
            </div>
          </div>
          <div className="youtube-preview-video">
            <YouTubeEmbed
              videoId={TRAILER_VIDEO_ID}
              title="Seat Of My Plans — channel trailer"
              caption="Seat Of My Plans — channel trailer"
            />
          </div>
        </div>
      </section>

      {/* <section className="about-preview scroll-animate">
        <div className="about-preview-container">
          <img
            className="about-image"
            src="/images/plane-wing.png"
            alt="Airplane wing against blue sky"
          />

          <div className="about-content">
            <h2>What You'll Find Here</h2>
            <p>
              A home base for people who want a bigger life without lighting it
              on fire. I share real costs, doable steps, and the kind of mindset
              shifts that survive jet lag. It's not about "finding yourself" on
              a mountaintop. It's about building a life you actually like—on
              purpose.
            </p>
          </div>
        </div>
      </section> */}

      <section className="resources-preview scroll-animate">
        <ResourcesCarousel />
      </section>

      <section className="blog-preview scroll-animate">
        <div className="blog-preview-container">
          <h2>Blog Highlights</h2>
          <BlogTeaser onPostClick={onPostClick} onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
