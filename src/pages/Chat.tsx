import { ArrowLeft, Send, Smile, Building2, Store, Phone, MoreVertical } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Layout from "@/components/Layout";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm interested in your property/service. Could you provide more details?",
      sender: "other",
      time: "10:30 AM"
    },
    {
      id: 2,
      text: "Hello! Sure, I'd be happy to help. What specific information would you like to know?",
      sender: "me",
      time: "10:32 AM"
    }
  ]);

  // Get contact info from navigation state
  const contactInfo = location.state || { name: "Sales@LM", avatar: "S" };

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
                <span className="text-primary-foreground font-medium text-sm">
                  {contactInfo.avatar}
                </span>
              </div>
              <div>
                <span className="font-medium text-sm">{contactInfo.name}</span>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Phone size={18} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <MoreVertical size={18} />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'me'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-card border-t border-border p-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="p-2">
              <Smile size={20} className="text-muted-foreground" />
            </Button>
            <div className="flex-1 relative">
              <Input 
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-12 rounded-full"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 rounded-full p-2"
                onClick={sendMessage}
              >
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