import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import blogShopifyVsWordpress from "@/assets/blog/difference-between-shopify-vs-wordpress.png";

const allBlogs = [
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

const Blog = () => (
  <main className="pt-16">
    <SEO
      title="Blog"
      description="Digital marketing strategies, industry insights, and growth tactics from the Ayron Digital Solutions team."
      canonical="/blog"
    />
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
        <div className="flex justify-center">
          {allBlogs.map((blog, i) => (
            <Link to={`/blog/${blog.slug}`} key={blog.title} className="block w-full max-w-3xl">
              <motion.article
                className="group cursor-pointer relative bg-secondary border border-primary/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(244,124,65,0.16)] transition-all duration-400 hover:-translate-y-1.5 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {/* Image placeholder */}
                <div className="bg-background relative overflow-hidden h-64 sm:h-96">
                  <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover animate-image-fade" />
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
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-display shadow-sm font-semibold">
                        A
                      </div>
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
            </Link>
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
