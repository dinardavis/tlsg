import React from "react";
import { getRecentPosts } from "../utils/blogData";

function BlogTeaser({ onNavigate }) {
  const samplePosts = getRecentPosts(3);

  return (
    <>
      <div className="blog-teaser-grid">
        {samplePosts.map((post) => (
          <article key={post.slug} className="blog-teaser-card">
            <a
              className="unstyled-link"
              href={`#/blog/${post.slug}`}
              aria-label={`Read ${post.title}`}
            >
              <div className="blog-teaser-image">
                {post.image ? (
                  <img src={post.image} alt={post.altText || post.title} />
                ) : (
                  <span>Image coming soon</span>
                )}
              </div>
              <div className="blog-teaser-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-teaser-meta">
                  <span className="category">{post.category}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="blog-teaser-cta">
        <button className="btn btn-secondary" onClick={() => onNavigate?.("blog") || (window.location.hash = "#/blog")}>
          Want more? Read the full blog →
        </button>
      </div>
    </>
  );
}

export default BlogTeaser;
