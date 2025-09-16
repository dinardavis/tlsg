// src/components/BlogIndex.jsx
import React from "react";
import { getAllPosts } from "../utils/blogData";

function BlogIndex() {
  const blogPosts = getAllPosts();

  return (
    <div className="blog-index">
      <div className="blog-index-container">
        <header className="blog-index-header">
          <h1>The Last Survival Guide Blog</h1>
          <p>
            Field-tested notes on bold moves, better systems, and surviving
            (well) abroad.
          </p>
        </header>

        <div className="blog-posts">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-post-card">
              <a className="unstyled-link" href={`#/blog/${post.slug}`}>
                {post.image && (
                  <img src={post.image} alt={post.altText || post.title} />
                )}
                <div>
                  <div className="post-meta">
                    <span className="category">{post.category}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <button className="read-more-btn" type="button">
                    Read more
                  </button>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogIndex;
