import { ArrowLeft, MessageSquare, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const HelpDesk = () => {
  const navigate = useNavigate();

  return (
    <Layout showBottomNav={false}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border z-10 px-4 py-3">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-semibold">Visit the helpdesk</h1>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Help Icon */}
          <div className="flex justify-center">
            <div className="bg-tent-primary rounded-full p-6">
              <Building2 className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Description */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Need assistance? Our Helpdesk is here for you! Get quick 
              support, answers to your questions, and guidance on using{" "}
              <span className="text-tent-primary font-medium">Terent</span>
            </p>
            
            <p className="text-muted-foreground">
              Contact us anytime for a seamless property tech experience.
            </p>
          </div>

          {/* Submit Queries Button */}
          <div className="space-y-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full py-6 text-base"
              onClick={() => navigate("/chat")}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              Submit your queries
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpDesk;