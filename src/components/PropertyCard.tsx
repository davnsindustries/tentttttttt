
import { Heart, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  image: string;
  features?: string[];
  type: "sale" | "rent";
  isWishlisted?: boolean;
  onWishlistToggle?: () => void;
  onCardClick?: () => void;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const PropertyCard = ({ 
  title, 
  price, 
  location, 
  image, 
  features = [], 
  type,
  isWishlisted = false,
  onWishlistToggle,
  onCardClick,
  coordinates 
}: PropertyCardProps) => {
  const openGoogleMaps = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (coordinates) {
      const url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
      window.open(url, '_blank');
    }
  };

  return (
    <Card 
      className="overflow-hidden shadow-card hover:shadow-float hover-lift hover-glow transition-all duration-300 cursor-pointer w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto group"
      onClick={onCardClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs sm:text-sm animate-scale-in backdrop-blur-sm">
            {type === "sale" ? "SALE" : "RENT"} {price}
          </Badge>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle?.();
          }}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card hover:scale-110 transition-all duration-200"
        >
          <Heart 
            size={14} 
            className={`${isWishlisted ? "fill-red-500 text-red-500 animate-pulse" : "text-muted-foreground"} hover:scale-110 transition-all duration-200`} 
          />
        </button>
        {coordinates && (
          <button
            onClick={openGoogleMaps}
            className="absolute top-2 sm:top-3 right-10 sm:right-12 p-1.5 sm:p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card hover:scale-110 transition-all duration-200"
          >
            <ExternalLink size={14} className="text-muted-foreground hover:text-primary transition-colors duration-200" />
          </button>
        )}
        {features.length > 0 && (
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-card/90 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 max-w-[60%]">
            <div className="text-xs sm:text-sm font-medium">Features</div>
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="text-[10px] sm:text-xs text-muted-foreground truncate">
                ▶ {feature}
              </div>
            ))}
            {features.length > 2 && (
              <div className="text-[10px] sm:text-xs text-muted-foreground">
                +{features.length - 2} more
              </div>
            )}
          </div>
        )}
      </div>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-semibold text-sm sm:text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-2">{location}</p>
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-3">
          <MapPin size={12} className="mr-1 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
          <span className="truncate">{price} / Per Sq.ft</span>
        </div>
        <Button variant="default" size="sm" className="w-full text-xs sm:text-sm hover:scale-[1.02] transition-all duration-200 group-hover:bg-primary group-hover:shadow-button">
          CHAT NOW
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
