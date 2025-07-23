
import { MapPin, Filter, Building, Wrench, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/ServiceCard";
import Layout from "@/components/Layout";

const Services = () => {
  const serviceCategories = [
    { 
      icon: <Wrench size={20} />, 
      title: "AC Services" 
    },
    { 
      icon: <Wrench size={20} />, 
      title: "Electricals & Plumbing" 
    },
    { 
      icon: <Building size={20} />, 
      title: "Carpenting" 
    },
    { 
      icon: <Building size={20} />, 
      title: "Civil mason" 
    },
    { 
      icon: <Wrench size={20} />, 
      title: "Painting" 
    },
    { 
      icon: <Wrench size={20} />, 
      title: "Demolition" 
    },
    { 
      icon: <Wrench size={20} />, 
      title: "Purifier Service" 
    },
    { 
      icon: <Building size={20} />, 
      title: "Gardening" 
    },
    { 
      icon: <Wrench size={20} />, 
      title: "Appliance Service" 
    }
  ];

  const serviceProviders = [
    {
      id: 1,
      name: "Krishna AC Services",
      category: "AC Services",
      rating: 4.8,
      reviewCount: 125,
      price: "₹299",
      location: "Teachers Colony, Thanjavur",
      phone: "+91 9876543210",
      services: ["AC Installation", "AC Repair", "AC Maintenance"],
      verified: true
    },
    {
      id: 2,
      name: "Reliable Electricals",
      category: "Electricals & Plumbing",
      rating: 4.6,
      reviewCount: 89,
      price: "₹199",
      location: "Panjapur, Trichy",
      phone: "+91 9876543211",
      services: ["Electrical Wiring", "Plumbing", "Switch Installation"],
      verified: true
    },
    {
      id: 3,
      name: "Master Carpenter",
      category: "Carpenting",
      rating: 4.9,
      reviewCount: 156,
      price: "₹399",
      location: "Suriyur Village",
      phone: "+91 9876543212",
      services: ["Furniture Making", "Door Installation", "Kitchen Cabinets"],
      verified: false
    },
    {
      id: 4,
      name: "Precision Painters",
      category: "Painting",
      rating: 4.7,
      reviewCount: 94,
      price: "₹149",
      location: "Bharathidasan University Area",
      phone: "+91 9876543213",
      services: ["Interior Painting", "Exterior Painting", "Texture Work"],
      verified: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-3 sm:px-4 py-3">
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <MapPin size={18} className="text-red-500 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base truncate">Teachers Colony</span>
          </div>
          
          <div className="relative mb-3">
            <Input 
              placeholder="Search services..."
              className="pr-12 rounded-full text-sm"
            />
            <Button size="sm" className="absolute right-1 top-1 rounded-full h-8 w-8 p-0">
              <Filter size={14} />
            </Button>
          </div>

          <div className="flex gap-4 sm:gap-8 border-b border-border overflow-x-auto">
            <button className="pb-2 px-1 border-b-2 border-transparent text-muted-foreground whitespace-nowrap flex-shrink-0">
              <div className="flex items-center gap-2">
                <Building size={14} />
                <span className="text-sm">Properties</span>
              </div>
            </button>
            <button className="pb-2 px-1 border-b-2 border-primary text-primary font-medium whitespace-nowrap flex-shrink-0">
              <div className="flex items-center gap-2">
                <Wrench size={14} />
                <span className="text-sm">Services</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 space-y-6">
          {/* Service Categories */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Service Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {serviceCategories.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                />
              ))}
            </div>
          </div>

          {/* Featured Service Providers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Service Providers</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {serviceProviders.map((provider) => (
                <Card key={provider.id} className="shadow-card hover:shadow-float transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm sm:text-base">{provider.name}</h4>
                          {provider.verified && (
                            <Badge variant="secondary" className="bg-tent-success text-white text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">{provider.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm sm:text-base font-bold text-tent-primary">
                          {provider.price}
                        </div>
                        <div className="text-xs text-muted-foreground">Starting from</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                      <span className="text-xs text-muted-foreground">({provider.reviewCount} reviews)</span>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <MapPin size={12} className="text-muted-foreground flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground truncate">{provider.location}</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs sm:text-sm font-medium mb-2">Services:</div>
                      <div className="flex flex-wrap gap-1">
                        {provider.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {provider.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{provider.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                        <Phone size={14} className="mr-1" />
                        Call
                      </Button>
                      <Button size="sm" className="flex-1 text-xs sm:text-sm">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
