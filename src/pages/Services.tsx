
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
  const [serviceCategory, setServiceCategory] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  // Tamil Nadu districts
  const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
    "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanniyakumari", "Karur",
    "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris",
    "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga",
    "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar"
  ].sort();

  const services = [
    { id: "1", icon: Snowflake, title: "AC Services" },
    { id: "2", icon: Zap, title: "Electricals & Plumbing" },
    { id: "3", icon: Hammer, title: "Carpentry" },
    { id: "4", icon: Building, title: "Civil mason" },
    { id: "5", icon: Paintbrush, title: "Painting" },
    { id: "6", icon: Pickaxe, title: "Demolition" },
    { id: "7", icon: Building, title: "Construction & Contractors" },
    { id: "8", icon: TreePine, title: "Landscaping & Gardening" },
    { id: "9", icon: Camera, title: "Security Systems" },
    { id: "10", icon: Shield, title: "Roofing & Waterproofing" },
    { id: "11", icon: Drill, title: "Flooring & Tiling" },
    { id: "12", icon: Wrench, title: "Cleaning & Maintenance" },
    { id: "13", icon: Lightbulb, title: "Interior Design" },
    { id: "14", icon: Thermometer, title: "Glass & Aluminum Work" },
    { id: "15", icon: Truck, title: "Steel Fabrication" },
    { id: "16", icon: Droplets, title: "Solar Installation" }
  ];

  const filteredServices = services.filter(service => {
    return (
      (searchTerm === "" || service.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (serviceCategory === "all" || service.title.toLowerCase().includes(serviceCategory.toLowerCase()))
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
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="ac">AC Services</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="civil">Civil Mason</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="text-sm bg-background border-border z-50">
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50 max-h-[200px] overflow-y-auto">
                    <SelectItem value="all" className="hover:bg-accent hover:text-accent-foreground">All Districts</SelectItem>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district} className="hover:bg-accent hover:text-accent-foreground">
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
