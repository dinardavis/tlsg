import React, { useState } from "react";
import { getVideoThumbnail, getVideoEmbedUrl } from "../utils/youtubeData";

function YouTubeEmbed({ videoId, title, caption, className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const thumbnailUrl = getVideoThumbnail(videoId);
  const embedUrl = getVideoEmbedUrl(videoId);

  return (
    <div className={`youtube-embed ${className}`}>
      {!isPlaying ? (
        <div className="youtube-thumbnail" onClick={handlePlay}>
          <img
            src={thumbnailUrl}
            alt={title}
            width="640"
            height="360"
            loading="lazy"
          />
          <div className="play-button" aria-label={`Play video: ${title}`}>
            <svg
              width="68"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                fill="#f00"
              />
              <path d="M45 24L27 14v20l18-10z" fill="#fff" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          width="640"
          height="360"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {caption && <p className="youtube-caption">{caption}</p>}
    </div>
  );
}

export default YouTubeEmbed;
