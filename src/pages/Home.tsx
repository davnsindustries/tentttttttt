
import { useState } from "react";
import { MapPin, Filter, Building, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import villaPlots from "@/assets/villa-plots.jpg";
import apartments from "@/assets/apartments.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"properties" | "services">("properties");

  const properties = [
    {
      id: 1,
      title: "Om Aathi Parasakthi Nagar",
      price: "Rs. 599",
      location: "Investment Villa Plot - Suriyur Village, Thanjavur to Panjapur, Aathi Parasakthi Nagar",
      image: villaPlots,
      features: ["5 mins From Trichy Airport", "10 mins From Panjapur Busstand", "Olympic Training Academy"],
      type: "sale" as const,
      coordinates: { lat: 10.7905, lng: 78.7047 }
    },
    {
      id: 2,
      title: "Teachers Colony Apartments",
      price: "Rs. 1299",
      location: "Premium Apartments - Teachers Colony, Thanjavur",
      image: apartments,
      features: ["School Nearby", "Shopping Complex", "Public Transport"],
      type: "rent" as const,
      coordinates: { lat: 10.7870, lng: 79.1378 }
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
              placeholder="Premium villa plots"
              className="pr-12 rounded-full text-sm"
            />
            <Button size="sm" className="absolute right-1 top-1 rounded-full h-8 w-8 p-0">
              <Filter size={14} />
            </Button>
          </div>

          <div className="flex gap-4 sm:gap-8 border-b border-border overflow-x-auto">
            <button
              onClick={() => setActiveTab("properties")}
              className={`pb-2 px-1 border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === "properties" 
                  ? "border-primary text-primary font-medium" 
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <Building size={14} />
                <span className="text-sm">Properties</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`pb-2 px-1 border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === "services" 
                  ? "border-primary text-primary font-medium" 
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <HomeIcon size={14} />
                <span className="text-sm">Services</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {activeTab === "properties" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Explore properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  image={property.image}
                  features={property.features}
                  type={property.type}
                  coordinates={property.coordinates}
                  onCardClick={() => navigate(`/property/${property.id}`)}
                />
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Services</h2>
              <div className="text-center py-10 sm:py-20">
                <p className="text-muted-foreground text-sm sm:text-base">Service listings coming soon...</p>
                <Button 
                  className="mt-4"
                  onClick={() => navigate('/services')}
                >
                  View All Services
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
