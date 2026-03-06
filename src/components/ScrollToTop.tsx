import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

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
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.311-2.012A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.594c-.393 1.106-1.939 2.023-3.183 2.29-.854.18-1.966.324-5.716-1.228-4.8-1.986-7.886-6.857-8.124-7.176-.23-.318-1.926-2.567-1.926-4.893s1.217-3.472 1.65-3.947c.432-.475.945-.594 1.26-.594.315 0 .63.003.906.016.29.014.68-.11 1.064.812.393.947 1.338 3.273 1.455 3.51.118.237.197.513.04.83-.158.317-.237.514-.474.791-.237.277-.498.62-.711.832-.237.237-.483.494-.208.968.276.475 1.226 2.023 2.633 3.277 1.81 1.613 3.336 2.112 3.81 2.349.475.237.752.197 1.028-.118.277-.316 1.183-1.38 1.5-1.855.315-.475.631-.394 1.064-.237.434.158 2.758 1.3 3.232 1.537.475.237.79.355.908.553.118.197.118 1.144-.275 2.248z"/>
        </svg>
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
