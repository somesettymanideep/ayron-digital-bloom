import { motion } from "framer-motion";
import blogSeo from "@/assets/blog/blog-seo.jpg";
import blogEmail from "@/assets/blog/blog-email.jpg";
import blogInfluencer from "@/assets/blog/blog-influencer.jpg";

const blogs = [
  {
    category: "SEO",
    title: "10 SEO Mistakes Killing Your Google Rankings in 2026",
    excerpt: "Most brands unknowingly sabotage their search visibility. Here are the critical errors we see repeatedly — and how to fix them fast.",
    date: "Feb 2026",
    author: "Team Ayron",
    readTime: "5 min read",
    featured: true,
    image: blogSeo,
  },
  {
    category: "Email",
    title: "Why Every Brand Needs Email Marketing in 2026 (Not Just Social Media)",
    excerpt: "Email marketing still delivers the highest ROI. Here's why you can't afford to ignore it.",
    date: "Jan 2026",
    author: "Team Ayron",
    readTime: "4 min read",
    image: blogEmail,
  },
  {
    category: "Influencer",
    title: "Instagram Influencer Marketing: How to Pick the Right Creator",
    excerpt: "Choosing the wrong influencer wastes budget. Learn our framework for creator selection.",
    date: "Jan 2026",
    author: "Team Ayron",
    readTime: "6 min read",
    image: blogInfluencer,
  },
];

const BlogSection = () => (
  <section id="blog" className="bg-secondary py-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
        <div>
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">Insights & Tips</span>
          <h2 className="font-display text-5xl text-secondary-foreground mt-1">
            From Our <span className="font-serif-accent italic text-primary">Playbook</span>
          </h2>
        </div>
        <a href="#blog" className="text-primary font-body text-sm hover:underline underline-offset-4">
          View All Posts →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {blogs.map((blog, i) => (
          <motion.article
            key={blog.title}
            className={`group cursor-pointer relative bg-secondary border border-primary/10 transition-all duration-400 hover:-translate-y-1.5 ${
              blog.featured ? "md:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Image placeholder */}
            <div className={`bg-background relative overflow-hidden ${blog.featured ? "h-64" : "h-48"}`}>
              <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-body text-xs px-3 py-1">
                {blog.category}
              </span>
            </div>

            <div className="p-6">
              <p className="font-body text-xs text-muted-foreground mb-2">{blog.date}</p>
              <h3 className={`font-display ${blog.featured ? "text-3xl" : "text-2xl"} text-secondary-foreground group-hover:text-primary transition-colors mb-3`}>
                {blog.title}
              </h3>
              <p className="font-body font-light text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-display">A</div>
                  <span className="font-body text-xs text-muted-foreground">{blog.author}</span>
                  <span className="font-body text-xs text-muted-foreground">· {blog.readTime}</span>
                </div>
                <span className="text-primary font-body text-sm group-hover:translate-x-1 transition-transform inline-block">
                  Read More →
                </span>
              </div>
            </div>

            {/* Hover underbar */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500" />
          </motion.article>
        ))}
      </div>

      {/* Subscribe strip */}
      <div className="bg-primary mt-12 py-8 px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-primary-foreground font-body text-lg">Want digital marketing insights every week?</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-secondary text-secondary-foreground font-body text-sm px-4 py-3 w-64 border-0 outline-none focus:ring-2 focus:ring-background"
          />
          <button className="bg-background text-foreground font-display text-lg px-6 py-3 hover:bg-muted transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
