import { ArrowLeft, Send, Smile, Building2, Store, Phone, MoreVertical, Home, Wrench } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Layout from "@/components/Layout";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("property-listing");
  
  // Check if this is a direct chat (has contactInfo in state)
  const isDirectChat = location.state?.name;
  const contactInfo = location.state || { name: "Sales@LM", avatar: "S" };

  // Sample chat data for property listings
  const propertyChats = [
    {
      id: "1",
      name: "Ahmed Hassan",
      avatar: "AH",
      lastMessage: "Is the apartment still available?",
      time: "2:30 PM",
      unread: 2,
      property: "3 BHK Apartment in Gulshan"
    },
    {
      id: "2", 
      name: "Fatima Khan",
      avatar: "FK",
      lastMessage: "Can we schedule a visit?",
      time: "1:15 PM",
      unread: 0,
      property: "Villa in Dhanmondi"
    },
    {
      id: "3",
      name: "Mohammad Ali",
      avatar: "MA",
      lastMessage: "What's the final price?",
      time: "11:45 AM",
      unread: 1,
      property: "Commercial Space in Motijheel"
    }
  ];

  // Sample chat data for property services
  const serviceChats = [
    {
      id: "4",
      name: "Rashid Electrician",
      avatar: "RE",
      lastMessage: "I can come tomorrow at 2 PM",
      time: "3:00 PM",
      unread: 1,
      service: "Electrical Repair"
    },
    {
      id: "5",
      name: "Nasir Plumber", 
      avatar: "NP",
      lastMessage: "Fixed the issue, thank you!",
      time: "12:30 PM",
      unread: 0,
      service: "Plumbing Service"
    },
    {
      id: "6",
      name: "Karim Painter",
      avatar: "KP",
      lastMessage: "When do you need the work done?",
      time: "10:20 AM",
      unread: 3,
      service: "House Painting"
    }
  ];

  // Direct chat messages
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

  const openDirectChat = (chatData: any, type: string) => {
    navigate('/chat', { 
      state: { 
        name: chatData.name, 
        avatar: chatData.avatar,
        property: chatData.property,
        service: chatData.service,
        type: type
      } 
    });
  };

  // If this is a direct chat, show the chat interface
  if (isDirectChat) {
    return (
      <Layout>
        <div className="h-screen bg-background flex flex-col">
          {/* Header - Sticky */}
          <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => navigate('/chat')}
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
                  <p className="text-xs text-muted-foreground">
                    {contactInfo.property || contactInfo.service || "Online"}
                  </p>
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

          {/* Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg transition-all duration-200 ${
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

          {/* Message Input - Sticky */}
          <div className="bg-card border-t border-border p-4 sticky bottom-0">
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
                  className="absolute right-1 top-1 rounded-full p-2 hover:scale-105 transition-transform"
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
  }

  // Main chat list view
  return (
    <Layout>
      <div className="min-h-screen bg-background">
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
          <h1 className="text-lg font-semibold">Chats</h1>
        </div>

        {/* Tabs for Property Listing and Property Service */}
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="property-listing" className="flex items-center gap-2">
                <Home size={16} />
                Property Listing
              </TabsTrigger>
              <TabsTrigger value="property-service" className="flex items-center gap-2">
                <Wrench size={16} />
                Property Service
              </TabsTrigger>
            </TabsList>

            {/* Property Listing Chats */}
            <TabsContent value="property-listing" className="space-y-3 mt-4">
              {propertyChats.map((chat) => (
                <Card 
                  key={chat.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => openDirectChat(chat, 'property')}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-medium text-sm">
                          {chat.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-sm">{chat.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                            {chat.unread > 0 && (
                              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-xs text-primary-foreground">{chat.unread}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{chat.property}</p>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Property Service Chats */}
            <TabsContent value="property-service" className="space-y-3 mt-4">
              {serviceChats.map((chat) => (
                <Card 
                  key={chat.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => openDirectChat(chat, 'service')}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-medium text-sm">
                          {chat.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-sm">{chat.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                            {chat.unread > 0 && (
                              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-xs text-primary-foreground">{chat.unread}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{chat.service}</p>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;