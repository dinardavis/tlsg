// YouTubePage.jsx
import React, { useEffect, useMemo, useState } from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import {
  TRAILER_VIDEO_ID,
  CHANNEL_HANDLE_URL,
  YOUTUBE_VIDEOS,
  getVideoThumbnail,
  getVideoWatchUrl,
  formatDuration,
  formatUploadDate,
} from "../utils/youtubeData";
import {
  FiYoutube,
  FiPlay,
  FiFilter,
  FiExternalLink,
  FiTag,
  FiArrowRight,
} from "react-icons/fi";

export default function YouTubePage() {
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Tags list (optional — safe if you have none)
  const tags = useMemo(() => {
    const t = new Set();
    YOUTUBE_VIDEOS.forEach((v) => (v.tags || []).forEach((x) => t.add(x)));
    return ["All", ...Array.from(t)];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return YOUTUBE_VIDEOS;
    return YOUTUBE_VIDEOS.filter((v) => (v.tags || []).includes(activeTag));
  }, [activeTag]);

  // JSON-LD injection for current list
  useEffect(() => {
    const videoObjects = filtered.map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: getVideoThumbnail(video.id),
      uploadDate: video.uploadDate,
      duration: video.durationISO,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: getVideoWatchUrl(video.id),
      publisher: {
        "@type": "Organization",
        name: "Seat Of My Plans",
        url: CHANNEL_HANDLE_URL,
      },
    }));

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Latest videos from Seat Of My Plans",
      description:
        "Practical videos on moving abroad, budgeting, and building a life you actually like",
      url: window.location.href,
      numberOfItems: filtered.length,
      itemListElement: filtered.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "VideoObject",
          name: video.title,
          url: getVideoWatchUrl(video.id),
        },
      })),
    };

    document
      .querySelectorAll('script[type="application/ld+json"].ytp-jsonld')
      .forEach((s) => s.remove());

    const makeScript = (json) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.className = "ytp-jsonld";
      s.textContent = JSON.stringify(json);
      document.head.appendChild(s);
      return s;
    };

    const s1 = makeScript(videoObjects);
    const s2 = makeScript(itemList);
    return () => {
      s1.remove();
      s2.remove();
    };
  }, [filtered]);

  const openVideo = (video) => {
    window.open(getVideoWatchUrl(video.id), "_blank", "noopener,noreferrer");
  };

  const getVariant = (i) => (i === 0 ? "feature" : "standard");

  return (
    <main className="ytp-page">
      {/* -------- HERO (kept) -------- */}
      <section className="ytp-hero ytp-section">
        <div className="ytp-hero-grid ytp-container">
          <div className="ytp-hero-copy">
            <div className="ytp-eyebrow">YouTube</div>
            <h1 className="ytp-hero-title">The Last Survival Guide</h1>
            <p className="ytp-hero-lead">
              Short, sharp videos on relocation, money, and survival strategies
              abroad. I test in public. I keep what works.
            </p>

            <div className="ytp-hero-cta">
              <a
                href={CHANNEL_HANDLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ytp-btn ytp-btn-primary"
                aria-label="Subscribe on YouTube (opens in new tab)"
              >
                <FiYoutube className="ytp-btn-icon" aria-hidden="true" />{" "}
                Subscribe on YouTube
              </a>
              <a href="#videos" className="ytp-btn ytp-btn-outline">
                Browse videos{" "}
                <FiArrowRight className="ytp-btn-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="ytp-hero-media">
            <div className="ytp-embed-frame">
              <YouTubeEmbed
                videoId={TRAILER_VIDEO_ID}
                title="Seat Of My Plans — Channel Trailer"
                caption="Channel trailer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------- RAIL + GRID -------- */}
      <section className="ytp-rail ytp-section" id="videos">
        <div className="ytp-container ytp-rail-grid">
          {/* Left rail (becomes full-width stacked on mobile) */}
          <aside className="ytp-aside">
            <div className="ytp-aside-card">
              <h2 className="ytp-aside-title">Featured Videos:</h2>
              <p className="ytp-aside-text">
                Practical breakdowns on moving abroad, surviving the first 90
                days, and budgeting for a life you can actually enjoy.
              </p>
              <a
                href={CHANNEL_HANDLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ytp-btn ytp-btn-secondary"
              >
                <FiYoutube className="ytp-btn-icon" aria-hidden="true" />{" "}
                Subscribe
              </a>
            </div>

            {tags.length > 1 && (
              <div className="ytp-aside-card">
                <div className="ytp-aside-heading">
                  <FiFilter aria-hidden="true" />
                  <span>Filter</span>
                </div>
                <div className="ytp-chips">
                  {tags.map((t) => (
                    <button
                      key={t}
                      className={`ytp-chip ${
                        activeTag === t ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setActiveTag(t);
                        setVisibleCount(12);
                      }}
                      aria-pressed={activeTag === t}
                    >
                      <FiTag aria-hidden="true" />
                      <span>{t}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Right: feature + responsive grid */}
          <div className="ytp-grid">
            {filtered.slice(0, visibleCount).map((video, i) => {
              const variant = getVariant(i);
              return (
                <article
                  key={video.id}
                  className={`ytp-card ytp-card--${variant}`}
                  onClick={() => openVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? openVideo(video) : null
                  }
                  aria-label={`Open on YouTube: ${video.title}`}
                >
                  <div className="ytp-card-media">
                    <img
                      src={getVideoThumbnail(video.id)}
                      alt={video.title}
                      loading="lazy"
                      width="480"
                      height="270"
                    />
                    <span className="ytp-badge">
                      {formatDuration(video.durationISO)}
                    </span>
                    <span className="ytp-card-play">
                      <FiPlay aria-hidden="true" />
                    </span>
                  </div>
                  <div className="ytp-card-body">
                    <h3 className="ytp-card-title">{video.title}</h3>
                    <p className="ytp-card-desc">{video.description}</p>
                    <div className="ytp-card-meta">
                      <time dateTime={video.uploadDate}>
                        {formatUploadDate(video.uploadDate)}
                      </time>
                      <a
                        href={getVideoWatchUrl(video.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ytp-card-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Watch on YouTube <FiExternalLink aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load more (hidden if ≤ visible count) */}
          {visibleCount < filtered.length && (
            <div className="ytp-more">
              <button
                className="ytp-btn"
                onClick={() =>
                  setVisibleCount((n) => Math.min(n + 12, filtered.length))
                }
              >
                Load more <FiArrowRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
