import React, { useState, useRef } from "react";
import {
  FaDollarSign,
  FaPiggyBank,
  FaChartLine,
  FaExclamationTriangle,
  FaHome,
} from "react-icons/fa";

function ResourcesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const resources = [
    {
      id: 1,
      title: "How to Build a Relocation Budget That Actually Works",
      description:
        "Step-by-step system for mapping fixed costs (rent, visa, insurance), variable costs (food, transport), and hidden expenses. Includes a sample monthly breakdown.",
      icon: <FaDollarSign style={{ color: "var(--primary)" }} />,
      downloadText: "Download Budget Guide",
    },
    {
      id: 2,
      title:
        "How to Save $10–15K for a Move Abroad (Without Going Broke at Home)",
      description:
        'Concrete actions: cutting recurring bills, side-income strategies, and building a "move fund" that stays untouched.',
      icon: <FaPiggyBank style={{ color: "var(--primary)" }} />,
      downloadText: "Download Savings Guide",
    },
    {
      id: 3,
      title: "How to Calculate Your Relocation Runway",
      description:
        'Walkthrough with formulas: burn rate, fixed vs. flexible costs, runway extensions. Includes examples like "every $500 adds X weeks."',
      icon: <FaChartLine style={{ color: "var(--primary)" }} />,
      downloadText: "Download Runway Calculator",
    },
    {
      id: 4,
      title: "How to Avoid the Top 7 Financial Pitfalls When Relocating",
      description:
        "Covers ATM/FX fees, bad leases, overpaying for insurance, scams, emergency fund gaps, and forgetting debt obligations.",
      icon: <FaExclamationTriangle style={{ color: "var(--primary)" }} />,
      downloadText: "Download Pitfalls Guide",
    },
    {
      id: 5,
      title: "How to Find an Apartment Abroad Without Losing Your Deposit",
      description:
        "Steps: where to search, how to verify legitimacy, negotiating terms, what to look out for in contracts, and red flags to walk away from.",
      icon: <FaHome style={{ color: "var(--primary)" }} />,
      downloadText: "Download Apartment Guide",
    },
  ];

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : resources.length - 1;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < resources.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex);
  };

  const scrollToItem = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].offsetWidth + 24; // 24px gap
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handleDownload = (resource) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading: ${resource.title}`);
    // You could add a toast notification or modal here
  };

  return (
    <section className="resources-carousel">
      <div className="resources-carousel-container">
        <div className="resources-header">
          <h2>Free Downloadable Resources</h2>
          <p>
            Practical guides to help you plan and execute your move abroad
            without the financial stress.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={handlePrevious}
            aria-label="Previous resource"
          >
            ‹
          </button>

          <div className="carousel-container" ref={carouselRef}>
            {resources.map((resource, index) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">{resource.icon}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <button
                  className="btn btn-primary resource-download-btn"
                  onClick={() => handleDownload(resource)}
                >
                  {resource.downloadText}
                </button>
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={handleNext}
            aria-label="Next resource"
          >
            ›
          </button>
        </div>

        {/* <div className="carousel-indicators">
          {resources.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                scrollToItem(index);
              }}
              aria-label={`Go to resource ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default ResourcesCarousel;
