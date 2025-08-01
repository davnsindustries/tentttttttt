
import { ArrowLeft, Share2, Heart, MapPin, ExternalLink, Phone, Mail, User, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Layout from "@/components/Layout";
import PropertyImageGallery from "@/components/PropertyImageGallery";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const [selectedBlock, setSelectedBlock] = useState("");
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  const proximities = [
    "Cancer Institute",
    "Olympic Academy", 
    "Food Park",
    "Bharathidasan University",
    "MMM Hospital"
  ];

  // Sample property images
  const propertyImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=800&h=600&fit=crop"
  ];

  const propertyCoordinates = { lat: 10.7905, lng: 78.7047 };

  // Property owner contact details
  const ownerDetails = {
    name: "Deva Sanjay",
    phone: "+91 9876543210",
    email: "devasanjay14@gmail.com",
    role: "Property Owner"
  };

  // Sample blocks data
  const blocks = [
    {
      id: "block-a",
      name: "Block A",
      pricePerUnit: "599",
      measurementType: "sqft",
      totalUnits: "50",
      availableUnits: "35"
    },
    {
      id: "block-b", 
      name: "Block B",
      pricePerUnit: "649",
      measurementType: "sqft",
      totalUnits: "40",
      availableUnits: "28"
    },
    {
      id: "block-c",
      name: "Block C",
      pricePerUnit: "699",
      measurementType: "sqft", 
      totalUnits: "30",
      availableUnits: "15"
    }
  ];

  // Sample bookings data
  const bookings = [
    {
      id: "BK001",
      userName: "Ahmed Hassan",
      userAvatar: "AH",
      blockName: "Block A",
      bookedDate: "2024-01-15",
      status: "Confirmed"
    },
    {
      id: "BK002", 
      userName: "Fatima Khan",
      userAvatar: "FK",
      blockName: "Block B",
      bookedDate: "2024-01-18",
      status: "Pending"
    }
  ];

  const handleBooking = () => {
    if (!selectedBlock) {
      alert("Please select a block to book");
      return;
    }
    // Generate unique booking ID
    const bookingId = `BK${Date.now().toString().slice(-6)}`;
    alert(`Booking confirmed! Your booking ID is: ${bookingId}`);
    setShowBookingDialog(false);
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${propertyCoordinates.lat},${propertyCoordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <Layout showBottomNav={false}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border z-10 px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <h1 className="text-base sm:text-lg font-semibold">Property details</h1>
            <div className="flex items-center gap-1 sm:gap-2">
              <button className="p-2 rounded-full bg-background hover:bg-muted transition-colors">
                <Heart size={16} />
              </button>
              <button className="p-2 rounded-full bg-background hover:bg-muted transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
          {/* Property Images */}
          <PropertyImageGallery 
            images={propertyImages} 
            title="Om Aathi Parasakthi Nagar" 
          />

          {/* Property Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-tent-success text-white text-xs sm:text-sm">
                Property ID: LMP-TPY-250722-003
              </Badge>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              Om Aathi Parasakthi Nagar
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground">
              Investment Villa Plot - Suriyur Village, Thanjavur to Panjapur, 
              Aathi Parasakthi Nagar, Tiruchirappalli
            </p>
          </div>

          {/* Owner Contact Details */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2">
                <User size={18} />
                Property Owner
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm sm:text-base">{ownerDetails.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{ownerDetails.role}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    onClick={() => window.open(`tel:${ownerDetails.phone}`)}
                  >
                    <Phone size={14} />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    onClick={() => window.open(`mailto:${ownerDetails.email}`)}
                  >
                    <Mail size={14} />
                    Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Details */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Price details</h3>
              <div className="space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-tent-primary">
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
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold">Location</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openGoogleMaps}
                  className="text-xs sm:text-sm"
                >
                  <ExternalLink size={14} className="mr-1" />
                  View on Maps
                </Button>
              </div>
              
              {/* Map Placeholder */}
              <div 
                className="bg-gradient-to-br from-tent-secondary/20 to-tent-primary/20 rounded-lg h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={openGoogleMaps}
              >
                <div className="text-center space-y-2">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-tent-primary mx-auto" />
                  <div className="text-xs sm:text-sm text-muted-foreground">Click to view on Google Maps</div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground">
                Suriyur Village, Thanjavur to Panjapur, Aathi Parasakthi Nagar
              </p>
            </CardContent>
          </Card>

          {/* Blocks Information */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Available Blocks</h3>
              <div className="space-y-3">
                {blocks.map((block) => (
                  <div key={block.id} className="border border-border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{block.name}</h4>
                      <Badge variant="outline">
                        {block.availableUnits}/{block.totalUnits} Available
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Price: Rs.{block.pricePerUnit} per {block.measurementType}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bookings Section */}
          {bookings.length > 0 && (
            <Card className="shadow-card">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3">Recent Bookings</h3>
                <div className="space-y-3">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border border-border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground text-xs font-medium">
                              {booking.userAvatar}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{booking.userName}</p>
                            <p className="text-xs text-muted-foreground">
                              {booking.blockName} • {booking.bookedDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}>
                            {booking.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate('/chat', { 
                              state: { 
                                name: booking.userName, 
                                avatar: booking.userAvatar,
                                property: "Om Aathi Parasakthi Nagar",
                                type: 'property'
                              } 
                            })}
                          >
                            Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Property Details */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Property Details</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["24/7 Security", "Power Backup", "Water Supply", "Street Lights", "Playground", "Community Hall"].map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-tent-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Proximities */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Proximities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {proximities.map((proximity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-tent-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{proximity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Apps Availability */}
          <Card className="shadow-card">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-base sm:text-lg font-semibold">Apps availability</h3>
                <Badge variant="secondary" className="bg-tent-success text-white text-xs">
                  New
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Null</p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="sticky bottom-0 bg-card border-t border-border p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <div className="text-lg sm:text-xl font-bold text-tent-primary">Rs.599 / Per Sq.ft</div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 flex-1 sm:flex-none transition-all duration-300 hover:scale-105"
              >
                <Eye size={16} />
                View Listing
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 flex-1 sm:flex-none transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/chat', { 
                  state: { 
                    name: ownerDetails.name, 
                    avatar: ownerDetails.name.charAt(0).toUpperCase(),
                    property: "Om Aathi Parasakthi Nagar",
                    type: 'property'
                  } 
                })}
              >
                <MessageCircle size={16} />
                Chat Now
              </Button>
              <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg" className="flex-1 sm:flex-none transition-all duration-300 hover:scale-105">
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Book Property</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Select Block</Label>
                      <Select value={selectedBlock} onValueChange={setSelectedBlock}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a block" />
                        </SelectTrigger>
                        <SelectContent>
                          {blocks.map((block) => (
                            <SelectItem key={block.id} value={block.id}>
                              {block.name} - Rs.{block.pricePerUnit}/{block.measurementType} ({block.availableUnits} available)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setShowBookingDialog(false)} className="flex-1">
                        Cancel
                      </Button>
                      <Button onClick={handleBooking} className="flex-1">
                        Confirm Booking
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetails;
