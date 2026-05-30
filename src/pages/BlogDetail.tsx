import { useParams, Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, CheckCircle2, ChevronRight, Phone, MessageSquare, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import blogShopifyVsWordpress from "@/assets/blog/difference-between-shopify-vs-wordpress.png";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { scrollYProgress } = useScroll();

  // Since we only have one blog post right now, we'll render it if the slug matches or default to it.
  const isCorrectSlug = slug === "shopify-vs-wordpress";

  if (!isCorrectSlug) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="font-display text-5xl mb-4 text-foreground">Blog Post Not Found</h1>
          <p className="font-body text-muted-foreground mb-8 font-light">The article you are looking for might have been moved or deleted.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 bg-background relative overflow-hidden text-foreground">
      <SEO
        title="Shopify vs. WordPress: Which Ecommerce Platform Fits Your Business?"
        description="Shopify vs. WordPress comparison for ecommerce website development. Analyze woocommerce shopify and wordpress shopify to choose the best shopify website development company."
        keywords="shopify and wordpress, woocommerce shopify, wordpress shopify, shopify ecommerce website, shopify website development, shopify development company, shopify web development company, shopify website development company, Shopify vs. WordPress, which Ecommerce Platform Fits Your Business"
        canonical="/blog/shopify-vs-wordpress"
      />

      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero / Header Section */}
      <section className="relative pt-20 pb-12 px-6 md:px-12 bg-background grid-bg noise-overlay border-b border-primary/10 overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-muted-foreground/30" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-muted-foreground/30" />
            <span className="text-foreground/90 font-medium truncate max-w-[200px] sm:max-w-none">Shopify vs. WordPress</span>
          </div>

          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-body text-xs font-semibold px-3 py-1 uppercase tracking-wider mb-4 rounded-sm border border-primary/20">
            <Tag className="w-3 h-3 text-primary" /> Ecommerce
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] mb-6 font-semibold tracking-wide">
            Shopify vs. WordPress: <br className="hidden sm:inline" />
            <span className="font-serif-accent italic text-primary">Which Ecommerce Platform Fits Your Business?</span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-body text-muted-foreground border-t border-primary/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-display shadow-md font-semibold">
                A
              </div>
              <div>
                <p className="text-xs text-muted-foreground/50 leading-none">Written by</p>
                <p className="text-sm font-semibold text-foreground/90 mt-0.5">Team Ayron</p>
              </div>
            </div>
            <div className="h-8 w-px bg-primary/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground/80 font-light">May 30, 2026</span>
            </div>
            <div className="h-8 w-px bg-primary/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground/80 font-light">8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Banner */}
      <section className="px-6 md:px-12 py-10 max-w-5xl mx-auto bg-background relative z-10">
        <motion.div 
          className="relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-primary/20 bg-muted/10 p-2 rounded-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={blogShopifyVsWordpress} 
            alt="Shopify vs WordPress Comparison Banner" 
            className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-sm hover:scale-[1.01] transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="px-6 md:px-12 pb-24 bg-background relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Article Text */}
          <article className="font-body text-base sm:text-lg text-muted-foreground/90 leading-relaxed space-y-8 font-light">
            <p className="text-foreground/90 font-medium text-lg sm:text-xl leading-relaxed border-l-4 border-primary pl-5 py-3 italic bg-muted/20 pr-4 rounded-r-sm">
              In today's hyper-competitive digital marketplace, launching an online store is no longer just about having a great product; it is about choosing the right foundation for your business to grow. For aspiring entrepreneurs and established retail brands alike, the decision almost always boils down to two heavyweights in the industry: <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shopify</a> and WordPress (specifically when paired with the WooCommerce plugin).
            </p>

            <p className="text-muted-foreground/90">
              Choosing the right platform is akin to choosing the physical location for a brick-and-mortar store. If the foundation is faulty, everything from your customer experience to your backend inventory management will suffer. While both systems power millions of successful online businesses across the globe, they take fundamentally different approaches to website building, management, and scaling.
            </p>

            <p className="text-muted-foreground/90">
              Are you looking for an all-in-one, &ldquo;plug-and-play&rdquo; solution, or do you require total ownership and granular customization over every pixel of your site? In this comprehensive guide, we will break down the differences between <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> and WordPress, analyze their pros and cons, and help you determine which platform is the perfect fit for your business goals.
            </p>

            {/* Section 1 */}
            <h2 className="font-display text-3xl sm:text-4xl text-foreground pt-6 border-b border-primary/10 pb-2 tracking-wide font-medium">
              Understanding the Contenders
            </h2>

            <div className="bg-muted/30 p-6 sm:p-8 border border-primary/10 rounded-sm space-y-4 shadow-sm">
              <h3 className="font-display text-2xl text-foreground flex items-center gap-2 tracking-wide">
                <span className="w-2.5 h-2.5 bg-primary rounded-full"></span> What is <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a>?
              </h3>
              <p className="text-muted-foreground/90 text-sm sm:text-base leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> is a dedicated, fully hosted e-commerce platform operating on a Software-as-a-Service (SaaS) model. In simple terms, this means that when you pay your monthly subscription, you are paying for everything you need to run your store out of the box. The web hosting, security (SSL certificates), payment processing, and core functionalities needed to build ecommerce <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> websites are all bundled together in one neat, user-friendly package.
              </p>
              <p className="text-muted-foreground/90 text-sm sm:text-base leading-relaxed">
                <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> was designed with a single goal in mind: to make it as easy as possible for anyone to start selling products online. Whether you are creating a boutique brand or managing high-volume <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> stores dropshipping, you don't need to know how to code. You don't need to worry about server maintenance, and you don't have to stress about software updates crashing your live site while operating your <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> web store.
              </p>
            </div>

            <div className="bg-muted/30 p-6 sm:p-8 border border-primary/10 rounded-sm space-y-4 shadow-sm">
              <h3 className="font-display text-2xl text-foreground flex items-center gap-2 tracking-wide">
                <span className="w-2.5 h-2.5 bg-primary rounded-full"></span> What is WordPress (WooCommerce)?
              </h3>
              <p className="text-muted-foreground/90 text-sm sm:text-base leading-relaxed">
                WordPress is an open-source Content Management System (CMS) that currently powers over 40% of the entire internet. Out of the box, WordPress is primarily a blogging and content platform. However, when you add the free WooCommerce plugin to your WordPress site, it transforms into an incredibly powerful, infinitely customizable e-commerce powerhouse.
              </p>
              <p className="text-muted-foreground/90 text-sm sm:text-base leading-relaxed">
                Unlike <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a>, WordPress is a self-hosted solution. This means the software itself is free, but you are responsible for purchasing your own web hosting, securing your own domain name, managing your own security protocols, and handling all software updates. The tradeoff for this added technical responsibility is unparalleled freedom. Because it is open-source, you own your website entirely and can modify its code to achieve exactly what you want.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-display text-3xl sm:text-4xl text-foreground pt-6 border-b border-primary/10 pb-2 tracking-wide font-medium">
              The Ultimate Showdown: Comparing Key Features
            </h2>

            <div className="space-y-8 pt-2">
              <div className="border-l-2 border-primary pl-6 space-y-3">
                <h4 className="font-display text-xl sm:text-2xl text-foreground tracking-wide font-medium">1. Ease of Use and Setup Time</h4>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  When it comes to getting a store off the ground rapidly, <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> is the undisputed champion. Its intuitive drag-and-drop interface and straightforward backend dashboard allow users to add products, set up shipping rates, and configure taxes in a matter of hours. The learning curve is remarkably gentle for beginners looking to launch a complete <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> website store without writing a single line of code.
                </p>
                <p className="text-muted-foreground/70 text-sm sm:text-base italic border-t border-primary/5 pt-2">
                  WordPress, on the other hand, comes with a much steeper learning curve. Setting up a WooCommerce store involves several distinct steps: securing a reliable hosting provider, installing the WordPress core software, configuring the WooCommerce plugin, finding a compatible theme, and setting up payment gateways manually. For a beginner without technical expertise, this process can feel overwhelming and time-consuming.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 space-y-3">
                <h4 className="font-display text-xl sm:text-2xl text-foreground tracking-wide font-medium">2. Design, Themes, and Customization</h4>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> offers a curated selection of highly polished, mobile-responsive themes (both free and paid) designed specifically for conversions. While you can customize these themes, you are somewhat restricted to the parameters set by the theme developer unless you know Liquid (<a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify</a>'s proprietary templating language) or hire a <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> website development company to handle the heavy lifting.
                </p>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  WordPress operates in a completely different stratosphere when it comes to customization. Because of its open-source nature, there are thousands of WooCommerce-ready themes available across the web. Furthermore, by utilizing page builders like Elementor or Divi, you have total creative freedom to design every single inch of your website. If you can imagine a layout, you can build it on WordPress.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 space-y-3">
                <h4 className="font-display text-xl sm:text-2xl text-foreground tracking-wide font-medium">3. Pricing and Total Cost of Ownership</h4>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  Pricing is often the most misunderstood aspect of this platform comparison. <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> offers clear, tiered monthly pricing so you know exactly what your baseline cost will be each month. However, costs can escalate quickly when you start adding premium third-party apps to expand your store's functionality (like advanced reviews or loyalty programs).
                </p>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  WordPress and WooCommerce are free to download, but you must pay for hosting, a domain name, and an SSL certificate. In the beginning, a WordPress site can be significantly cheaper to run. However, as your business scales, you may need to invest in managed, high-performance hosting, premium plugins, and professional developer fees, which makes the costs highly variable.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 space-y-3">
                <h4 className="font-display text-xl sm:text-2xl text-foreground tracking-wide font-medium">4. Search Engine Optimization (SEO) and Content Marketing</h4>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  If content marketing, blogging, and driving organic search traffic are central to your growth strategy, WordPress has a distinct advantage. Originally built as a blogging platform, it offers world-class content management capabilities. Paired with robust SEO plugins, you have granular control over your meta tags, URL structures, schema markup, and content architecture.
                </p>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> also has solid basic SEO features and an integrated blogging system, but it is not nearly as flexible. For example, it forces certain URL structures (like adding &ldquo;/products/&rdquo; to your links) which you cannot change, thereby limiting some technical SEO flexibility.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 space-y-3">
                <h4 className="font-display text-xl sm:text-2xl text-foreground tracking-wide font-medium">5. Scalability and Maintenance</h4>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  As your business grows, your website needs to handle more traffic and process more concurrent orders. <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> handles scalability effortlessly. Because it is a hosted platform, their massive engineering team ensures your site stays fast and secure during massive traffic spikes.
                </p>
                <p className="text-muted-foreground/90 text-sm sm:text-base">
                  WordPress is highly scalable, but the burden of that scalability falls directly on your shoulders. You will need to upgrade your server environment, optimize your database, and ensure all your plugins remain compatible as you scale. Website maintenance is a continuous, necessary chore with WordPress.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="font-display text-3xl sm:text-4xl text-foreground pt-6 border-b border-primary/10 pb-2 tracking-wide font-medium">
              The Final Verdict: Which Should You Choose?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Shopify Verdict Card */}
              <div className="bg-muted/40 border border-primary/20 p-6 rounded-sm shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <h4 className="font-display text-2xl text-foreground mb-4 tracking-wide font-medium">Choose <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shopify</a> if:</h4>
                <ul className="space-y-4 font-body text-sm sm:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You want a hassle-free, all-in-one solution that &ldquo;just works&rdquo;.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You lack technical coding skills and want to focus entirely on marketing and product development.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You plan on running dropshipping models or standard retail without complex backend integrations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You prioritize built-in security, speed, and automated maintenance.</span>
                  </li>
                </ul>
              </div>

              {/* WordPress Verdict Card */}
              <div className="bg-muted/40 border border-primary/20 p-6 rounded-sm shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                <h4 className="font-display text-2xl text-foreground mb-4 tracking-wide font-medium">Choose WordPress (WooCommerce) if:</h4>
                <ul className="space-y-4 font-body text-sm sm:text-base text-muted-foreground/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You demand absolute, 100% control and ownership over your website, files, and customer data.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You are building a complex site that requires heavy customization beyond standard e-commerce features.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>SEO and extensive content marketing are the primary drivers of your customer acquisition strategy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You have the technical skills (or the budget to hire developers) to manage ongoing updates.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="italic text-center py-6 text-foreground/80 font-medium text-base sm:text-lg">
              Ultimately, there is no one-size-fits-all answer. Both platforms are highly capable. The right choice depends entirely on your technical comfort level, your startup budget, and your long-term business roadmap.
            </p>

            {/* Section 4 */}
            <h2 className="font-display text-3xl sm:text-4xl text-foreground pt-6 border-b border-primary/10 pb-2 tracking-wide font-medium">
              Bring Your E-Commerce Vision to Life with Ayron Digital Solutions
            </h2>

            <p className="text-muted-foreground/90">
              Choosing the platform is only step one; building, optimizing, and maintaining it is where the real work begins. If you want to ensure your online business launches flawlessly and generates maximum revenue, partnering with the right agency is crucial.
            </p>

            <p className="text-muted-foreground/90">
              This is where <strong className="text-foreground font-semibold">Ayron Digital Solutions</strong> steps in. Widely recognized as the <Link to="/" className="text-primary font-semibold hover:underline">best digital marketing agency in vijayawada</Link>, we bridge the gap between your digital vision and a highly profitable reality. As a full-service <Link to="/" className="text-primary font-semibold hover:underline">digital marketing agency in vijayawada</Link>, our comprehensive suite of web development and marketing services includes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 border border-primary/10 bg-muted/20 hover:border-primary/30 transition-colors rounded-sm">
                <h5 className="font-display text-lg text-foreground mb-2 tracking-wide font-medium">Custom <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Shopify</a> Solutions</h5>
                <p className="text-sm font-light text-muted-foreground/80">End-to-end <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> store development, initial setup, premium theme customization, and complex third-party app integrations built for conversion.</p>
              </div>
              <div className="p-5 border border-primary/10 bg-muted/20 hover:border-primary/30 transition-colors rounded-sm">
                <h5 className="font-display text-lg text-foreground mb-2 tracking-wide font-medium">Advanced E-commerce Builds</h5>
                <p className="text-sm font-light text-muted-foreground/80">For clients with unique requirements, including custom development <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> store services covering bespoke Liquid coding or private app creation.</p>
              </div>
              <div className="p-5 border border-primary/10 bg-muted/20 hover:border-primary/30 transition-colors rounded-sm">
                <h5 className="font-display text-lg text-foreground mb-2 tracking-wide font-medium">Expert Agency Support</h5>
                <p className="text-sm font-light text-muted-foreground/80">As a premier <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shopify</a> web development agency, we feature an in-house team of <a href="https://en.wikipedia.org/wiki/Shopify" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Shopify</a> Expert Developers ready to scale your brand.</p>
              </div>
              <div className="p-5 border border-primary/10 bg-muted/20 hover:border-primary/30 transition-colors rounded-sm">
                <h5 className="font-display text-lg text-foreground mb-2 tracking-wide font-medium">Static, Dynamic & WordPress</h5>
                <p className="text-sm font-light text-muted-foreground/80">If you choose open-source, our developers build lightning-fast, highly secure WooCommerce stores that give you absolute control.</p>
              </div>
            </div>

            <div className="p-5 border border-primary/10 bg-muted/20 hover:border-primary/30 transition-colors w-full rounded-sm">
              <h5 className="font-display text-lg text-foreground mb-2 tracking-wide font-medium">Website Maintenance</h5>
              <p className="text-sm font-light text-muted-foreground/80">Robust maintenance packages to handle core updates, database optimization, security patches, and rapid troubleshooting, allowing you to focus entirely on running your business.</p>
            </div>

            {/* Call to action boxes */}
            <div className="bg-primary text-primary-foreground p-8 sm:p-10 mt-12 text-center space-y-6 rounded-sm shadow-xl relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }} />
              
              <div className="relative z-10 space-y-6">
                <h4 className="font-display text-3xl sm:text-4xl tracking-wide font-medium">Ready to build your dream e-commerce store?</h4>
                <p className="font-body font-light text-primary-foreground/90 max-w-xl mx-auto text-sm sm:text-base">
                  Don't let technical hurdles delay your business success. Let our experts handle the coding, design, and deployment. Reach out to us today for a free consultation!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                  <a 
                    href="https://wa.me/919550860545" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background text-foreground font-display text-lg px-8 py-3.5 hover:bg-muted transition-colors shadow-lg"
                  >
                    <MessageSquare className="w-5 h-5 text-primary shrink-0" /> WhatsApp Us
                  </a>
                  <a 
                    href="tel:+919550860545" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground font-display text-lg px-8 py-3 hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" /> Call: 9550860545
                  </a>
                </div>

                <div className="border-t border-primary-foreground/10 pt-6 mt-6">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-body font-semibold text-primary-foreground hover:underline"
                  >
                    <MapPin className="w-4 h-4 shrink-0" /> Visit Our Office: Ayron Digital Solutions Location
                  </Link>
                </div>
              </div>
            </div>

            {/* Back button */}
            <div className="pt-12 border-t border-primary/10 flex justify-between items-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" /> Back to Blog
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogDetail;
