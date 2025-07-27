
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PropertyListingForm from "@/components/PropertyListingForm";
import PropertyServiceForm from "@/components/PropertyServiceForm";

const PostProperty = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"listing" | "service">("listing");

  return (
    <Layout>
      <div className="min-h-screen bg-background animate-fade-in">
        {/* Header */}
        <div className="bg-card border-b border-border px-3 sm:px-4 py-3 flex items-center gap-3 animate-slide-in-right">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-base sm:text-lg font-semibold">Post Yours</h1>
        </div>

        {/* Tabs */}
        <div className="bg-card px-3 sm:px-4 animate-scale-in">
          <div className="flex gap-0 border-b border-border">
            <button
              onClick={() => setActiveTab("listing")}
              className={`flex-1 py-3 px-2 sm:px-4 text-center font-medium rounded-t-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm ${
                activeTab === "listing" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Property Listing
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`flex-1 py-3 px-2 sm:px-4 text-center font-medium rounded-t-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm ${
                activeTab === "service" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Property Service
            </button>
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-6 animate-fade-in">
          {activeTab === "listing" ? <PropertyListingForm /> : <PropertyServiceForm />}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-border animate-scale-in">
            <Button variant="outline" className="flex-1 text-sm sm:text-base transition-all duration-300 hover:scale-105">
              Save as Draft
            </Button>
            <Button className="flex-1 text-sm sm:text-base transition-all duration-300 hover:scale-105">
              Publish Listing
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostProperty;
