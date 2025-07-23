
import { useState } from "react";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const services = [
    {
      id: "1",
      icon: "❄️",
      title: "AC Services",
      provider: "Expert AC Services",
      rating: 4.8,
      location: "Coimbatore",
      price: "₹500 onwards"
    },
    {
      id: "2", 
      icon: "⚡",
      title: "Electrical Services",
      provider: "PowerFix Solutions",
      rating: 4.6,
      location: "Chennai",
      price: "₹300 onwards"
    },
    {
      id: "3",
      icon: "🔧",
      title: "Plumbing Services", 
      provider: "AquaFix Plumbers",
      rating: 4.7,
      location: "Bangalore",
      price: "₹400 onwards"
    },
    {
      id: "4",
      icon: "🎨",
      title: "Painting Services",
      provider: "ColorCraft Painters", 
      rating: 4.5,
      location: "Coimbatore",
      price: "₹200 onwards"
    },
    {
      id: "5",
      icon: "🔨",
      title: "Carpentry Services",
      provider: "WoodWorks Pro",
      rating: 4.9,
      location: "Chennai", 
      price: "₹600 onwards"
    },
    {
      id: "6",
      icon: "🏗️",
      title: "Civil Mason",
      provider: "BuildRight Masons",
      rating: 4.4,
      location: "Trichy",
      price: "₹800 onwards"
    }
  ];

  const filteredServices = services.filter(service => {
    return (
      (searchTerm === "" || service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       service.provider.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (serviceCategory === "" || service.title.toLowerCase().includes(serviceCategory.toLowerCase())) &&
      (location === "" || service.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-3 sm:px-4 py-3 flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-base sm:text-lg font-semibold">Services</h1>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-hero px-3 sm:px-4 lg:px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-12 text-sm sm:text-base"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} />
              </Button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <Select value={serviceCategory} onValueChange={setServiceCategory}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Service Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Services</SelectItem>
                    <SelectItem value="ac">AC Services</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="civil">Civil Mason</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-sm"
                />
              </div>
            )}
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-semibold">Available Services</h2>
              {filteredServices.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {filteredServices.length} services found
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="space-y-2">
                  <ServiceCard
                    icon={<span className="text-xl sm:text-2xl">{service.icon}</span>}
                    title={service.title}
                    onClick={() => navigate('/service-details')}
                  />
                  <div className="text-center space-y-1">
                    <p className="text-xs text-muted-foreground">{service.provider}</p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-xs font-medium">{service.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.location}</p>
                    <p className="text-xs font-medium text-tent-primary">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
