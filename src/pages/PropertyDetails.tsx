import { ArrowLeft, Share2, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const PropertyDetails = () => {
  const navigate = useNavigate();

  const proximities = [
    "Cancer Institute",
    "Olympic Academy", 
    "Food Park",
    "Bharathidasan University",
    "MMM Hospital"
  ];

  return (
    <Layout showBottomNav={false}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border z-10 px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-semibold">Property details</h1>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full bg-background hover:bg-muted transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 rounded-full bg-background hover:bg-muted transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Property Layout Image */}
          <Card className="overflow-hidden shadow-card">
            <div className="bg-gradient-to-br from-muted/50 to-muted p-8 text-center">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {Array.from({ length: 16 }, (_, i) => (
                  <div key={i} className="aspect-square bg-tent-warning/20 rounded border border-tent-warning/40 flex items-center justify-center text-xs font-medium">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Layout Plan Available</div>
            </div>
          </Card>

          {/* Property Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-tent-success text-white">
                Property ID: LMP-TPY-250722-003
              </Badge>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground">
              Om Aathi Parasakthi Nagar
            </h2>
            
            <p className="text-muted-foreground">
              Investment Villa Plot - Suriyur Village, Thanjavur to Panjapur, 
              Aathi Parasakthi Nagar, Tiruchirappalli
            </p>
          </div>

          {/* Price Details */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Price details</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-tent-primary">
                  Rs.718800 / 1200 Sq.ft
                </div>
                <div className="text-sm text-muted-foreground">
                  Per sq.ft rate: Rs.599
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Location</h3>
              
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-tent-secondary/20 to-tent-primary/20 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-center space-y-2">
                  <MapPin className="h-8 w-8 text-tent-primary mx-auto" />
                  <div className="text-sm text-muted-foreground">Map View</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Suriyur Village, Thanjavur to Panjapur, Aathi Parasakthi Nagar
              </p>
            </CardContent>
          </Card>

          {/* Property Details */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Property Details</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Athiparasakthi Nagar, offered by Velchoice Properties Pvt. Ltd., is 
                a premium residential layout located on the Madurai to 
                Thuvarankurichi Ring Road, just minutes away from Trichy city. 
                Priced affordably at just ₹599 per sq.ft, this DTCP-approved 
                layout is a golden opportunity for those looking to build their 
                dream home or invest smartly in a fast-developing area.
              </p>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Amenities</h3>
              <p className="text-sm text-muted-foreground">No amenities available.</p>
            </CardContent>
          </Card>

          {/* Proximities */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-3">Proximities</h3>
              <div className="space-y-2">
                {proximities.map((proximity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-tent-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{proximity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Apps Availability */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-semibold">Apps availability</h3>
                <Badge variant="secondary" className="bg-tent-success text-white text-xs">
                  New
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Null</p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="sticky bottom-0 bg-card border-t border-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-tent-primary">Rs.599 / Per Sq.ft</div>
            </div>
            <Button variant="hero" size="lg" className="px-8">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetails;