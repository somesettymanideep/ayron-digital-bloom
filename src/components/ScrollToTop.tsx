import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919550860545"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[hsl(142,70%,40%)] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={1.5} />
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollUp}
        className={`w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-agency-orange-dark transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} className="animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTop;
