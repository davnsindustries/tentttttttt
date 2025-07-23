
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
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
      (location === "" || property.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-hero px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Find Your Dream Property
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Discover the perfect property for your needs
            </p>
            
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search properties by name or location..."
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

            {/* Two Options Below Search Bar */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Button 
                variant="outline" 
                className="bg-background/80 backdrop-blur-sm text-foreground border-border hover:bg-background/90"
                onClick={() => navigate('/')}
              >
                <Building2 size={16} className="mr-2" />
                Explore properties
              </Button>
              <Button 
                variant="outline" 
                className="bg-background/80 backdrop-blur-sm text-foreground border-border hover:bg-background/90"
                onClick={() => navigate('/services')}
              >
                <Store size={16} className="mr-2" />
                Services
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sale">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">Below Rs.1000/sq.ft</SelectItem>
                    <SelectItem value="mid">Rs.1000-5000/sq.ft</SelectItem>
                    <SelectItem value="high">Above Rs.5000/sq.ft</SelectItem>
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

        {/* Property Categories */}
        <div className="px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Browse by Category</h2>
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { name: "Villa Plots", icon: <HomeIcon size={20} /> },
                { name: "Apartments", icon: <Building2 size={20} /> },
                { name: "Houses", icon: <HomeIcon size={20} /> },
                { name: "Commercial", icon: <Store size={20} /> }
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-16 sm:h-20 flex-col gap-1 hover:shadow-float transition-all duration-300"
                >
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Featured Properties */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">Featured Properties</h2>
              {filteredProperties.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {filteredProperties.length} properties found
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  type={property.type}
                  image={property.image}
                  onCardClick={() => navigate(`/property/${property.id}`)}
                />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No properties found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
