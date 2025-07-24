
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Filter, Building2, Home as HomeIcon, Store, Warehouse } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

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

  // Sample property data
  const properties = [
    {
      id: "1",
      title: "Om Aathi Parasakthi Nagar",
      location: "Suriyur Village, Thanjavur",
      price: "Rs.599 / Per Sq.ft",
      area: "1200 Sq.ft",
      type: "sale" as const,
      badge: "DTCP Approved",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      id: "2",
      title: "Green Valley Apartments",
      location: "Anna Nagar, Chennai",
      price: "Rs.8500 / Per Sq.ft",
      area: "950 Sq.ft",
      type: "rent" as const,
      badge: "Ready to Move",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Luxury Villa Plots",
      location: "Coimbatore",
      price: "Rs.1200 / Per Sq.ft",
      area: "1500 Sq.ft",
      type: "sale" as const,
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
    }
  ];

  const filteredProperties = properties.filter(property => {
    return (
      (searchTerm === "" || property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       property.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (propertyType === "all" || property.type.toLowerCase().includes(propertyType.toLowerCase())) &&
      (selectedDistrict === "all" || property.location.toLowerCase().includes(selectedDistrict.toLowerCase()))
    );
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-hero px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="p-2 bg-primary/10 rounded-full animate-pulse-glow">
                <MapPin className="text-primary animate-float" size={20} />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-foreground">Current Location</h1>
                <p className="text-sm text-muted-foreground animate-slide-in-left">Thanjavur, Tamil Nadu</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative mb-6 animate-slide-in-right stagger-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground transition-colors" size={18} />
              <Input
                placeholder="Search properties by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-12 text-sm sm:text-base hover-glow transition-all duration-300 focus:scale-[1.02]"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={16} className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Two Options Below Search Bar */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button 
                variant="outline" 
                className="bg-background/80 backdrop-blur-sm text-foreground border-border hover:bg-background/90 hover-lift hover-glow animate-scale-in stagger-2 group h-12"
                onClick={() => navigate('/')}
              >
                <Building2 size={16} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                Explore properties
              </Button>
              <Button 
                variant="outline" 
                className="bg-background/80 backdrop-blur-sm text-foreground border-border hover:bg-background/90 hover-lift hover-glow animate-scale-in stagger-3 group h-12"
                onClick={() => navigate('/services')}
              >
                <Store size={16} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                Services
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 animate-slide-in-left">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="text-sm hover-glow transition-all duration-300 hover:scale-[1.02]">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="text-sm hover-glow transition-all duration-300 hover:scale-[1.02]">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">Below Rs.1000/sq.ft</SelectItem>
                    <SelectItem value="mid">Rs.1000-5000/sq.ft</SelectItem>
                    <SelectItem value="high">Above Rs.5000/sq.ft</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="text-sm hover-glow transition-all duration-300 hover:scale-[1.02] bg-background border-border z-50">
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

        {/* Property Categories */}
        <div className="px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 animate-fade-in">Browse by Category</h2>
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                { name: "Villa Plots", icon: <HomeIcon size={20} /> },
                { name: "Apartments", icon: <Building2 size={20} /> },
                { name: "Houses", icon: <HomeIcon size={20} /> },
                { name: "Commercial", icon: <Store size={20} /> }
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-16 sm:h-20 flex-col gap-2 hover:shadow-float hover-lift hover-glow transition-all duration-300 group animate-scale-in stagger-${index + 1}`}
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Featured Properties */}
            <div className="flex items-center justify-between mb-6 animate-fade-in">
              <h2 className="text-lg sm:text-xl font-semibold">Featured Properties</h2>
              {filteredProperties.length > 0 && (
                <div className="bg-primary/10 px-3 py-1 rounded-full animate-pulse-glow">
                  <p className="text-sm text-primary font-medium">
                    {filteredProperties.length} properties found
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProperties.map((property, index) => (
                <div 
                  key={property.id}
                  className={`animate-scale-in stagger-${(index % 4) + 1}`}
                >
                  <PropertyCard
                    title={property.title}
                    location={property.location}
                    price={property.price}
                    type={property.type}
                    image={property.image}
                    onCardClick={() => navigate(`/property/${property.id}`)}
                  />
                </div>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="bg-muted/30 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Search className="text-muted-foreground" size={32} />
                </div>
                <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
                <p className="text-muted-foreground/70 text-sm mt-2">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
