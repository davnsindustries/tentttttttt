import { Heart, MapPin } from "lucide-react";
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
  onCardClick 
}: PropertyCardProps) => {
  return (
    <Card 
      className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 cursor-pointer"
      onClick={onCardClick}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            PRICE {price}
          </Badge>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle?.();
          }}
          className="absolute top-3 right-3 p-2 bg-card/80 backdrop-blur-sm rounded-full"
        >
          <Heart 
            size={16} 
            className={isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"} 
          />
        </button>
        {features.length > 0 && (
          <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg p-2">
            <div className="text-sm font-medium">Features</div>
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="text-xs text-muted-foreground">
                ▶ {feature}
              </div>
            ))}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{location}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin size={14} className="mr-1" />
          {price} / Per Sq.ft
        </div>
        <Button variant="outline" size="sm" className="w-full">
          BOOK NOW
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;