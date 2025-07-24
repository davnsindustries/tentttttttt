import { ArrowLeft, ChevronRight, Settings, User, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Profile = () => {
  const navigate = useNavigate();

  const profileItems = [
    { icon: User, label: "Profile info", action: () => {} },
    { icon: Settings, label: "Notifications", subtitle: "How we contact you", action: () => {} },
    { icon: Settings, label: "Login & Security", subtitle: "Password and account control", action: () => {} },
    { icon: User, label: "Refer a Friend", subtitle: "Invite friends to join Terent", action: () => {} }
  ];

  const appItems = [
    { icon: HelpCircle, label: "About App", subtitle: "Learn more about our app & policies", action: () => navigate("/about") },
    { icon: HelpCircle, label: "Visit the helpdesk", subtitle: "Support for issues", action: () => navigate("/help") },
    { icon: HelpCircle, label: "How Terent works", subtitle: "Take a tour of our services", action: () => navigate("/how-it-works") }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background animate-fade-in">
        {/* Header */}
        <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 animate-slide-in-right">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-semibold">Profile</h1>
        </div>

        <div className="p-4 animate-fade-in">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-6 animate-scale-in">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <span className="text-primary-foreground font-medium">d</span>
            </div>
            <span className="font-medium text-lg">deva Sanjay</span>
          </div>

          {/* Profile Info Section */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-2 mb-3">
              <User size={18} className="text-muted-foreground" />
              <h2 className="font-medium">Profile info</h2>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between items-center py-3 border-b border-border transition-all duration-300 hover:bg-accent/50 rounded-lg px-2">
                <div>
                  <div className="font-medium">Legal name</div>
                  <div className="text-sm text-muted-foreground">deva Sanjay</div>
                </div>
                <Button variant="ghost" size="sm" className="text-primary transition-all duration-300 hover:scale-105">Edit</Button>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-border transition-all duration-300 hover:bg-accent/50 rounded-lg px-2">
                <div>
                  <div className="font-medium">Email address</div>
                  <div className="text-sm text-muted-foreground">d****4@gmail.com</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-border transition-all duration-300 hover:bg-accent/50 rounded-lg px-2">
                <div>
                  <div className="font-medium">Phone number</div>
                  <div className="text-sm text-muted-foreground">Add a number, So that our LM team can get in touch. You can add another number</div>
                </div>
                <Button variant="ghost" size="sm" className="text-primary transition-all duration-300 hover:scale-105">Add</Button>
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-2 mb-3">
              <Settings size={18} className="text-muted-foreground" />
              <h2 className="font-medium">Account</h2>
            </div>
            
            <div className="space-y-1">
              {profileItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full flex items-center justify-between py-3 border-b border-border transition-all duration-300 hover:bg-accent/50 rounded-lg px-2 hover:scale-105"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="text-left">
                    <div className="font-medium">{item.label}</div>
                    {item.subtitle && (
                      <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                    )}
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>

          {/* App Info Section */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="flex items-center gap-2 mb-3">
              <Settings size={18} className="text-muted-foreground" />
              <h2 className="font-medium">App info</h2>
            </div>
            
            <div className="space-y-1">
              {appItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full flex items-center justify-between py-3 border-b border-border transition-all duration-300 hover:bg-accent/50 rounded-lg px-2 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="text-left">
                    <div className="font-medium">{item.label}</div>
                    {item.subtitle && (
                      <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                    )}
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle size={18} className="text-muted-foreground" />
              <h2 className="font-medium">Support</h2>
            </div>
          </div>

          {/* Logout Button */}
          <Button 
            variant="outline" 
            className="w-full mb-8 transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>

          {/* App Logo & Copyright */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "1100ms" }}>
            <div className="w-8 h-8 bg-muted rounded mx-auto mb-2 transition-all duration-300 hover:scale-110"></div>
            <div className="text-lg font-medium mb-1">Terent</div>
            <div className="text-sm text-muted-foreground">© 2025 Terent. All rights reserved.</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;