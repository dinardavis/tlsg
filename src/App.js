import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BlogIndex from "./components/BlogIndex";
import BlogPost from "./components/BlogPost";
import About from "./components/About";
import YouTubePage from "./components/YouTubePage";
import Footer from "./components/Footer";

function parseHash(hash) {
  const h = hash || window.location.hash || "";
  if (/^#\/about\/?$/.test(h)) return { page: "about" };
  if (/^#\/youtube\/?$/.test(h)) return { page: "youtube" };
  if (/^#\/blog\/?$/.test(h)) return { page: "blog" };
  const match = h.match(/^#\/blog\/([^/?#]+)/);
  if (match) return { page: "post", slug: decodeURIComponent(match[1]) };
  return { page: "home" };
}

function App() {
  const [{ page, slug }, setRoute] = useState(parseHash());

  // Keep scroll behavior consistent
  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Scroll to top on page/slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, slug]);

  const navigateTo = (nextPage, postOrSlug = null) => {
    const s =
      typeof postOrSlug === "string" ? postOrSlug : postOrSlug?.slug || "";

    switch (nextPage) {
      case "home":
        window.location.hash = "#/";
        break;
      case "about":
        window.location.hash = "#/about";
        break;
      case "youtube":
        window.location.hash = "#/youtube";
        break;
      case "blog":
        window.location.hash = "#/blog";
        break;
      case "post":
        window.location.hash = s ? `#/blog/${encodeURIComponent(s)}` : "#/blog";
        break;
      default:
        window.location.hash = "#/";
        break;
    }
  };

  // Render the current view
  const view = useMemo(() => {
    switch (page) {
      case "home":
        return (
          <HomePage
            onPostClick={(post) => navigateTo("post", post)}
            onNavigate={navigateTo}
          />
        );
      case "blog":
        return <BlogIndex onPostClick={(post) => navigateTo("post", post)} />;
      case "post":
        // New slug-based BlogPost component
        return <BlogPost slug={slug} />;
      case "youtube":
        return <YouTubePage />;
      case "about":
        return <About />;
      default:
        return (
          <HomePage
            onPostClick={(post) => navigateTo("post", post)}
            onNavigate={navigateTo}
          />
        );
    }
  }, [page, slug]);

  return (
    <div className="App">
      <Header onNavigate={navigateTo} currentPage={page} />
      <main>{view}</main>
      <Footer />
    </div>
  );
}

export default App;
