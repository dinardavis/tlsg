// src/components/BlogPost.jsx
import React, { useEffect, useMemo, useState } from "react";
import { getPostBySlug } from "../utils/blogData";

function useSlugFromHash(fallbackSlug) {
  const [slug, setSlug] = useState(() => {
    const hash = window.location.hash || "";
    const match = hash.match(/^#\/blog\/([^?]+)/);
    return fallbackSlug || (match ? decodeURIComponent(match[1]) : "");
  });

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash || "";
      const match = hash.match(/^#\/blog\/([^?]+)/);
      setSlug(match ? decodeURIComponent(match[1]) : "");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return slug;
}

function BlogPost({ slug: slugProp }) {
  const slug = useSlugFromHash(slugProp);
  const post = useMemo(() => (slug ? getPostBySlug(slug) : null), [slug]);

  useEffect(() => {
    // simple fade-in on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!post) {
    return (
      <div className="blog-post">
        <div className="blog-post-container">
          <button className="back-btn" onClick={() => (window.location.hash = "#/blog")}>
            Back to blog
          </button>
          <h1 className="post-title">Post not found</h1>
          <p>Try another link or head back to the blog.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="blog-post-container">
        <button className="back-btn" onClick={() => (window.location.hash = "#/blog")}>
          Back to blog
        </button>

        <header className="post-header scroll-animate">
          <div className="post-meta">
            <span className="category">{post.category}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-body scroll-animate">
          {post.image && <img src={post.image} alt={post.altText || post.title} />}
          <p>{post.content?.intro}</p>

          {post.content?.sections?.map((section, i) => (
            <section key={i}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}

          <h2>What’s Next?</h2>
          <p>
            Ready to make your own move? Grab the Starter Kit, or pick one tiny bet from this post
            and run it this weekend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
