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
      type: "sale" as const
    },
    {
      id: 2,
      title: "Teachers Colony Apartments",
      price: "Rs. 1299",
      location: "Premium Apartments - Teachers Colony, Thanjavur",
      image: apartments,
      features: ["School Nearby", "Shopping Complex", "Public Transport"],
      type: "rent" as const
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-red-500" />
            <span className="font-medium">Teachers Colony</span>
          </div>
          
          <div className="relative mb-3">
            <Input 
              placeholder="Premium villa plots"
              className="pr-12 rounded-full"
            />
            <Button size="sm" className="absolute right-1 top-1 rounded-full">
              <Filter size={16} />
            </Button>
          </div>

          <div className="flex gap-8 border-b border-border">
            <button
              onClick={() => setActiveTab("properties")}
              className={`pb-2 px-1 border-b-2 transition-colors ${
                activeTab === "properties" 
                  ? "border-primary text-primary font-medium" 
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <Building size={16} />
                Properties
              </div>
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`pb-2 px-1 border-b-2 transition-colors ${
                activeTab === "services" 
                  ? "border-primary text-primary font-medium" 
                  : "border-transparent text-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <HomeIcon size={16} />
                Services
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === "properties" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Explore properties</h2>
              <div className="space-y-4">
                {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  image={property.image}
                  features={property.features}
                  type={property.type}
                  onCardClick={() => navigate(`/property/${property.id}`)}
                />
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Services</h2>
              <div className="text-center py-20">
                <p className="text-muted-foreground">Service listings coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;