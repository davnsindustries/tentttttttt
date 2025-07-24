
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import PostProperty from "./pages/PostProperty";
import Services from "./pages/Services";
import ServiceProviders from "./pages/ServiceProviders";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PropertyDetails from "./pages/PropertyDetails";
import ServiceDetails from "./pages/ServiceDetails";
import HelpDesk from "./pages/HelpDesk";
import AboutApp from "./pages/AboutApp";
import HowItWorks from "./pages/HowItWorks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/post" element={<PostProperty />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-providers/:serviceId" element={<ServiceProviders />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/service-details/:providerId" element={<ServiceDetails />} />
          <Route path="/help" element={<HelpDesk />} />
          <Route path="/about" element={<AboutApp />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
