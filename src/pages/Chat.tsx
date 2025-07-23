import { ArrowLeft, Send, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-sm">S</span>
            </div>
            <span className="font-medium">Sales@LM</span>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-8">
          <p className="text-muted-foreground text-center mb-8">
            You're now chatting with the sales team
          </p>
        </div>

        {/* Message Input */}
        <div className="bg-card border-t border-border p-4">
          <div className="flex items-center gap-3 max-w-lg mx-auto">
            <Button variant="ghost" size="sm" className="p-2">
              <Smile size={20} className="text-muted-foreground" />
            </Button>
            <div className="flex-1 relative">
              <Input 
                placeholder="Start typing..."
                className="pr-12 rounded-full"
              />
              <Button size="sm" className="absolute right-1 top-1 rounded-full p-2">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;