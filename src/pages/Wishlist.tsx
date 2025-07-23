import { useState } from "react";
import { ArrowLeft, Search, Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Wishlist = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"listing" | "service">("listing");

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold flex-1 text-center">Wishlist</h1>
          <Button variant="ghost" size="sm" className="text-primary">
            Edit
          </Button>
        </div>

        {/* Tabs */}
        <div className="bg-card px-4">
          <div className="flex gap-0 border-b border-border">
            <button
              onClick={() => setActiveTab("listing")}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-t-xl transition-colors ${
                activeTab === "listing" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Property Listing
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-t-xl transition-colors ${
                activeTab === "service" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Property Service
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-32 px-8">
          <div className="relative mb-8">
            <Folder size={80} className="text-muted-foreground/50" />
            <Search size={32} className="absolute -right-2 -bottom-2 text-muted-foreground/50" />
            <div className="absolute top-4 left-4 w-8 h-6 bg-muted-foreground/20 rounded"></div>
            <div className="absolute top-8 right-6 w-4 h-4 bg-muted-foreground/20 rounded-full"></div>
            <div className="absolute bottom-8 left-6 w-6 h-4 bg-muted-foreground/20 rounded"></div>
          </div>
          
          <h3 className="text-lg font-medium mb-2">No Result</h3>
          <p className="text-muted-foreground text-center">
            We're stocking the shelves stay tuned !
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;