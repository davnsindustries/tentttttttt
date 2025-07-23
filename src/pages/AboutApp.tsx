import { ArrowLeft, Building2, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const AboutApp = () => {
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
            <h1 className="text-lg font-semibold">About App</h1>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* App Logo and Name */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-tent-primary rounded-full p-6">
              <Building2 className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-tent-primary">Terent</h2>
          </div>

          {/* App Description */}
          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              Terent is an integrated platform for property listings, 
              Building materials, E-commerce, and property services.
            </p>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            <Card className="shadow-card">
              <CardContent className="p-0">
                <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="text-left">
                    <h3 className="font-medium">Privacy Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Know the detailed draft of our privacy policy
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-0">
                <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="text-left">
                    <h3 className="font-medium">Terms & conditions</h3>
                    <p className="text-sm text-muted-foreground">
                      Know the detailed draft of our Terms & conditions
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Version */}
          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">v 1.3.2 (6)</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutApp;