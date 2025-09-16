import React, { useEffect, useState } from "react";
import {
  FiBookOpen,
  FiMapPin,
  FiFilm,
  FiMail,
  FiClock,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";
import { TbPigMoney } from "react-icons/tb";
import { PiCheers } from "react-icons/pi";
import { BsFillLuggageFill } from "react-icons/bs";
import { LuIceCreamBowl } from "react-icons/lu";
import IconPill from "./IconPill";

function AboutEyebrow({ children }) {
  return <p className="about-eyebrow">{children}</p>;
}

function AboutSectionHeader({ eyebrow, title, lead }) {
  return (
    <header className="about-section-header">
      {eyebrow && <AboutEyebrow>{eyebrow}</AboutEyebrow>}
      <h2 className="about-section-title">{title}</h2>
      {lead && <p className="about-section-lead">{lead}</p>}
    </header>
  );
}

function AboutCard({ icon: Icon, number, title, children, className = "" }) {
  return (
    <article className={`${className}`}>
      {number && <p className="about-card-number">{number}</p>}

      <div>
        {Icon && (
          <div className="about-card-icon" aria-hidden="true">
            <Icon size={22} />
          </div>
        )}
        {title && <p className="about-card-title">{title}</p>}
        <div className="about-card-body">{children}</div>
      </div>
    </article>
  );
}



export default function About() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document
      .querySelectorAll(".about-section")
      .forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-section about-hero">
        <div className="about-section-content about-hero-inner">
          <div className="about-hero-copy">
            <p className="about-eyebrow">About</p>
            <h1 className="about-hero-title">The guy behind </h1>
            <img
              src="/images/tlsg_logo.png"
              alt="The Last Survival Guide"
              className="about-hero-logo"
            />
            <p className="about-hero-lead">
              Practical survival lessons for building a life you like.
            </p>
          </div>

          <div className="about-hero-media">
            <div className="about-media">
              <img
                src="/images/me_cheers.jpg"
                alt="Dinar Bangkok"
                className="about-media-img"
              />
              <div className="about-media-tag">
                <IconPill icon={PiCheers}>Cheers from Bangkok!</IconPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-section about-story about-section--white">
        <div className="about-section-content about-split">
          <div className="about-col">
            <div className="about-media the-story-img">
              <img
                src="/images/tlsg_map.png"
                alt="Dot matrix map"
                className="about-media-img "
              />
              <div className="about-media-tag">
                <IconPill icon={BsFillLuggageFill}>
                  Some Places I've Lived
                </IconPill>
              </div>
            </div>
          </div>

          <div className="about-col">
            <AboutSectionHeader
              eyebrow="The story"
              title="I'm Dinar."
              lead="Born in Hiroshima, raised in California, lived in 11 countries. In 2022, I left for what was supposed to be a short trip. Two years later, I'm still at it—with more survival lessons than souvenirs."
            />
            <div className="about-prose">
              <p>
                I try things, show the work, and keep what holds up in real
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Features */}
      <section className="about-section about-mission about-tint-peach">
        <div className="about-section-content">
          <AboutSectionHeader
            eyebrow="The mission"
            title="TLSG is about applied survival"
            lead="Practical moves, not abstract advice. I share what I test so you skip the potholes."
          />
          <blockquote className="about-pull-quote">
            I share the process so you skip a few potholes and get where you're
            going sooner.
          </blockquote>

          <div className="about-feature-grid">
            <AboutCard
              icon={FiBookOpen}
              title="Relocation playbooks"
              className="about-feature-card"
            >
              <p>step-by-step systems you can repeat.</p>
            </AboutCard>
            <AboutCard
              icon={FiMapPin}
              title="City cheat sheets"
              className="about-feature-card"
            >
              <p>neighborhoods, costs, survival hacks.</p>
            </AboutCard>
            <AboutCard
              icon={TbPigMoney}
              title="Runway & budget tools"
              className="about-feature-card"
            >
              <p>make decisions faster.</p>
            </AboutCard>
            <AboutCard
              icon={FiFilm}
              title="Videos with real lessons"
              className="about-feature-card"
            >
              <p>what held up, what didn't, what's next.</p>
            </AboutCard>
          </div>
        </div>
      </section>

      {/* Beliefs */}
     <section className="about-section about-beliefs">
      <AboutSectionHeader
        eyebrow="The code"
        title="TLSG rules to live by"
        lead="Practical moves, not abstract advice. I share what I test so you skip the potholes."
      />
      <div className="about-beliefs-grid">
        <AboutCard
          number="1"
          title="Energy beats willpower"
          className="about-belief-card"
        >
          <p>Build survival routines you'll actually do.</p>
          <p>Systems that run on autopilot will outlast bursts of motivation. Stack habits on cues you already follow, and momentum becomes your fuel.</p>
        </AboutCard>

        <AboutCard
          number="2"
          title="Small tests > big bets"
          className="about-belief-card"
        >
          <p>Fail cheap, learn fast, move forward.</p>
          <p>Big leaps drain cash and confidence when they flop. Quick tests let you find what works while the stakes stay low.</p>
        </AboutCard>

        <AboutCard
          number="3"
          title="Money is oxygen"
          className="about-belief-card"
        >
          <p>Track your burn, extend your runway.</p>
          <p>Cashflow buys you time to adapt. Watch the numbers like your life depends on it—because your survival plan does.</p>
        </AboutCard>

        <AboutCard
          number="4"
          title="Home is a skill"
          className="about-belief-card"
        >
          <p>Anchor fast with repeatable rituals.</p>
          <p>Whether you’re in Bangkok or your hometown, routines make foreign ground feel steady. Home isn’t found, it’s built piece by piece.</p>
        </AboutCard>

        <AboutCard
          number="5"
          title="Tell the truth"
          className="about-belief-card"
        >
          <p>Real numbers, real steps, no spin.</p>
          <p>Survival gets easier when you cut the story and face the facts. Honesty with yourself is the ultimate leverage.</p>
        </AboutCard>
      </div>
    </section>


      {/* Personal Snapshot */}
      <section className="about-section about-personal about-tint-blue">
        <div className="about-section-content about-split">
          <div className="about-col">
            <AboutSectionHeader eyebrow="The person" title="My kind of day" />
            <div className="about-prose">
              <p>
                I like a good bar and a quiet pub. I will always pick the
                strawberry option. Overcast days feel like home.
              </p>
            </div>

            <ul className="about-details">
              <li>
                <span className="about-detail-label">Favorite drink:</span>{" "}
                <span>Anything strawberry.</span>
              </li>
              <li>
                <span className="about-detail-label">Current city:</span>{" "}
                <span>Bangkok.</span>
              </li>
              <li>
                <span className="about-detail-label">Best weather:</span>{" "}
                <span>Foggy and cozy.</span>
              </li>
            </ul>
          </div>

          <div className="about-col">
            <div className="about-media the-person-img">
              <img
                src="/images/gelato.jpg"
                alt="Strawberry gelato in Istanbul"
                className="about-media-img"
              />
              <div className="about-media-tag">
                <IconPill icon={LuIceCreamBowl}>
                  Gelato in Istanbul
                </IconPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="about-section about-newsletter">
        <div className="about-section-content">
          <div className="about-newsletter-card">
            <div className="about-newsletter-copy">
              <h2 className="about-section-title">Start Your Move</h2>
              <p className="about-section-lead">
                Join the newsletter and get the Bangkok Starter Kit. Practical
                tools, real costs, survival challenges you can finish in a
                weekend.
              </p>
            </div>

            <form
              className="about-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="about-btn about-btn-primary" type="submit">
                Get the Starter Kit
              </button>
            </form>

            <p className="about-form-note">Zero spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="about-section about-contact">
        <div className="about-section-content">
          <AboutSectionHeader
            eyebrow="Let's connect"
            title="Get in touch"
            lead="Wins, questions, or survival stories—I read every message."
          />

          {isSubmitted ? (
            <div className="about-contact-success">
              <div className="about-success-icon" aria-hidden="true">
                <FiCheckCircle size={24} />
              </div>
              <h3>Message sent</h3>
              <p>Thanks for reaching out. I will reply soon.</p>
            </div>
          ) : (
            <div className="about-contact-layout">
              <form
                className="about-contact-form"
                onSubmit={handleContactSubmit}
              >
                <div className="about-form-row">
                  <div className="about-form-group">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="What should I call you?"
                    />
                  </div>
                  <div className="about-form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="about-form-group">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your plans, ask a question, or just say hi."
                  />
                </div>

                <div className="about-form-footer">
                  <button className="about-btn about-btn-primary" type="submit">
                    Send message
                  </button>
                </div>
              </form>

              <aside className="about-contact-info">
                <div className="about-info-item">
                  <div className="about-info-icon" aria-hidden="true">
                    <FiMail size={20} />
                  </div>
                  <div className="about-info-body">
                    <h4>Email</h4>
                    <a href="mailto:dinar@thelastsurvivalguide.com">
                      dinar@thelastsurvivalguide.com
                    </a>
                  </div>
                </div>

                <div className="about-info-item">
                  <div className="about-info-icon" aria-hidden="true">
                    <FiClock size={20} />
                  </div>
                  <div className="about-info-body">
                    <h4>Timezone</h4>
                    <p>Bangkok (GMT+7)</p>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
