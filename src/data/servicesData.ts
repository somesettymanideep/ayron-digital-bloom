import {
  Megaphone, Monitor, Diamond, Mail, Users,
  ShoppingBag, Search, Camera, Mic, TrendingUp, Zap
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  titleLine1: string;
  titleLine2: string;
  strokeLine: string;
  titleLine4: string;
  icon: any;
  category: string;
  desc: string;
  longDesc: string[];
  quote: string;
  checklist: string[];
  pricing: string;
  tags: string[];
  keywords?: string;
  metrics: { value: string; label: string }[];
  overviewStats: { value: string; label: string }[];
  steps: { title: string; desc: string; duration: string }[];
  caseStudies: { brand: string; industry: string; result: string; timeline: string }[];
  relatedSlugs: string[];
  ctaHeadingLine1: string;
  ctaHeadingLine2: string;
  ctaOffer: string;
}

const servicesData: Record<string, ServiceData> = {
  "seo-optimization": {
    slug: "seo-optimization",
    title: "SEO Optimization",
    titleLine1: "SEO",
    titleLine2: "Optimization",
    strokeLine: "That Ranks You",
    titleLine4: "#1 on Google.",
    icon: Search,
    category: "SEO & VISIBILITY",
    desc: "We audit, strategize, and execute SEO campaigns that bring consistent, high-intent organic traffic to your brand.",
    longDesc: [
      "SEO Optimization is the practice of improving your website's visibility on search engines like Google. It involves technical fixes, content creation, and authority building to ensure your site appears at the top when potential customers search for your services.",
      "At Ayron, we take a data-first approach. Every strategy begins with a thorough audit — analyzing your current rankings, site health, competitor landscape, and keyword opportunities. We then build a customized roadmap aligned with your business goals.",
      "SEO is one of the highest-ROI marketing channels because it compounds over time. Unlike paid ads that stop the moment you pause spend, organic rankings continue to drive traffic month after month. It's an investment in long-term brand visibility.",
    ],
    quote: "SEO is not a one-time task — it's a continuous investment that compounds over time.",
    checklist: [
      "Full Website SEO Audit",
      "Keyword Research & Mapping",
      "On-Page Optimization (Meta, H-tags, Schema)",
      "Technical SEO Fixes",
      "Content Strategy & Blog Calendar",
      "Link Building & Backlink Outreach",
      "Google Search Console Setup",
      "Monthly Performance Reports",
      "Competitor Gap Analysis",
      "Local SEO (Google Business Profile)",
    ],
    pricing: "₹15,000/month",
    tags: ["On-page", "Off-page", "Technical"],
    metrics: [
      { value: "3–6 Months", label: "to Rank" },
      { value: "10×", label: "ROI Average" },
      { value: "100%", label: "White-Hat" },
    ],
    overviewStats: [
      { value: "3–6 Months", label: "Average Ranking Timeline" },
      { value: "15+", label: "Monthly Deliverables" },
      { value: "10×", label: "Average ROI for Clients" },
      { value: "24/7", label: "Campaign Monitoring" },
    ],
    steps: [
      { title: "Audit & Discovery", desc: "Complete website crawl, competitor analysis, and baseline traffic assessment.", duration: "Week 1–2" },
      { title: "Keyword Strategy", desc: "Research high-intent keywords mapped to your services and buyer journey.", duration: "Week 2–3" },
      { title: "On-Page Optimization", desc: "Title tags, meta descriptions, header structure, schema markup, image alt-text.", duration: "Week 3–4" },
      { title: "Technical SEO", desc: "Page speed, Core Web Vitals, mobile optimization, crawlability fixes.", duration: "Month 1–2" },
      { title: "Content & Link Building", desc: "Blog publishing, guest posting, backlink outreach for authority growth.", duration: "Ongoing" },
      { title: "Report & Refine", desc: "Live dashboard access + monthly PDF report with next month's action plan.", duration: "Monthly" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "Fashion E-commerce", result: "+340% Organic Traffic", timeline: "In 4 months" },
      { brand: "Brand B", industry: "Local Services", result: "Page 1 Rankings — 28 Keywords", timeline: "In 3 months" },
      { brand: "Brand C", industry: "SaaS Product", result: "5× Lead Volume from Organic", timeline: "In 6 months" },
    ],
    relatedSlugs: ["website-design", "brand-identity", "ecommerce-listing"],
    ctaHeadingLine1: "Let's Get Your",
    ctaHeadingLine2: "Brand Ranking",
    ctaOffer: "Get a free SEO audit worth ₹5,000 — absolutely no strings attached.",
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    titleLine1: "Digital",
    titleLine2: "Marketing",
    strokeLine: "That Drives",
    titleLine4: "Real Growth.",
    icon: Megaphone,
    category: "GROWTH & PERFORMANCE",
    desc: "Comprehensive digital strategies that drive traffic, engagement, and conversions across all channels.",
    longDesc: [
      "Digital marketing encompasses all marketing efforts that use the internet. This includes paid advertising, social media, email, content marketing, and more — all working together to grow your brand.",
      "At Ayron, we don't just run ads. We build complete digital ecosystems — from awareness to conversion — using data-driven strategies tailored to your audience and business model.",
      "Our campaigns are optimized in real-time, ensuring every rupee of ad spend works harder. We combine creative storytelling with performance analytics to deliver measurable results.",
    ],
    quote: "Great marketing doesn't feel like marketing — it feels like a conversation.",
    checklist: [
      "Multi-Channel Campaign Strategy",
      "Google Ads Management",
      "Meta (Facebook/Instagram) Ads",
      "Social Media Content & Management",
      "Landing Page Design & Optimization",
      "Analytics & Conversion Tracking",
      "A/B Testing & Optimization",
      "Monthly Performance Reports",
      "Audience Research & Targeting",
      "Budget Optimization & ROAS Tracking",
    ],
    pricing: "₹20,000/month",
    tags: ["Paid Ads", "Social", "Analytics"],
    metrics: [
      { value: "200+", label: "Campaigns Run" },
      { value: "₹5Cr+", label: "Ad Spend Managed" },
      { value: "4.2×", label: "Avg ROAS" },
    ],
    overviewStats: [
      { value: "200+", label: "Campaigns Delivered" },
      { value: "₹5Cr+", label: "Ad Spend Managed" },
      { value: "4.2×", label: "Average ROAS" },
      { value: "24/7", label: "Campaign Monitoring" },
    ],
    steps: [
      { title: "Brand Audit", desc: "Understanding your brand, audience, and competitive landscape.", duration: "Week 1" },
      { title: "Strategy & Planning", desc: "Channel selection, budget allocation, and campaign roadmap.", duration: "Week 1–2" },
      { title: "Creative Development", desc: "Ad creatives, copy, landing pages, and A/B test variants.", duration: "Week 2–3" },
      { title: "Launch & Monitor", desc: "Campaign launch with real-time performance monitoring.", duration: "Week 3–4" },
      { title: "Optimize & Scale", desc: "Data-driven optimization, audience refinement, and budget scaling.", duration: "Ongoing" },
      { title: "Report & Iterate", desc: "Comprehensive reports with insights and next-month strategy.", duration: "Monthly" },
    ],
    caseStudies: [
      { brand: "Brand X", industry: "D2C Fashion", result: "4.8× ROAS on Meta Ads", timeline: "In 2 months" },
      { brand: "Brand Y", industry: "EdTech", result: "₹12 Cost Per Lead", timeline: "In 6 weeks" },
      { brand: "Brand Z", industry: "Real Estate", result: "320% Increase in Enquiries", timeline: "In 3 months" },
    ],
    relatedSlugs: ["seo-optimization", "email-marketing", "influencer-marketing"],
    ctaHeadingLine1: "Let's Grow Your",
    ctaHeadingLine2: "Brand Digitally",
    ctaOffer: "Get a free digital marketing audit — zero commitment required.",
  },
  "website-design": {
    slug: "website-design",
    title: "Website Design",
    titleLine1: "Website",
    titleLine2: "Design",
    strokeLine: "That Converts",
    titleLine4: "Visitors Fast.",
    icon: Monitor,
    category: "DESIGN & DEVELOPMENT",
    desc: "Modern, high-performance websites built to convert visitors into loyal customers.",
    longDesc: [
      "Your website is your digital storefront. Website design goes beyond aesthetics — it's about creating intuitive user experiences that guide visitors toward action.",
      "We design mobile-first, speed-optimized websites with clean code and modern frameworks. Every element is intentional — from layout hierarchy to micro-interactions.",
      "A well-designed website builds trust, reduces bounce rates, and increases conversions. It's the foundation of every successful digital marketing strategy.",
    ],
    quote: "A great website doesn't just look good — it works hard for your business 24/7.",
    checklist: ["Custom UI/UX Design", "Mobile-First Development", "CMS Integration", "Speed Optimization", "SEO-Friendly Structure", "Contact Forms & CTAs", "Analytics Setup", "Security & SSL", "Cross-Browser Testing", "Post-Launch Support"],
    pricing: "₹40,000 onwards",
    tags: ["UI/UX", "Responsive", "CMS"],
    metrics: [{ value: "50+", label: "Sites Built" }, { value: "<2s", label: "Load Time" }, { value: "99%", label: "Uptime" }],
    overviewStats: [{ value: "50+", label: "Websites Delivered" }, { value: "<2s", label: "Avg Load Time" }, { value: "3×", label: "Conversion Uplift" }, { value: "99%", label: "Client Satisfaction" }],
    steps: [
      { title: "Discovery Call", desc: "Understanding your business, goals, and target audience.", duration: "Week 1" },
      { title: "Wireframing", desc: "Low-fidelity layouts to define structure and user flow.", duration: "Week 1–2" },
      { title: "UI Design", desc: "Pixel-perfect designs with your brand identity applied.", duration: "Week 2–3" },
      { title: "Development", desc: "Clean, responsive code with CMS integration.", duration: "Week 3–5" },
      { title: "Testing & QA", desc: "Cross-browser, cross-device testing and speed optimization.", duration: "Week 5–6" },
      { title: "Launch & Support", desc: "Go live with monitoring and 30-day post-launch support.", duration: "Week 6" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "Healthcare", result: "2.5× More Enquiries", timeline: "Post-launch" },
      { brand: "Brand B", industry: "Education", result: "45% Lower Bounce Rate", timeline: "In 1 month" },
      { brand: "Brand C", industry: "E-commerce", result: "₹8L Revenue in Month 1", timeline: "In 30 days" },
    ],
    relatedSlugs: ["brand-identity", "seo-optimization", "digital-marketing"],
    ctaHeadingLine1: "Let's Build Your",
    ctaHeadingLine2: "Dream Website",
    ctaOffer: "Get a free website consultation — let's discuss your vision.",
  },
  "brand-identity": {
    slug: "brand-identity",
    title: "Brand Identity",
    titleLine1: "Brand",
    titleLine2: "Identity",
    strokeLine: "That Makes You",
    titleLine4: "Unforgettable.",
    icon: Diamond,
    category: "BRANDING & DESIGN",
    desc: "Distinctive brand systems that set you apart and create lasting recognition.",
    longDesc: [
      "Brand identity is more than a logo — it's the complete visual and emotional system that represents your business to the world.",
      "We craft cohesive brand systems including logos, color palettes, typography, and brand guidelines that ensure consistency across every touchpoint.",
      "A strong brand identity builds trust, commands premium pricing, and creates emotional connections with your audience that last a lifetime.",
    ],
    quote: "Your brand is what people say about you when you're not in the room.",
    checklist: ["Logo Design & Variations", "Color Palette & Typography", "Brand Guidelines Document", "Business Card Design", "Social Media Templates", "Packaging Design", "Letterhead & Stationery", "Brand Strategy & Positioning", "Competitor Brand Analysis", "Brand Voice & Messaging"],
    pricing: "₹25,000 onwards",
    tags: ["Logo", "Colors", "Typography"],
    metrics: [{ value: "100+", label: "Brands Created" }, { value: "48hrs", label: "First Concepts" }, { value: "∞", label: "Revisions" }],
    overviewStats: [{ value: "100+", label: "Brands Designed" }, { value: "48hrs", label: "First Concepts Ready" }, { value: "100%", label: "Ownership Transfer" }, { value: "∞", label: "Revision Rounds" }],
    steps: [
      { title: "Brand Discovery", desc: "Deep dive into your values, audience, and competitive landscape.", duration: "Week 1" },
      { title: "Moodboard & Direction", desc: "Visual direction exploration with style references.", duration: "Week 1–2" },
      { title: "Logo Concepts", desc: "3–5 unique logo concepts with rationale.", duration: "Week 2–3" },
      { title: "Identity System", desc: "Full brand system — colors, fonts, patterns, and assets.", duration: "Week 3–4" },
      { title: "Applications", desc: "Business cards, social templates, and collateral.", duration: "Week 4–5" },
      { title: "Brand Guidelines", desc: "Comprehensive guidelines document for consistency.", duration: "Week 5" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "Fashion Startup", result: "3× Social Engagement Post-Rebrand", timeline: "In 2 months" },
      { brand: "Brand B", industry: "Restaurant Chain", result: "25% Revenue Increase", timeline: "In 6 months" },
      { brand: "Brand C", industry: "Tech Company", result: "Successfully Raised ₹2Cr Funding", timeline: "Post-rebrand" },
    ],
    relatedSlugs: ["website-design", "product-shoot", "digital-marketing"],
    ctaHeadingLine1: "Let's Build Your",
    ctaHeadingLine2: "Brand Identity",
    ctaOffer: "Get a free brand audit — see where your brand stands today.",
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing",
    titleLine1: "Email",
    titleLine2: "Marketing",
    strokeLine: "That Gets",
    titleLine4: "Opened & Clicked.",
    icon: Mail,
    category: "RETENTION & ENGAGEMENT",
    desc: "Automated email campaigns with high open rates and measurable ROI.",
    longDesc: [
      "Email marketing remains one of the highest-ROI channels in digital marketing. It's direct, personal, and measurable — landing right in your customer's inbox.",
      "We design beautiful, mobile-responsive emails with compelling copy, smart segmentation, and automated sequences that nurture leads into loyal customers.",
      "From welcome sequences to re-engagement campaigns, every email we send is data-driven and designed to move the needle on your revenue.",
    ],
    quote: "Email isn't dead — bad email is. Great emails build relationships and revenue.",
    checklist: ["Email Strategy & Calendar", "Template Design & Coding", "Automated Drip Sequences", "A/B Testing Campaigns", "List Segmentation", "Deliverability Optimization", "CRM Integration", "Analytics & Reporting", "Re-engagement Campaigns", "Compliance (GDPR/CAN-SPAM)"],
    pricing: "₹10,000/month",
    tags: ["Campaigns", "Automation", "Lists"],
    metrics: [{ value: "35%+", label: "Avg Open Rate" }, { value: "12×", label: "ROI Average" }, { value: "1M+", label: "Emails Sent" }],
    overviewStats: [{ value: "35%+", label: "Average Open Rate" }, { value: "1M+", label: "Emails Delivered" }, { value: "12×", label: "Average ROI" }, { value: "99%", label: "Deliverability Rate" }],
    steps: [
      { title: "Audit & Setup", desc: "Review existing email infrastructure and set up tools.", duration: "Week 1" },
      { title: "List Strategy", desc: "Segmentation, tagging, and lead scoring setup.", duration: "Week 1–2" },
      { title: "Template Design", desc: "Custom email templates matching your brand.", duration: "Week 2–3" },
      { title: "Sequence Building", desc: "Automated welcome, nurture, and sales sequences.", duration: "Week 3–4" },
      { title: "Launch & Test", desc: "A/B testing subject lines, CTAs, and send times.", duration: "Week 4" },
      { title: "Optimize & Report", desc: "Monthly performance review and optimization.", duration: "Monthly" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "D2C Beauty", result: "42% Open Rate Achieved", timeline: "In 6 weeks" },
      { brand: "Brand B", industry: "SaaS Platform", result: "28% Revenue from Email", timeline: "In 3 months" },
      { brand: "Brand C", industry: "Education", result: "15,000 Leads Nurtured", timeline: "In 4 months" },
    ],
    relatedSlugs: ["digital-marketing", "influencer-marketing", "seo-optimization"],
    ctaHeadingLine1: "Let's Launch Your",
    ctaHeadingLine2: "Email Campaigns",
    ctaOffer: "Get a free email marketing audit — find revenue you're leaving on the table.",
  },
  "influencer-marketing": {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    titleLine1: "Influencer",
    titleLine2: "Marketing",
    strokeLine: "That Amplifies",
    titleLine4: "Your Brand.",
    icon: Users,
    category: "SOCIAL & INFLUENCE",
    desc: "Strategic influencer partnerships that amplify your brand to the right audiences.",
    longDesc: [
      "Influencer marketing leverages trusted voices to authentically promote your brand to highly engaged audiences across social platforms.",
      "We handle everything — from influencer discovery and vetting to campaign execution and ROI tracking. Our network spans micro to macro influencers across niches.",
      "The right influencer partnership doesn't just generate views — it builds trust, drives sales, and creates content that your brand can repurpose across channels.",
    ],
    quote: "People trust people, not ads. That's why influencer marketing works.",
    checklist: ["Influencer Discovery & Vetting", "Campaign Strategy & Briefs", "Content Collaboration", "Approval Workflows", "Performance Tracking", "UGC Content Rights", "Cross-Platform Campaigns", "Monthly Reports", "Micro & Macro Influencers", "ROI Attribution"],
    pricing: "₹15,000/campaign",
    tags: ["Instagram", "YouTube", "Collab"],
    metrics: [{ value: "500+", label: "Influencers Network" }, { value: "50M+", label: "Total Reach" }, { value: "8%", label: "Avg Engagement" }],
    overviewStats: [{ value: "500+", label: "Influencer Network" }, { value: "50M+", label: "Cumulative Reach" }, { value: "8%", label: "Avg Engagement Rate" }, { value: "100+", label: "Campaigns Executed" }],
    steps: [
      { title: "Goal Setting", desc: "Define campaign objectives, KPIs, and target audience.", duration: "Week 1" },
      { title: "Influencer Selection", desc: "Shortlist and vet influencers based on niche and engagement.", duration: "Week 1–2" },
      { title: "Brief & Negotiate", desc: "Create campaign briefs and negotiate terms.", duration: "Week 2–3" },
      { title: "Content Creation", desc: "Collaborative content development with approval cycles.", duration: "Week 3–4" },
      { title: "Campaign Launch", desc: "Coordinated posting schedule across platforms.", duration: "Week 4–5" },
      { title: "Track & Report", desc: "Real-time tracking dashboard and post-campaign analysis.", duration: "Week 5–6" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "Fitness & Wellness", result: "2M+ Impressions in 1 Week", timeline: "In 7 days" },
      { brand: "Brand B", industry: "Food & Beverage", result: "15,000 New Followers", timeline: "In 2 weeks" },
      { brand: "Brand C", industry: "Fashion", result: "₹8L Sales from Single Campaign", timeline: "In 1 month" },
    ],
    relatedSlugs: ["digital-marketing", "product-shoot", "email-marketing"],
    ctaHeadingLine1: "Let's Amplify Your",
    ctaHeadingLine2: "Brand Influence",
    ctaOffer: "Get a free influencer strategy consultation — let's find your perfect partners.",
  },
  "ecommerce-listing": {
    slug: "ecommerce-listing",
    title: "Ecommerce Listing",
    titleLine1: "Ecommerce",
    titleLine2: "Listing",
    strokeLine: "That Sells",
    titleLine4: "On Every Platform.",
    icon: ShoppingBag,
    category: "MARKETPLACE & SALES",
    desc: "Optimized product listings that rank higher and sell faster on every marketplace.",
    longDesc: [
      "Ecommerce listing optimization ensures your products stand out and convert on platforms like Amazon, Flipkart, Meesho, and more.",
      "We optimize every element — titles, descriptions, keywords, images, and A+ content — to maximize visibility and conversion rates on each marketplace.",
      "With millions of products competing for attention, professionally optimized listings are the difference between page 1 sales and invisibility.",
    ],
    quote: "Your listing is your salesperson on the marketplace — make it compelling.",
    checklist: ["Product Title Optimization", "Keyword Research (Marketplace-specific)", "Description & Bullet Points", "A+ / Enhanced Brand Content", "Image Guidelines Compliance", "Backend Search Terms", "Price & Competitor Analysis", "Review Strategy", "Inventory Sync Setup", "Performance Dashboard"],
    pricing: "₹8,000/month",
    tags: ["Amazon", "Flipkart", "Meesho"],
    metrics: [{ value: "1000+", label: "Listings Optimized" }, { value: "3×", label: "Sales Uplift" }, { value: "50+", label: "Brands Served" }],
    overviewStats: [{ value: "1000+", label: "Listings Optimized" }, { value: "3×", label: "Avg Sales Uplift" }, { value: "50+", label: "Brands Managed" }, { value: "5", label: "Marketplaces Covered" }],
    steps: [
      { title: "Catalog Audit", desc: "Review existing listings and identify gaps.", duration: "Week 1" },
      { title: "Keyword Research", desc: "Platform-specific keyword mapping for each product.", duration: "Week 1–2" },
      { title: "Content Optimization", desc: "Rewrite titles, bullets, and descriptions for conversion.", duration: "Week 2–3" },
      { title: "A+ Content Design", desc: "Enhanced brand content with lifestyle imagery.", duration: "Week 3–4" },
      { title: "Launch & Monitor", desc: "Publish optimized listings and track performance.", duration: "Week 4" },
      { title: "Iterate & Report", desc: "Monthly optimization based on sales and search data.", duration: "Monthly" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "Home & Kitchen", result: "3× Sales on Amazon", timeline: "In 2 months" },
      { brand: "Brand B", industry: "Beauty", result: "Page 1 on 45 Keywords", timeline: "In 6 weeks" },
      { brand: "Brand C", industry: "Electronics", result: "₹15L Monthly Revenue", timeline: "In 3 months" },
    ],
    relatedSlugs: ["seo-optimization", "product-shoot", "digital-marketing"],
    ctaHeadingLine1: "Let's Optimize Your",
    ctaHeadingLine2: "Product Listings",
    ctaOffer: "Get a free listing audit — see how your products stack up against competitors.",
  },
  "product-shoot": {
    slug: "product-shoot",
    title: "Product Shoot",
    titleLine1: "Product",
    titleLine2: "Shoot",
    strokeLine: "That Makes You",
    titleLine4: "Look Premium.",
    icon: Camera,
    category: "PHOTOGRAPHY & CONTENT",
    desc: "Professional product photography that makes your brand look premium and trustworthy.",
    longDesc: [
      "Product photography is the first impression your product makes online. High-quality images directly impact click-through rates, conversion rates, and perceived brand value.",
      "We offer studio shoots, lifestyle photography, and 360° product views — all optimized for e-commerce platforms, social media, and your website.",
      "Our team handles everything from concept and styling to post-production, delivering e-commerce-ready files that meet every platform's guidelines.",
    ],
    quote: "Customers can't touch your product online — your photos need to do the selling.",
    checklist: ["Studio Product Photography", "Lifestyle & In-Context Shoots", "360° Product Views", "Flat Lay Compositions", "Model Photography", "Post-Production & Retouching", "E-commerce Ready Formats", "Social Media Optimized Crops", "Product Video Clips", "White Background Edits"],
    pricing: "₹5,000/shoot",
    tags: ["Studio", "Lifestyle", "360°"],
    metrics: [{ value: "5000+", label: "Products Shot" }, { value: "100+", label: "Brands Served" }, { value: "24hrs", label: "Turnaround" }],
    overviewStats: [{ value: "5000+", label: "Products Photographed" }, { value: "100+", label: "Brands Served" }, { value: "24hrs", label: "Express Turnaround" }, { value: "4K", label: "Resolution Quality" }],
    steps: [
      { title: "Brief & Concept", desc: "Understand product, target audience, and shoot direction.", duration: "Day 1" },
      { title: "Pre-Production", desc: "Styling, prop sourcing, and shot list preparation.", duration: "Day 1–2" },
      { title: "Studio Shoot", desc: "Professional shoot with lighting and composition.", duration: "Day 2–3" },
      { title: "Post-Production", desc: "Editing, retouching, and color correction.", duration: "Day 3–4" },
      { title: "Format & Deliver", desc: "Multiple formats for e-commerce, web, and social.", duration: "Day 4–5" },
      { title: "Revisions", desc: "Up to 2 rounds of revisions included.", duration: "Day 5" },
    ],
    caseStudies: [
      { brand: "Brand A", industry: "Jewelry", result: "40% Higher Click-Through Rate", timeline: "Post-shoot" },
      { brand: "Brand B", industry: "Food & Snacks", result: "2× Amazon Conversion Rate", timeline: "In 1 month" },
      { brand: "Brand C", industry: "Fashion", result: "Featured on Myntra Homepage", timeline: "In 2 weeks" },
    ],
    relatedSlugs: ["ecommerce-listing", "brand-identity", "website-design"],
    ctaHeadingLine1: "Let's Make Your",
    ctaHeadingLine2: "Products Shine",
    ctaOffer: "Book a free consultation — let's plan your next product shoot.",
  },
  "podcast-production": {
    slug: "podcast-production",
    title: "Podcast Production",
    titleLine1: "Podcast",
    titleLine2: "Production",
    strokeLine: "That Elevates",
    titleLine4: "Your Brand's Voice.",
    icon: Mic,
    category: "CONTENT & ENGAGEMENT",
    desc: "End-to-end podcast production, editing, and distribution services to build authority and connect with your audience.",
    keywords: "podcast production, podcast editing, podcast distribution, podcast marketing, audio production, podcast hosting, Spotify podcasts, Apple Podcasts, podcast strategy, podcast branding, audio editing, podcast creation",
    longDesc: [
      "Podcasting is one of the fastest-growing content channels for brand building. A professional podcast positions your brand as an industry authority, creating deep, personal connections with listeners that traditional text or social posts can't replicate.",
      "At Ayron, we make podcasting effortless. We handle the entire lifecycle — from concept development, guest scripting, and recording guidance, to professional sound design, audio editing, show notes creation, and distribution across Spotify, Apple Podcasts, and Amazon Music.",
      "We don't just produce audio; we create high-value content engines. We slice your long-form episodes into viral video shorts, reels, and blog posts to maximize your content reach and brand impact across all social platforms."
    ],
    quote: "A podcast is a direct line to your audience's ears — make every episode sound exceptional.",
    checklist: [
      "Concept & Show Format Strategy",
      "Audio Editing & Noise Clean-up",
      "Intro/Outro & Sound Effects Design",
      "Show Notes & Transcript Writing",
      "Cover Art & Branding Design",
      "Platform Setup & Distribution (Spotify, Apple)",
      "Video Podcast Editing (Reels/Shorts)",
      "Guest Outreach & Briefing Templates",
      "SEO-Optimized Episode Descriptions",
      "Monthly Listener Analytics Reports"
    ],
    pricing: "₹12,000/episode onwards",
    tags: ["Audio Editing", "Distribution", "Content Repurposing"],
    metrics: [
      { value: "10k+", label: "Avg Downloads" },
      { value: "98%", label: "Listener Retention" },
      { value: "5.0★", label: "Audio Rating" }
    ],
    overviewStats: [
      { value: "50+", label: "Episodes Produced" },
      { value: "10k+", label: "Average Downloads" },
      { value: "4.8★", label: "Average Rating" },
      { value: "100%", label: "Platform Distribution" }
    ],
    steps: [
      { title: "Concept & Setup", desc: "Define your show's theme, target listener, format, and set up hosting platforms.", duration: "Week 1–2" },
      { title: "Scripting & Prep", desc: "Outline episode structures, draft guest interview questions, and prep recording guides.", duration: "Week 2–3" },
      { title: "Recording Support", desc: "Guidance on choosing microphones, software, and real-time remote recording setup.", duration: "Week 3" },
      { title: "Post-Production", desc: "Professional editing, noise removal, volume leveling, adding intros/outros and ads.", duration: "Ongoing" },
      { title: "Distribution & SEO", desc: "Upload to host, write search-optimized show notes, publish to Spotify/Apple.", duration: "Ongoing" },
      { title: "Repurpose & Promote", desc: "Create short-form video reels, audiograms, and promotional graphics.", duration: "Weekly" }
    ],
    caseStudies: [
      { brand: "FinTech Pod", industry: "Financial Services", result: "25k+ Monthly Listeners", timeline: "In 6 months" },
      { brand: "D2C Founders", industry: "E-commerce Hub", result: "#12 Trending in Tech (India)", timeline: "In 3 months" },
      { brand: "Creator Show", industry: "Lifestyle", result: "150k+ Reel Views per Episode", timeline: "In 4 months" }
    ],
    relatedSlugs: ["digital-marketing", "influencer-marketing", "brand-identity"],
    ctaHeadingLine1: "Ready to Launch",
    ctaHeadingLine2: "Your Podcast?",
    ctaOffer: "Get a free 30-minute podcast blueprint and recording equipment guide — custom for your niche."
  },
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    titleLine1: "Performance",
    titleLine2: "Marketing",
    strokeLine: "That Maximizes",
    titleLine4: "Your Return on Ad Spend.",
    icon: TrendingUp,
    category: "GROWTH & PERFORMANCE",
    desc: "Data-driven advertising campaigns focused on generating leads, scaling sales, and optimizing CPA/ROAS.",
    keywords: "performance marketing, ROAS, paid advertising, Google Ads, Meta ads, conversion optimization, lead generation, retargeting, advertising strategy, ad management, CPA optimization, performance analytics, paid search",
    longDesc: [
      "Performance marketing is about turning every advertising rupee into measurable business growth. Unlike traditional awareness ads, performance marketing focuses strictly on actions — leads, app installs, sign-ups, and purchases.",
      "At Ayron, we leverage advanced targeting, cohort analysis, and attribution modeling to identify and scale winning strategies. We manage high-converting campaigns across Google Search, Shopping, Meta Ads, and programmatic networks.",
      "We continuously test ad creatives, copy variants, landing page layouts, and bidding algorithms. By aligning search intent and buyer psychology, we lower your customer acquisition cost (CAC) and sustainably scale your business."
    ],
    quote: "Stop paying for impressions. Start paying for results that scale your bottom line.",
    checklist: [
      "Multi-Platform Ad Account Setup",
      "Meta Pixel & Conversion API Setup",
      "Google Tag Manager & Tracking",
      "Competitor Funnel Analysis",
      "Creative Ideation & Copywriting",
      "A/B Testing (Creatives, Landing Pages)",
      "Retargeting & Lookalike Audiences",
      "ROAS & LTV Cohort Tracking",
      "Weekly Budget & Bid Management",
      "Real-Time Reporting Dashboards"
    ],
    pricing: "₹25,000/month or % of ad spend",
    tags: ["ROAS Focus", "Paid Search", "Social Ads"],
    metrics: [
      { value: "5.1×", label: "Average ROAS" },
      { value: "₹8Cr+", label: "Ad Spend Managed" },
      { value: "-35%", label: "Reduction in CPA" }
    ],
    overviewStats: [
      { value: "150+", label: "Ad Accounts Scaled" },
      { value: "₹8Cr+", label: "Cumulative Spend" },
      { value: "5.1×", label: "Average ROAS" },
      { value: "24/7", label: "Bidding Optimization" }
    ],
    steps: [
      { title: "Funnel & Tracking Audit", desc: "Review site analytics, conversion tracking, pixels, and historic account performance.", duration: "Week 1" },
      { title: "Audience Profiling", desc: "Identify key customer avatars, high-intent keywords, and competitor ad strategies.", duration: "Week 1–2" },
      { title: "Creative Production", desc: "Develop high-performing ad hooks, visual graphics, conversion copy, and landing pages.", duration: "Week 2–3" },
      { title: "Campaign Launch", desc: "Configure structured campaigns (Prospecting vs. Retargeting) with custom tracking parameters.", duration: "Week 3" },
      { title: "Optimize & A/B Test", desc: "Monitor daily performance, cut low-performing ads, test new hooks, and adjust bids.", duration: "Ongoing" },
      { title: "Scale & Report", desc: "Increase budgets on winning ad sets, expand into new channels, and review monthly reports.", duration: "Monthly" }
    ],
    caseStudies: [
      { brand: "D2C Apparel", industry: "E-commerce", result: "6.2× Meta Ads ROAS", timeline: "In 3 months" },
      { brand: "Real Estate Group", industry: "Property Development", result: "550+ Qualified Leads at -30% CPL", timeline: "In 2 months" },
      { brand: "B2B SaaS", industry: "Software", result: "3.5× Demo Bookings", timeline: "In 4 months" }
    ],
    relatedSlugs: ["digital-marketing", "seo-optimization", "email-marketing"],
    ctaHeadingLine1: "Ready to Scale",
    ctaHeadingLine2: "Your Paid Ads?",
    ctaOffer: "Request a free performance marketing account audit — we'll find 3 quick wins to improve your ROAS."
  },
  "qcommerce": {
    slug: "qcommerce",
    title: "Q-Commerce",
    titleLine1: "Q-Commerce",
    titleLine2: "Management",
    strokeLine: "To Win the",
    titleLine4: "10-Minute Delivery Race.",
    icon: Zap,
    category: "MARKETPLACE & SALES",
    desc: "Complete optimization and growth services for quick commerce platforms like Zepto, Blinkit, Instamart, and BigBasket.",
    keywords: "Q-commerce management, Blinkit seller, Zepto seller, Swiggy Instamart, quick commerce optimization, fast delivery, instant delivery, marketplace management, inventory management, product listing optimization, Instamart seller",
    longDesc: [
      "Quick Commerce is reshaping consumer behavior. Today, customers expect grocery, wellness, beauty, and household items delivered in minutes. Standing out on platforms like Blinkit, Zepto, Swiggy Instamart, and BigBasket requires highly optimized positioning.",
      "We manage your brand's presence across q-commerce ecosystems. This includes creating high-converting product listings, setting up inventory sync, and designing lifestyle product cards that grab attention on small mobile screens.",
      "We run targeted sponsor ads on quick commerce search pages and execute keyword bidding strategies. We also analyze warehouse levels to help you prevent stockouts, ensuring your products remain visible and order-ready 24/7."
    ],
    quote: "If you're out of stock on quick commerce, you're invisible. Keep your listings optimized and delivery-ready.",
    checklist: [
      "Zepto, Blinkit, Instamart Onboarding",
      "Q-Commerce Ready Product Images",
      "High-Impact Short Titles & Bullets",
      "Sponsored Search & Banner Ads",
      "Keyword Optimization for Instant Search",
      "Warehouse-level Inventory Audits",
      "Competitor Pricing & Share of Voice",
      "Combo-Pack & Bundle Strategies",
      "Direct-to-Warehouse Supply Planning",
      "Weekly Sales & ROAS Reports"
    ],
    pricing: "₹20,000/month onwards",
    tags: ["Zepto & Blinkit", "Instamart Ads", "Inventory Planning"],
    metrics: [
      { value: "3.2×", label: "Sales Multiplier" },
      { value: "<15m", label: "Inventory Sync" },
      { value: "45%+", label: "Repeat Buyers" }
    ],
    overviewStats: [
      { value: "3.2×", label: "Average Sales Growth" },
      { value: "10+", label: "Brands Launched" },
      { value: "99.8%", label: "Stock-in Rate" },
      { value: "4.5★", label: "Average Seller Rating" }
    ],
    steps: [
      { title: "Platform Onboarding", desc: "Coordinate document submission, brand approval, and warehouse registration across platforms.", duration: "Week 1–2" },
      { title: "Listing Optimization", desc: "Draft high-converting product names, design mobile-friendly infographics, and set categories.", duration: "Week 2–3" },
      { title: "Inventory Sync Setup", desc: "Connect ERP or set up inventory tracking to monitor stock across regional dark stores.", duration: "Week 3" },
      { title: "Sponsored Ads Setup", desc: "Launch targeted search ads, category banner ads, and cross-sell promotions.", duration: "Week 4" },
      { title: "Supply Chain Audit", desc: "Analyze dark store velocity and generate replenishment requests to avoid stock-outs.", duration: "Ongoing" },
      { title: "Performance Review", desc: "Track share of voice, ROAS, conversion rate, and customer feedback.", duration: "Weekly" }
    ],
    caseStudies: [
      { brand: "Snacks Brand", industry: "FMCG", result: "4.5× Monthly Orders on Blinkit", timeline: "In 3 months" },
      { brand: "Organic Skincare", industry: "Personal Care", result: "300% Growth on Zepto & Instamart", timeline: "In 6 weeks" },
      { brand: "Pet Food Co", industry: "Pet Supplies", result: "Best Seller Badge in Category", timeline: "In 2 months" }
    ],
    relatedSlugs: ["ecommerce-listing", "product-shoot", "digital-marketing"],
    ctaHeadingLine1: "Ready to Scale on",
    ctaHeadingLine2: "Quick Commerce?",
    ctaOffer: "Get a free Q-Commerce audit — we'll check your brand's share of voice and listing health on Swiggy Instamart and Blinkit."
  },
};

export default servicesData;
