import blogShopifyVsWordpress from "@/assets/blog/difference-between-shopify-vs-wordpress.png";
import blogMostTrustedAgency from "@/assets/blog/top-digital-marketing-agency.jpeg";
import blogLongTermSuccess from "@/assets/blog/digital-marketing-company.webp";
import blogBestAgency from "@/assets/blog/ayron-digital-solutions.webp";
import blogBenefitsHiring from "@/assets/blog/digital-marketing-agency.png";

export interface Blog {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    readTime: string;
    image: string;
}

export const allBlogs: Blog[] = [
    {
        slug: "10-benefits-of-hiring-the-best-digital-marketing-company-in-vijayawada",
        category: "Digital Marketing",
        title: "10 Benefits of Hiring the Best Digital Marketing Company in Vijayawada for Your Brand",
        excerpt: "A strong digital presence is essential for a growing business. Partnering with the best digital marketing agency in Vijayawada is a way to improve your business's online presence and gain more potential customers.",
        date: "July 2026",
        author: "Team Ayron",
        readTime: "8 min read",
        image: blogBenefitsHiring,
    },
    {
        slug: "best-digital-marketing-agency-vijayawada-ayron-wins",
        category: "Digital Marketing",
        title: "Best Digital Marketing Agency in Vijayawada? Why Ayron Digital Solutions Wins",
        excerpt: "Ayron Digital Solutions stands out as a top digital marketing agency in Vijayawada because it offers everything under one roof—web design, SEO, paid ads, WhatsApp marketing, e-commerce listing, quick commerce, logo design, product shoots, and content creation.",
        date: "June 2026",
        author: "Team Ayron",
        readTime: "10 min read",
        image: blogBestAgency,
    },
    {
        slug: "digital-marketing-services-in-vijayawada",
        category: "Digital Marketing",
        title: "The Secret Behind Long-Term Business Success with a Leading Digital Marketing Agency",
        excerpt: "Every successful business has a strong digital foundation behind it. In today's competitive landscape, building a sustainable brand requires more than just launching a website—it demands a strategic, data-driven approach to online growth.",
        date: "June 2026",
        author: "Team Ayron",
        readTime: "7 min read",
        image: blogLongTermSuccess,
    },
    {
        slug: "most-trusted-digital-marketing-agency-vijayawada",
        category: "Digital Marketing",
        title: "Why Ayron Digital Solutions is the Most Trusted Digital Marketing Agency in Vijayawada",
        excerpt: "In the rapidly evolving digital landscape of Vijayawada, businesses of all sizes are increasingly recognizing the necessity of a robust online presence. The journey from being just visible online to actually driving measurable growth requires not just a digital marketer, but a trusted partner who understands the local nuances, possesses deep expertise, and consistently delivers results.",
        date: "June 2026",
        author: "Team Ayron",
        readTime: "8 min read",
        image: blogMostTrustedAgency,
    },
    {
        slug: "shopify-vs-wordpress",
        category: "Ecommerce",
        title: "Shopify vs. WordPress: Which Ecommerce Platform Fits Your Business?",
        excerpt: "In today's hyper-competitive digital marketplace, launching an online store is no longer just about having a great product; it is about choosing the right foundation for your business to grow.",
        date: "May 2026",
        author: "Team Ayron",
        readTime: "6 min read",
        image: blogShopifyVsWordpress,
    },
];
