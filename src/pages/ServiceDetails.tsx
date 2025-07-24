
import { ArrowLeft, Share2, Heart, MapPin, ExternalLink, Phone, Mail, User, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import PropertyImageGallery from "@/components/PropertyImageGallery";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();

  // Sample service images
  const serviceImages = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop"
  ];

  // Service provider contact details
  const providerDetails = {
    name: "Expert AC Services",
    ownerName: "Rajesh Kumar",
    phone: "+91 9876543210",
    email: "rajesh@expertac.com",
    rating: 4.8,
    experience: "8+ years",
    services: ["AC Installation", "AC Repair", "AC Maintenance", "Duct Cleaning"]
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=11.0168,76.9558`;
    window.open(url, '_blank');
  };

  return (
    <Layout showBottomNav={false}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border z-10 px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-base sm:text-lg font-semibold">Service details</h1>
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="p-2 rounded-full bg-background hover:bg-muted transition-colors">
                <Share2 size={18} />
              </button>
              <button className="p-2 rounded-full bg-background hover:bg-muted transition-colors">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
          {/* Service Images */}
          <PropertyImageGallery 
            images={serviceImages} 
            title={providerDetails.name} 
          />

          {/* Service Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-tent-success text-white text-xs sm:text-sm">
                AC Services
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{providerDetails.rating}</span>
              </div>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              {providerDetails.name}
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground">
              Professional AC installation, repair, and maintenance services in Coimbatore. 
              Experienced technicians with quality service guarantee.
            </p>
          </div>

          {/* Service Provider Contact Details */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2">
                <User size={18} />
                Service Provider
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm sm:text-base">{providerDetails.ownerName}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {providerDetails.experience} experience
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{providerDetails.rating}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    onClick={() => window.open(`tel:${providerDetails.phone}`)}
                  >
                    <Phone size={14} />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    onClick={() => window.open(`mailto:${providerDetails.email}`)}
                  >
                    <Mail size={14} />
                    Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Offered */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Services Offered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {providerDetails.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-tent-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service Area */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold">Service Area</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openGoogleMaps}
                  className="text-xs sm:text-sm"
                >
                  <ExternalLink size={14} className="mr-1" />
                  View on Maps
                </Button>
              </div>
              
              {/* Map Placeholder */}
              <div 
                className="bg-gradient-to-br from-tent-secondary/20 to-tent-primary/20 rounded-lg h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={openGoogleMaps}
              >
                <div className="text-center space-y-2">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-tent-primary mx-auto" />
                  <div className="text-xs sm:text-sm text-muted-foreground">Click to view service area</div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground">
                Serving all areas in Coimbatore and surrounding districts
              </p>
            </CardContent>
          </Card>

          {/* About Service */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">About Service</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Expert AC Services provides comprehensive air conditioning solutions with over 8 years 
                of experience. We specialize in installation, repair, and maintenance of all AC brands. 
                Our certified technicians ensure quality service with warranty on all work. 
                Available for emergency repairs and scheduled maintenance.
              </p>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Pricing</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">AC Installation</span>
                  <span className="text-sm font-medium">₹2,500 onwards</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AC Repair</span>
                  <span className="text-sm font-medium">₹500 onwards</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AC Service</span>
                  <span className="text-sm font-medium">₹800 onwards</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="sticky bottom-0 bg-card border-t border-border p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <div className="text-lg sm:text-xl font-bold text-tent-primary">Starting ₹500</div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 flex-1 sm:flex-none transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/chat', { 
                  state: { 
                    name: providerDetails.ownerName, 
                    avatar: providerDetails.ownerName.charAt(0).toUpperCase(),
                    service: providerDetails.name,
                    type: 'service'
                  } 
                })}
              >
                <MessageCircle size={16} />
                Chat Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 flex-1 sm:flex-none transition-all duration-300 hover:scale-105"
                onClick={() => window.open(`tel:${providerDetails.phone}`)}
              >
                <Phone size={16} />
                Call Now
              </Button>
              <Button variant="hero" size="lg" className="flex-1 sm:flex-none transition-all duration-300 hover:scale-105">
                Book Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
