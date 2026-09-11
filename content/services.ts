export const serviceCategories = [
  {
    slug: "content-creation",
    title: "Content Creation",
    summary:
      "Short-form video, static graphics, carousels, and captions built for the platforms your audience actually uses.",
    bullets: [
      "Reels & TikTok concepting and editing",
      "Branded photo & graphic templates",
      "Caption + hashtag strategy",
    ],
  },
  {
    slug: "strategy",
    title: "Strategy & Positioning",
    summary:
      "Audience research, brand voice, and a monthly content plan mapped to real business goals — not vanity metrics.",
    bullets: [
      "Content pillars & monthly calendar",
      "Competitor & audience audit",
      "Voice, tone, and visual guidelines",
    ],
  },
  {
    slug: "management",
    title: "Account Management",
    summary:
      "Day-to-day posting, community management, and reporting so you can focus on running your business.",
    bullets: [
      "Scheduled posting across platforms",
      "DM & comment community management",
      "Monthly performance report",
    ],
  },
  {
    slug: "linkedin-facebook",
    title: "LinkedIn & Facebook",
    summary:
      "Long-form posts, company pages, and community engagement built for the platforms where professional audiences and local customers actually spend time.",
    bullets: [
      "LinkedIn founder thought-leadership, company page posts, and articles/newsletters",
      "Facebook business page updates, events, and local community engagement",
      "Comment & DM management plus monthly performance reporting",
    ],
  },
  {
    slug: "paid-social",
    title: "Paid Social Ads",
    summary:
      "Targeted Meta and TikTok ad campaigns that turn best-performing organic content into predictable pipeline.",
    bullets: [
      "Campaign structure & audience targeting",
      "Creative testing & iteration",
      "Weekly optimization & reporting",
    ],
  },
  {
    slug: "reputation",
    title: "Reputation & Review Management",
    summary:
      "Google Business Profile optimization, review generation, and review responses that build trust before a prospect ever reaches out.",
    bullets: [
      "Google Business Profile setup & optimization",
      "Review generation campaigns",
      "Review response management",
    ],
  },
  {
    slug: "leadership-advocacy",
    title: "Leadership & Employee Advocacy",
    summary:
      "Ghostwritten posts and profile optimization that turn founders and executives into a brand's most trusted voice on social.",
    bullets: [
      "Ghostwritten personal posts for founders/execs",
      "Employee social sharing programs",
      "Executive profile optimization",
    ],
  },
  {
    slug: "case-studies",
    title: "Case Studies & Client Spotlights",
    summary:
      "Client stories and project highlights turned into share-ready content that shows real results, not just claims.",
    bullets: [
      "Client interview & testimonial capture",
      "Before/after project spotlights",
      "Case study one-pagers repurposed for social",
    ],
  },
] as const;

export const outcomes = [
  {
    slug: "posting-solved",
    title: "Posting stops being your problem",
    summary:
      "No more Sunday-night scrambling. Content ships on schedule, in your voice, without you touching the calendar.",
    pain: "You know you should be posting, but something more urgent always wins. Weeks slip. The last post is dated. Every time you open the app you feel behind.",
    shift:
      "You approve a monthly plan; we handle the rest — writing, shooting, editing, scheduling. Your job goes from making content to reviewing it.",
    levers: [
      "Monthly content calendar built around your business, not trends",
      "Batch production so approvals take minutes, not hours",
      "Scheduled posting across every platform we run for you",
      "Community management on comments and DMs during business hours",
    ],
  },
  {
    slug: "brand-looks-serious",
    title: "Your feed starts to look like a business",
    summary:
      "Consistent visuals, sharper messaging, and a point of view — so first-time visitors actually take you seriously.",
    pain: "A prospect finds you on Instagram. The last post is three months old. The visuals don't match. There's no clear reason to follow — or to buy.",
    shift:
      "Your feed reads like a real brand: same voice, same visual system, a clear point of view. First impressions start earning trust instead of losing it.",
    levers: [
      "Brand voice and visual guidelines you can hand to anyone",
      "Templated graphics and video that stay on-brand at speed",
      "Content pillars so every post has a job",
      "Bio, highlights, and profile assets tuned for the first-visit test",
    ],
  },
  {
    slug: "revenue-not-vanity",
    title: "Content tied to revenue, not vanity",
    summary:
      "Every post ladders back to a real business goal: booked calls, foot traffic, list growth, or trust with buyers.",
    pain: "You've got likes but no leads. Nothing you post seems to connect to money coming in. You can't tell your CFO — or yourself — what social is actually doing.",
    shift:
      "Every campaign has a purpose you can point to. Reporting focuses on booked calls, form fills, and revenue-adjacent metrics — not follower counts.",
    levers: [
      "Strategy that starts with your funnel, not the platform",
      "Clear CTAs, landing pages, and conversion paths from social",
      "Monthly reporting on the metrics that move the business",
      "Paid amplification of the organic posts that actually convert",
    ],
  },
  {
    slug: "audience-that-compounds",
    title: "You own an audience that compounds",
    summary:
      "Followers, email signups, and warm leads that stick around — assets you keep whether the algorithm cooperates or not.",
    pain: "You're renting attention from platforms that can throttle your reach overnight. When you stop posting, everything goes quiet within a week.",
    shift:
      "Every post feeds an owned asset — an email list, a community, a body of work — so your reach isn't at the mercy of one algorithm.",
    levers: [
      "Email capture built into the content flow",
      "Cross-platform distribution so no single channel is a single point of failure",
      "Evergreen content that keeps working months after it's posted",
      "Community and DM strategies that turn followers into buyers",
    ],
  },
] as const;

export const homeOutcomes = {
  eyebrow: "What changes",
  heading: "What working with us actually looks like.",
  intro:
    "You don't need more content — you need social that pulls its weight. Here's what shifts once we take it over.",
} as const;

export const whatWeDo = {
  intro:
    "We handle the strategy, content, and day-to-day execution so social becomes a reliable growth channel — not a side project you keep putting off.",
  steps: [
    {
      title: "Discover",
      body: "We start with a deep-dive into your business, audience, and current social presence.",
    },
    {
      title: "Plan",
      body: "You get a strategy doc with content pillars, posting cadence, and clear success metrics.",
    },
    {
      title: "Produce",
      body: "We create the content — video, graphics, copy — in your brand voice and on schedule.",
    },
    {
      title: "Optimize",
      body: "Monthly reporting shows what worked, what didn't, and where we're doubling down next.",
    },
  ],
} as const;

export const pricingTiers = [
  {
    name: "Starter",
    price: "$1,000",
    cadence: "per month",
    tagline: "For solo founders and personal brands just getting serious.",
    features: [
      "1 platform (Instagram, TikTok, or LinkedIn)",
      "8 posts per month",
      "Monthly strategy call",
      "Basic monthly report",
    ],
    cta: "Start here",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,000",
    cadence: "per month",
    tagline: "For small businesses ready to make social a real channel.",
    features: [
      "Up to 2 platforms",
      "16 posts + 4 short-form videos per month",
      "Community management (M–F)",
      "Bi-weekly strategy calls",
      "Detailed monthly report",
    ],
    cta: "Most popular",
    featured: true,
  },
  {
    name: "Full Service",
    price: "$3,500+",
    cadence: "per month",
    tagline: "For brands that want a full outsourced social team.",
    features: [
      "3+ platforms",
      "24+ posts and 8+ videos per month",
      "Daily community management",
      "Paid social campaigns included",
      "Weekly reporting + monthly review",
    ],
    cta: "Let's talk",
    featured: false,
  },
] as const;

export const idealClient = {
  intro:
    "Not every business is the right fit — and that's fine. Here's who we do our best work with.",
  yesList: [
    "Small businesses looking to have a social media presence or wanting to turn social media traffic into potential leads",
    "Local service businesses (home services, wellness, fitness, food & beverage)",
    "Personal brands and creators building an audience around expertise",
    "Founders who value quality content and are ready to trust a partner",
    "Clients who want to build long-term — not chase a single viral moment",
  ],
  notFor: [
    "Businesses looking for the cheapest option available",
    "Anyone expecting overnight follower explosions",
    "Brands unwilling to share access, brand assets, or subject-matter input",
    "MLMs, gambling, or anything that doesn't pass the sniff test",
  ],
} as const;
