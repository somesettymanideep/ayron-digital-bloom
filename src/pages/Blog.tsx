import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import blogSeo from "@/assets/blog/blog-seo.jpg";
import blogEmail from "@/assets/blog/blog-email.jpg";
import blogInfluencer from "@/assets/blog/blog-influencer.jpg";

const allBlogs = [
  {
    category: "SEO",
    title: "10 SEO Mistakes Killing Your Google Rankings in 2026",
    excerpt: "Most brands unknowingly sabotage their search visibility. Here are the critical errors we see repeatedly — and how to fix them fast.",
    date: "Feb 2026",
    author: "Team Ayron",
    readTime: "5 min read",
    image: blogSeo,
  },
  {
    category: "Email",
    title: "Why Every Brand Needs Email Marketing in 2026",
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

const Blog = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="bg-background py-20 px-6 md:px-12 text-center">
      <span className="text-primary text-xs tracking-[0.2em] uppercase font-body font-medium">
        Insights & Tips
      </span>
      <h1 className="font-display text-6xl md:text-8xl text-foreground mt-2">
        Our <span className="font-serif-accent italic text-primary">Blog</span>
      </h1>
      <p className="font-body font-light text-muted-foreground text-base mt-4 max-w-xl mx-auto">
        Digital marketing strategies, industry insights, and growth tactics from the Ayron team.
      </p>
    </section>

    {/* Blog Grid */}
    <section className="bg-secondary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              className="group cursor-pointer relative bg-secondary border border-primary/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(244,124,65,0.16)] transition-all duration-400 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            >
              {/* Image placeholder */}
              <div className="bg-background relative overflow-hidden h-48">
                <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-body text-xs px-3 py-1">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <p className="font-body text-xs text-muted-foreground mb-2">{blog.date}</p>
                <h3 className="font-display text-2xl text-secondary-foreground group-hover:text-primary transition-colors mb-3">
                  {blog.title}
                </h3>
                <p className="font-body font-light text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-display">
                      A
                    </div>
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
      </div>
    </section>

    {/* CTA strip */}
    <section className="bg-primary py-10 px-6 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-primary-foreground font-body text-lg">Have a project in mind? Let's talk.</p>
        <Link
          to="/contact"
          className="bg-background text-foreground font-display text-lg px-8 py-3 hover:bg-muted transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>

    <Footer />
  </main>
);

export default Blog;
