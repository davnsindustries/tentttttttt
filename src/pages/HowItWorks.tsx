import { ArrowLeft, Building2, Search, Filter, CreditCard, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Search,
      title: "Browse & List",
      description: "Search for properties, List your own, or explore verified construction materials from trusted suppliers."
    },
    {
      icon: Filter,
      title: "Smart Search & Filters",
      description: "Get personalized property and material recommendations based on location, budget, and preference."
    },
    {
      icon: CreditCard,
      title: "Seamless Booking & Payments",
      description: "Instantly book property viewings, order construction materials, and make hassle-free online payments."
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "Access legal, financial, and maintenance services with expert assistance, available 24/7."
    }
  ];

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
            <h1 className="text-lg font-semibold">How Terent works</h1>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* App Logo */}
          <div className="flex justify-center">
            <div className="bg-tent-primary rounded-full p-4">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-tent-primary/10 rounded-full p-3 flex-shrink-0">
                        <Icon className="h-6 w-6 text-tent-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;