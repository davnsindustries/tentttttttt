
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ServiceCard = ({ icon, title, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className="overflow-hidden shadow-card hover:shadow-float hover-lift hover-glow transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
        <div className="bg-primary rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 mb-2 sm:mb-3 inline-block group-hover:scale-110 group-hover:bg-gradient-primary transition-all duration-300 animate-scale-in">
          <div className="text-primary-foreground group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
        </div>
        <h3 className="font-medium text-xs sm:text-sm leading-tight group-hover:text-primary transition-colors duration-200">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
