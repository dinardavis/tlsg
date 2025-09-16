// YouTube integration data
export const TRAILER_VIDEO_ID = "VIDEO_ID_TRAILER"; // Placeholder - replace with actual trailer ID
export const CHANNEL_HANDLE_URL = "https://www.youtube.com/@SeatOfMyPlans";

// Placeholder video data for the grid
export const YOUTUBE_VIDEOS = [
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "How Much Money Do You Really Need to Move to Bangkok?",
    description:
      "The honest breakdown of startup costs, monthly expenses, and how to build your runway without the guru math.",
    uploadDate: "2024-01-15T00:00:00Z",
    durationISO: "PT6M12S",
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "Bangkok Condo Hunting: What to Look For (And What to Avoid)",
    description:
      "From location red flags to hidden costs, here's what I wish I knew before signing my first lease.",
    uploadDate: "2024-01-10T00:00:00Z",
    durationISO: "PT7M45S",
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "The 90-Day Rule: Why Most People Fail Abroad",
    description:
      "The three-month slump is real. Here's how to survive it and actually build a life in your new country.",
    uploadDate: "2024-01-05T00:00:00Z",
    durationISO: "PT5M30S",
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "Visa Options for Thailand (Explained Without the Noise)",
    description:
      "A practical guide to staying in Thailand legally without becoming a visa expert.",
    uploadDate: "2024-01-01T00:00:00Z",
    durationISO: "PT8M15S",
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "Making Friends Abroad Without Becoming That Expat",
    description:
      "How to make friends, find your tribe, and avoid the expat bubble. It's easier than you think.",
    uploadDate: "2023-12-28T00:00:00Z",
    durationISO: "PT6M45S",
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder ID
    title: "First 30 Days in Any New City: A Practical Checklist",
    description:
      "A simple checklist to land, settle, and make the place feel yours—faster. Works in Bangkok, Berlin, or Boise.",
    uploadDate: "2023-12-20T00:00:00Z",
    durationISO: "PT5M20S",
  },
];

// Helper functions
export const getVideoThumbnail = (videoId, quality = "hqdefault") => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

export const getVideoWatchUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export const getVideoEmbedUrl = (videoId) => {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
};

export const formatDuration = (durationISO) => {
  // Convert PT6M12S to 6:12 format
  const match = durationISO.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "0:00";

  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const formatUploadDate = (uploadDate) => {
  const date = new Date(uploadDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
