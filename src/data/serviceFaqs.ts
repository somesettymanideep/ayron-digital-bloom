export interface FAQ {
  q: string;
  a: string;
}

const serviceFaqs: Record<string, FAQ[]> = {
  "seo-optimization": [
    { q: "How long does SEO take to show results?", a: "Most clients see meaningful ranking improvements between 3–6 months. SEO is a compounding investment — the longer you stay consistent, the stronger the results." },
    { q: "Do you offer local SEO for Vijayawada & Guntur?", a: "Yes. We optimize Google Business Profiles, build local citations, and target geo-specific keywords to help businesses dominate Vijayawada and Guntur search results." },
    { q: "Will I receive monthly SEO reports?", a: "Absolutely. You'll receive a detailed monthly report covering keyword rankings, organic traffic, backlinks acquired, and the next month's action plan." },
    { q: "Do you use white-hat SEO techniques only?", a: "100%. We follow Google's Webmaster Guidelines strictly — no PBNs, no spammy links, no shortcuts that could harm your brand." },
    { q: "Can you fix our existing SEO issues?", a: "Yes. We start with a full technical and on-page audit, then prioritize fixes that have the biggest impact on rankings and traffic." },
  ],
  "digital-marketing": [
    { q: "Which platforms do you run ads on?", a: "Google Search, Google Display, YouTube, Meta (Facebook & Instagram), LinkedIn, and programmatic networks — whichever channels match your audience best." },
    { q: "What's the minimum ad budget required?", a: "We typically recommend a minimum monthly ad spend of ₹30,000 for meaningful results, but we tailor strategies to your business goals and budget." },
    { q: "Do you provide ad creatives as well?", a: "Yes. Our in-house creative team designs static ads, motion graphics, and short-form video creatives optimized for each platform." },
    { q: "How do you measure campaign success?", a: "We track ROAS, CPL, CPA, conversion rates, and revenue attribution — not vanity metrics like impressions or reach alone." },
    { q: "Can you handle ads and organic together?", a: "Yes — integrated paid + organic strategies always outperform siloed efforts. We sync messaging, audiences, and learnings across both." },
  ],
  "website-design": [
    { q: "Why is Ayron the best website development company in Vijayawada?", a: "We combine pixel-perfect UI/UX, SEO-friendly code, sub-2-second load speeds, and conversion-focused layouts — built specifically for businesses in Vijayawada, Guntur, and across India." },
    { q: "How long does a website project take?", a: "Most websites are delivered in 4–6 weeks from kickoff. Larger e-commerce or custom builds may take 8–10 weeks." },
    { q: "Will my website be mobile-friendly and SEO-ready?", a: "Yes. Every website we build is mobile-first, lighthouse-optimized, and structured with proper schema, meta tags, and semantic HTML for SEO." },
    { q: "Do you provide post-launch support?", a: "Yes — every project includes 30 days of free post-launch support. We also offer monthly maintenance packages for ongoing updates and security." },
    { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, preserve what's working, and redesign for better conversions, speed, and modern aesthetics." },
  ],
  "brand-identity": [
    { q: "What's included in a brand identity package?", a: "Logo (with variations), color palette, typography system, brand guidelines document, business card, letterhead, and social media templates." },
    { q: "How many logo concepts will I get?", a: "We present 3–5 unique logo concepts in the first round, each with strategic rationale. Revisions are unlimited within scope." },
    { q: "Do I own full rights to the final design?", a: "Yes — once the project is complete and paid, all source files and full ownership rights are transferred to you." },
    { q: "Can you rebrand an existing business?", a: "Definitely. We've successfully rebranded restaurants, startups, and established companies — preserving brand equity while modernizing the identity." },
    { q: "Do you provide source files (Ai, PSD)?", a: "Yes. You'll receive editable Adobe Illustrator, Photoshop, PNG, JPG, and PDF files for every asset created." },
  ],
  "email-marketing": [
    { q: "Which email platforms do you work with?", a: "Klaviyo, Mailchimp, HubSpot, ActiveCampaign, ConvertKit, Brevo (Sendinblue), and most major ESPs. We'll recommend the best fit for your business." },
    { q: "Can you build automated email sequences?", a: "Yes — welcome series, abandoned cart, post-purchase, win-back, and lead nurture automations are all part of our service." },
    { q: "How do you improve open rates?", a: "Through subject line A/B testing, sender reputation management, list segmentation, send-time optimization, and clean list hygiene." },
    { q: "Do you write the email copy and design?", a: "Yes. Our copywriters and designers handle everything end-to-end — from subject lines to mobile-responsive HTML templates." },
    { q: "How do you handle deliverability issues?", a: "We set up SPF, DKIM, DMARC, monitor sender reputation, and clean inactive subscribers regularly to keep your emails landing in the inbox." },
  ],
  "influencer-marketing": [
    { q: "How do you choose the right influencers?", a: "We vet influencers on audience demographics, engagement quality, content alignment, past brand collaborations, and authenticity — not just follower count." },
    { q: "Do you work with micro or macro influencers?", a: "Both. Micro-influencers (10K–100K) often deliver higher engagement and ROI, while macro/celeb influencers drive broader awareness. We recommend the right mix for your goals." },
    { q: "How is campaign performance tracked?", a: "We track reach, engagement, click-throughs, conversions (via UTMs and promo codes), and provide a comprehensive post-campaign report." },
    { q: "Do you get content rights for repurposing?", a: "Yes — we negotiate usage rights upfront so you can repurpose influencer content for paid ads, social posts, and email campaigns." },
    { q: "What platforms do you cover?", a: "Instagram, YouTube, LinkedIn, Twitter/X, and emerging platforms based on your audience and category." },
  ],
  "ecommerce-listing": [
    { q: "Which marketplaces do you optimize for?", a: "Amazon, Flipkart, Meesho, Myntra, Ajio, Nykaa, Shopify, and most major Indian and global marketplaces." },
    { q: "What's included in listing optimization?", a: "Title optimization, bullet points, descriptions, A+ content, backend keywords, image guidelines compliance, and pricing/competitor analysis." },
    { q: "How quickly will I see sales improvement?", a: "Most clients see ranking improvements within 2–4 weeks and meaningful sales uplift within 6–8 weeks of relisting." },
    { q: "Can you handle Amazon Ads (PPC) too?", a: "Yes — Sponsored Products, Sponsored Brands, and Sponsored Display campaigns are part of our marketplace management services." },
    { q: "Do you create A+ / Enhanced Brand Content?", a: "Absolutely. We design A+ content with lifestyle imagery, comparison charts, and brand storytelling to lift conversion rates." },
  ],
  "product-shoot": [
    { q: "Where do shoots take place?", a: "We have a fully equipped studio in Vijayawada, and we also travel on-location for lifestyle and outdoor shoots across Andhra Pradesh." },
    { q: "What's the turnaround time?", a: "Standard delivery is 4–5 working days after the shoot. Express 24–48 hour delivery is available on request." },
    { q: "How many revisions are included?", a: "Up to 2 rounds of post-production revisions are included free. Additional rounds are billed at a flat per-image rate." },
    { q: "Can you shoot in multiple formats (e-com, social, ads)?", a: "Yes — we deliver crops and aspect ratios optimized for Amazon, Flipkart, Instagram, Meta Ads, and your website in a single shoot." },
    { q: "Do you offer model and lifestyle shoots?", a: "Yes. We coordinate model casting, styling, props, and locations for full lifestyle campaigns." },
  ],
  "podcast-production": [
    { q: "Do I need my own recording equipment?", a: "No — we provide guidance on basic equipment if you want to record from home, or you can use our podcast studio in Vijayawada." },
    { q: "Which platforms do you distribute to?", a: "Spotify, Apple Podcasts, Amazon Music, Google Podcasts, JioSaavn, and all major podcast directories via a single host setup." },
    { q: "Can you repurpose episodes into reels and shorts?", a: "Yes. Every episode is sliced into 4–6 short-form video clips for Instagram Reels, YouTube Shorts, and LinkedIn." },
    { q: "Do you help with guest outreach?", a: "Yes — we provide guest outreach templates, briefing documents, and can coordinate interviews on your behalf." },
    { q: "How long does it take to launch a podcast?", a: "From concept to first episode live, a typical launch takes 3–4 weeks including branding, hosting setup, and pilot recording." },
  ],
  "performance-marketing": [
    { q: "What's the difference between performance and digital marketing?", a: "Performance marketing is strictly outcome-based — you pay for measurable actions (leads, sales, installs). Digital marketing is broader and includes brand-building activities." },
    { q: "What ROAS can I expect?", a: "Our clients average 4–6× ROAS, depending on industry, AOV, and funnel maturity. We share realistic projections after a free account audit." },
    { q: "Do you set up tracking and pixels?", a: "Yes — Meta Pixel, Google Tag Manager, Conversion API, GA4, and server-side tracking are part of every setup." },
    { q: "How quickly can campaigns be launched?", a: "Most campaigns go live within 7–10 days of kickoff, including creative production, account setup, and tracking validation." },
    { q: "Do you produce video ad creatives?", a: "Yes. Our team produces UGC-style videos, motion graphics, and static ads — the formats that perform best on Meta and Google." },
  ],
  "qcommerce": [
    { q: "Which q-commerce platforms do you manage?", a: "Blinkit, Zepto, Swiggy Instamart, BigBasket Now, Dunzo Daily, and other emerging quick commerce platforms across India." },
    { q: "How do you handle inventory across dark stores?", a: "We set up inventory sync, monitor dark-store level stock, and generate replenishment alerts to prevent stockouts in high-velocity zones." },
    { q: "Can you run sponsored ads on Blinkit & Zepto?", a: "Yes — we manage Sponsored Search, banner placements, and keyword bidding across all major q-commerce ad platforms." },
    { q: "Do you provide product photography for q-commerce?", a: "Yes. Q-commerce listings need mobile-optimized, high-contrast imagery — we shoot and edit specifically for these small-screen formats." },
    { q: "What's the typical sales uplift?", a: "Most brands see 2–4× sales growth within the first 3 months when listings, pricing, ads, and stock-keeping are optimized together." },
  ],
};

export const defaultFaqs: FAQ[] = [
  { q: "How do I get started?", a: "Simply fill out our contact form or message us on WhatsApp. We'll schedule a free consultation and share a custom proposal within 48 hours." },
  { q: "What does pricing look like?", a: "Pricing depends on scope and deliverables. We offer transparent project-based and monthly retainer packages — and we'll always share a detailed quote upfront." },
  { q: "Do you work with small businesses?", a: "Yes. We work with everyone from early-stage startups to established enterprises, with packages scaled to fit your stage and budget." },
  { q: "Where are you located?", a: "Our team is based in Vijayawada, Andhra Pradesh. We serve clients across Vijayawada, Guntur, and pan-India remotely." },
  { q: "Will I have a dedicated point of contact?", a: "Yes — every client is assigned a dedicated account manager who handles day-to-day communication and weekly check-ins." },
];

export default serviceFaqs;
