
import { Home, Heart, MessageCircle, User, PlusCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Explore", path: "/" },
    { icon: Heart, label: "Wishlist", path: "/wishlist" },
    { icon: PlusCircle, label: "Feed", path: "/post" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-50">
      <div className="flex items-center justify-around px-4 py-2 max-w-lg mx-auto">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center p-2 min-w-0 flex-1 relative transition-all duration-200 hover:scale-105 group",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {index === 2 && (
                <div className="absolute -top-4 bg-gradient-primary rounded-full p-3 shadow-button hover:shadow-float transition-all duration-200 hover:scale-110 animate-float">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
              )}
              {index !== 2 && <Icon size={20} className="group-hover:scale-110 transition-transform duration-200" />}
              <span className={cn(
                "text-xs mt-1 font-medium transition-all duration-200",
                index === 2 && "mt-3",
                isActive && "scale-105"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
