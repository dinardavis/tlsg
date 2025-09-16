const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const posts = [
  {
    id: 1,
    slug: "runway-math-for-real-humans",
    title: "Runway Math That Actually Works",
    image: "/images/runway_calculations.png",
    altText: "Man seated at a desktop computer looking frustrated",
    excerpt:
      "Your money is your oxygen. Here's how I'd stretch a $10–15K runway without starving or acting like a lunatic.",
    date: "2025-08-15",
    readTime: "5 min read",
    category: "Budgeting",
    content: {
      intro:
        "Your money should buy time and options. Here’s how I’d plan a $10–15K runway without living like a monk—or a maniac.",
      sections: [
        {
          title: "The Real Math",
          content:
            "Most folks either save like a monk and hate their life, or wing it and panic in month three. The middle path: know your startup costs, your monthly burn, and your buffer—then buy time.",
        },
        {
          title: "Startup Costs (the sneaky ones too)",
          content:
            "Deposits, first month’s rent, basic furniture, visa fees, transit setup—and the forgotten stuff like kitchen basics and bedding. List it all once; surprise costs are just unlisted costs.",
        },
        {
          title: "Monthly Burn Rate",
          content:
            "Rent, utilities, groceries, transit, fun, and a tiny ‘oops’ fund. Track the first month like a hawk, then relax into a rhythm.",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "first-30-days-new-city",
    title: "Survival Checklist: First 30 Days Anywhere",
    image: "/images/new_arrival.png",
    altText: "City street with morning light",
    excerpt:
      "How to land, settle, and claim your ground in a new city. Tested in Bangkok, Berlin, and Boise.",
    date: "2025-08-10",
    readTime: "6 min read",
    category: "Playbook",
    content: {
      intro:
        "A simple checklist to land, settle, and make the place feel yours—faster.",
      sections: [
        {
          title: "Week 1: Survival Mode",
          content:
            "SIM, groceries, transit card, sleep. Keep it boring; you’re building a base.",
        },
        {
          title: "Week 2: Routines",
          content:
            "Find your coffee shop, gym, lunch spot. Learn 10 phrases. Meet one person on purpose.",
        },
        {
          title: "Week 3–4: Make It Home",
          content:
            "Add small comforts to your space, join a class or group, start a weekly ritual you actually enjoy.",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "bangkok-condo-hunt-what-i-look-for-and-skip",
    title: "Bangkok Condo Hunt: The Hidden Costs",
    image: "/images/bangkok_condo.png",
    altText: "Bangkok skyline with condo buildings",
    excerpt:
      "Noise, light, location, and the traps landlords don't mention. My criteria, and my near misses.",
    date: "2025-08-05",
    readTime: "7 min read",
    category: "Housing",
    content: {
      intro:
        "Noise, light, location, and the sneaky costs nobody mentions. Here’s my current checklist.",
      sections: [
        {
          title: "Location Red Flags",
          content:
            "Construction zones, unstoppable nightlife, delivery dead-ends. Visit at night and on weekends.",
        },
        {
          title: "Building Must-Haves",
          content:
            "Security, elevators that actually work, decent water pressure, solid internet options.",
        },
        {
          title: "Hidden Costs",
          content:
            "Common area fees, parking, internet install, moving again if you pick wrong. Budget for all of it.",
        },
      ],
    },
  },
  {
    id: 4,
    slug: "the-90-day-dip-and-how-to-beat-it",
    title: "The 90-Day Dip (And How to Beat It)",
    image: "/images/sad_gal.png",
    altText: "Person looking out a window on a rainy day",
    excerpt:
      "Month three is where most people bail. Here's how to push through the wobble and start actually living.",
    date: "2025-07-28",
    readTime: "6 min read",
    category: "Mindset",
    content: {
      intro:
        "Month three is the wobble: novelty fades, friction rises. Totally normal. Here’s how to ride it out.",
      sections: [
        {
          title: "Why Month Three Sucks",
          content:
            "Language fatigue, comparison to ‘back home’, admin hangovers. You’re not broken; you’re acclimating.",
        },
        {
          title: "Survival Strategies",
          content:
            "Routines, language basics, recurring social anchors, and tiny adventures that refill the tank.",
        },
        {
          title: "Why It Gets Better",
          content:
            "Familiarity lowers costs—time, money, and energy. That’s when life starts to feel like yours.",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "visa-options-thailand",
    title: "Visa Options in Thailand (Without the Guru Spin)",
    image: "/images/thai_visa.png",
    altText: "Passport with Thai visa",
    excerpt:
      "A practical overview of common visas and what they're actually like to live with day-to-day.",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Legal",
    content: {
      intro:
        "Not legal advice—just a traveler’s-eye view of common visa paths and the tradeoffs that matter day-to-day.",
      sections: [
        {
          title: "Tourist",
          content:
            "Simple, flexible, but short. Great for testing a city. Watch extension rules and border runs.",
        },
        {
          title: "Education",
          content:
            "Time to study + time in-country. Costs and class schedules can limit flexibility; pick a legit school.",
        },
        {
          title: "Business/Other",
          content:
            "More paperwork, more stability. Worth it if you’re building roots; budget time and fees.",
        },
      ],
    },
  },
  {
    id: 6,
    slug: "building-a-social-life-in-bangkok",
    title: "Building a Social Life Abroad When You Don't Know Anyone",
    image: "/images/bangkok_bar.png",
    altText: "People chatting at a cozy bar",
    excerpt:
      "How to make friends, find your crew, and avoid the expat bubble. Easier than you think—if you're intentional.",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Social",
    content: {
      intro:
        "Friends don’t fall from the sky—you schedule them. Here’s how I build a social life from zero.",
      sections: [
        {
          title: "Low-Friction First Moves",
          content:
            "Language exchanges, interest meetups, casual classes. One RSVP each week, no overthinking.",
        },
        {
          title: "Anchor Spots",
          content:
            "Pick one café, one bar, one park. Become a regular; regulars meet regulars.",
        },
        {
          title: "Follow-Through",
          content:
            "If you click with someone, suggest a next plan on the spot. Put it in the calendar.",
        },
      ],
    },
  },
].map((p) => ({ ...p, slug: p.slug || slugify(p.title) }));

// ---------- Helpers ----------
export const getAllPosts = () =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getRecentPosts = (n = 3) => getAllPosts().slice(0, n);

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export const getPostById = (id) =>
  posts.find((p) => String(p.id) === String(id));
