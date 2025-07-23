
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ServiceCard = ({ icon, title, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className="overflow-hidden shadow-card hover:shadow-float transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
        <div className="bg-primary rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 mb-2 sm:mb-3 inline-block">
          <div className="text-primary-foreground">
            {icon}
          </div>
        </div>
        <h3 className="font-medium text-xs sm:text-sm leading-tight">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
