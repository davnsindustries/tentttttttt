import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Filter, MapPin, Star, Phone, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const ServiceProviders = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const serviceName = location.state?.serviceName || "Service";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Sample service providers data
  const serviceProviders = [
    {
      id: "1",
      name: "Ahmed Rahman",
      rating: 4.8,
      experience: "5 years",
      phone: "+880123456789",
      location: "Dhaka",
      gender: "male",
      description: "Professional AC repair and maintenance specialist",
      availability: "Available today",
      verified: true
    },
    {
      id: "2",
      name: "Fatima Khatun",
      rating: 4.9,
      experience: "7 years",
      phone: "+880123456790",
      location: "Chittagong",
      gender: "female",
      description: "Expert in residential and commercial AC services",
      availability: "Available tomorrow",
      verified: true
    },
    {
      id: "3",
      name: "Mohammad Ali",
      rating: 4.6,
      experience: "3 years",
      phone: "+880123456791",
      location: "Sylhet",
      gender: "male",
      description: "Specialized in AC installation and repair",
      availability: "Available today",
      verified: false
    },
    {
      id: "4",
      name: "Rashida Begum",
      rating: 4.7,
      experience: "4 years",
      phone: "+880123456792",
      location: "Rajshahi",
      gender: "female",
      description: "AC maintenance and cooling system expert",
      availability: "Available in 2 days",
      verified: true
    }
  ];

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

  const filteredProviders = serviceProviders.filter(provider => {
    return (
      (searchTerm === "" || provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       provider.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedDistrict === "" || provider.location === selectedDistrict) &&
      (selectedGender === "" || provider.gender === selectedGender)
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
          <h1 className="text-base sm:text-lg font-semibold">{serviceName}</h1>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-hero px-3 sm:px-4 lg:px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search providers..."
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {districts.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Gender Preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Providers</SelectItem>
                    <SelectItem value="male">Male Providers</SelectItem>
                    <SelectItem value="female">Female Providers</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedDistrict("");
                    setSelectedGender("");
                    setSearchTerm("");
                  }}
                  className="text-sm"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Service Providers List */}
        <div className="p-3 sm:p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-semibold">Available Providers</h2>
              {filteredProviders.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {filteredProviders.length} providers found
                </p>
              )}
            </div>

            <div className="space-y-4">
              {filteredProviders.map((provider) => (
                <Card 
                  key={provider.id} 
                  className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/service-details/${provider.id}`, { 
                    state: { provider, serviceName }
                  })}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <User size={24} />
                      </div>
                      
                      {/* Provider Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                              {provider.name}
                              {provider.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified
                                </Badge>
                              )}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Star size={14} className="fill-yellow-400 text-yellow-400" />
                              <span>{provider.rating}</span>
                              <span>•</span>
                              <span>{provider.experience}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {provider.gender}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {provider.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{provider.location}</span>
                          </div>
                          <span className="text-green-600">{provider.availability}</span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button size="sm" className="flex items-center gap-1">
                            <Phone size={14} />
                            Call
                          </Button>
                           <Button 
                             variant="outline" 
                             size="sm" 
                             className="flex items-center gap-1"
                             onClick={(e) => {
                               e.stopPropagation();
                               navigate('/chat', { 
                                 state: { 
                                   name: provider.name, 
                                   avatar: provider.name[0].toUpperCase() 
                                 } 
                               });
                             }}
                           >
                             <MessageCircle size={14} />
                             Chat
                           </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProviders.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No providers found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceProviders;