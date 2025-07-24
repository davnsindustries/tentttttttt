
import { useState } from "react";
import { ArrowLeft, Search, Filter, ChevronDown, ChevronUp, Snowflake, Zap, Wrench, Paintbrush, Hammer, Building, TreePine, Truck, Drill, Pickaxe, Shield, Thermometer, Wifi, Camera, Car, Lightbulb, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    { id: "1", icon: Snowflake, title: "AC Services" },
    { id: "2", icon: Zap, title: "Electrical Services" },
    { id: "3", icon: Wrench, title: "Plumbing Services" },
    { id: "4", icon: Paintbrush, title: "Painting Services" },
    { id: "5", icon: Hammer, title: "Carpentry Services" },
    { id: "6", icon: Building, title: "Civil Mason" },
    { id: "7", icon: TreePine, title: "Landscaping" },
    { id: "8", icon: Truck, title: "Moving Services" },
    { id: "9", icon: Drill, title: "Drilling Services" },
    { id: "10", icon: Shield, title: "Waterproofing" },
    { id: "11", icon: Thermometer, title: "HVAC Services" },
    { id: "12", icon: Wifi, title: "Internet Installation" },
    { id: "13", icon: Camera, title: "Security Systems" },
    { id: "14", icon: Car, title: "Garage Services" },
    { id: "15", icon: Lightbulb, title: "Lighting Services" },
    { id: "16", icon: Droplets, title: "Water Services" }
  ];

  const filteredServices = services.filter(service => {
    return (
      (searchTerm === "" || service.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (serviceCategory === "" || service.title.toLowerCase().includes(serviceCategory.toLowerCase()))
    );
  });

  const topServices = filteredServices.slice(0, 4);
  const remainingServices = filteredServices.slice(4);

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

            {/* Top 4 Services */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4">
              {topServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <ServiceCard
                    key={service.id}
                    icon={<IconComponent size={24} />}
                    title={service.title}
                    onClick={() => navigate(`/service-providers/${service.id}`, { 
                      state: { serviceName: service.title }
                    })}
                  />
                );
              })}
            </div>

            {/* Collapsible remaining services */}
            {remainingServices.length > 0 && (
              <Collapsible open={showAllServices} onOpenChange={setShowAllServices}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full mb-4">
                    {showAllServices ? (
                      <>
                        <ChevronUp size={16} className="mr-2" />
                        Show Less Services
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} className="mr-2" />
                        Show More Services ({remainingServices.length})
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {remainingServices.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <ServiceCard
                          key={service.id}
                          icon={<IconComponent size={24} />}
                          title={service.title}
                          onClick={() => navigate(`/service-providers/${service.id}`, { 
                            state: { serviceName: service.title }
                          })}
                        />
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}

            {/* Coming Soon Section */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">Coming Soon</h3>
              <p className="text-muted-foreground text-sm">Next service: Search for builders - Find qualified builders for your construction projects</p>
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
