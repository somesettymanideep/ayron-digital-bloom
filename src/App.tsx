import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SocialSidebar from "./components/SocialSidebar";
import ScrollToTopOnNav from "./components/ScrollToTopOnNav";
import useScrollAnimations from "./hooks/useScrollAnimations";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Vijayawada from "./pages/Vijayawada";
import Guntur from "./pages/Guntur";
import ProductShootVijayawada from "./pages/ProductShootVijayawada";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollAnimations();
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <>
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <ScrollToTop />}
      {!isAdminPage && <SocialSidebar />}
      {!isAdminPage && <ScrollToTopOnNav />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/services/:slug/" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blog/:slug/" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vijayawada" element={<Vijayawada />} />
        <Route path="/vijayawada/" element={<Vijayawada />} />
        <Route path="/guntur" element={<Guntur />} />
        <Route path="/guntur/" element={<Guntur />} />
        <Route path="/services/product-shoot-vijayawada" element={<ProductShootVijayawada />} />
        <Route path="/services/product-shoot-vijayawada/" element={<ProductShootVijayawada />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
