import { motion } from "framer-motion";
import blogShopifyVsWordpress from "@/assets/blog/blog-shopify-vs-wordpress.jpg";

const blogs = [
  {
    category: "Ecommerce",
    title: "Shopify vs. WordPress: Which Ecommerce Platform Fits Your Business?",
    excerpt: "In today's hyper-competitive digital marketplace, launching an online store is no longer just about having a great product; it is about choosing the right foundation for your business to grow.",
    date: "May 2026",
    author: "Team Ayron",
    readTime: "6 min read",
    image: blogShopifyVsWordpress,
  },
];

const BlogSection = () => (
  <section id="blog" className="bg-secondary py-20" data-animate="fade-up">
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
      <div className="flex justify-center">
        {blogs.map((blog, i) => (
          <motion.article
            key={blog.title}
            className="group cursor-pointer relative bg-secondary border border-primary/10 transition-all duration-400 hover:-translate-y-1.5 max-w-3xl w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(244,124,65,0.16)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {/* Image placeholder */}
            <div className="bg-background relative overflow-hidden h-64 sm:h-96">
              <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-body text-xs px-3 py-1 font-medium tracking-wide">
                {blog.category}
              </span>
            </div>

            <div className="p-8 sm:p-10">
              <p className="font-body text-xs text-muted-foreground mb-3 font-medium tracking-wider">{blog.date}</p>
              <h3 className="font-display text-3xl sm:text-4xl text-secondary-foreground group-hover:text-primary transition-colors duration-300 mb-4 leading-tight">
                {blog.title}
              </h3>
              <p className="font-body font-light text-muted-foreground text-base leading-relaxed mb-6">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-primary/5 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-display shadow-sm font-semibold">A</div>
                  <span className="font-body text-sm text-muted-foreground font-medium">{blog.author}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="font-body text-sm text-muted-foreground">{blog.readTime}</span>
                </div>
                <span className="text-primary font-body text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1">
                  Read More <span className="text-lg">→</span>
                </span>
              </div>
            </div>

            {/* Hover underbar */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary group-hover:w-full transition-all duration-500" />
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
