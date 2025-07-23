import { MapPin, Filter, Building, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/ServiceCard";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    { 
      icon: <Wrench size={24} />, 
      title: "AC Services" 
    },
    { 
      icon: <Wrench size={24} />, 
      title: "Electricals & Plumbing" 
    },
    { 
      icon: <Building size={24} />, 
      title: "Carpenting" 
    },
    { 
      icon: <Building size={24} />, 
      title: "Civil mason" 
    },
    { 
      icon: <Wrench size={24} />, 
      title: "Painting" 
    },
    { 
      icon: <Wrench size={24} />, 
      title: "Demolition" 
    },
    { 
      icon: <Wrench size={24} />, 
      title: "Purifier Service" 
    },
    { 
      icon: <Building size={24} />, 
      title: "Gardening" 
    },
    { 
      icon: <Wrench size={24} />, 
      title: "Appliance Service" 
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="text-red-500" />
            <span className="font-medium">Teachers Colony</span>
          </div>
          
          <div className="relative mb-3">
            <Input 
              placeholder="Apartments"
              className="pr-12 rounded-full"
            />
            <Button size="sm" className="absolute right-1 top-1 rounded-full">
              <Filter size={16} />
            </Button>
          </div>

          <div className="flex gap-8 border-b border-border">
            <button className="pb-2 px-1 border-b-2 border-transparent text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building size={16} />
                Properties
              </div>
            </button>
            <button className="pb-2 px-1 border-b-2 border-primary text-primary font-medium">
              <div className="flex items-center gap-2">
                <Wrench size={16} />
                Services
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <h3 className="font-medium mb-4">Property services</h3>
          
          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;