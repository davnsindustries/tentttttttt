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
      <CardContent className="p-6 text-center">
        <div className="bg-primary rounded-2xl p-4 mb-3 inline-block">
          <div className="text-primary-foreground">
            {icon}
          </div>
        </div>
        <h3 className="font-medium text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;