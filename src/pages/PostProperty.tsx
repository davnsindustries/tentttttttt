import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";

const PostProperty = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"listing" | "service">("listing");

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
          <h1 className="text-lg font-semibold">Post Yours</h1>
        </div>

        {/* Tabs */}
        <div className="bg-card px-4">
          <div className="flex gap-0 border-b border-border">
            <button
              onClick={() => setActiveTab("listing")}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-t-xl transition-colors ${
                activeTab === "listing" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Property Listing
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-t-xl transition-colors ${
                activeTab === "service" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Property Service
            </button>
          </div>
        </div>

        <div className="p-4">
          {activeTab === "listing" && (
            <div className="space-y-6">
              {/* Legal Name */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Legal name</Label>
                <div className="space-y-3">
                  <Input 
                    placeholder="First name On ID"
                    defaultValue="deva"
                  />
                  <Input 
                    placeholder="Last name on ID"
                    defaultValue="Sanjay"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Make sure this name matches on your Government ID.
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Phone number</Label>
                <Input placeholder="Phone number" />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Email</Label>
                <Input 
                  placeholder="Email address"
                  defaultValue="devasanjay14@gmail.com"
                />
              </div>

              {/* Ownership */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Ownership</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ownership" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="builder">Builder</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Property type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Location */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Property location</Label>
                <div className="space-y-3">
                  <Input placeholder="Street" />
                  <Input placeholder="Village" />
                  <Input placeholder="Taluk" />
                  <Input placeholder="District" />
                  <Input placeholder="City" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1">
                  Submit
                </Button>
              </div>
            </div>
          )}

          {activeTab === "service" && (
            <div className="space-y-6">
              {/* Legal Name */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Legal name</Label>
                <div className="space-y-3">
                  <Input 
                    placeholder="First name On ID"
                    defaultValue="deva"
                  />
                  <Input 
                    placeholder="Last name on ID"
                    defaultValue="Sanjay"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Make sure this name matches on your Government ID.
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Phone number</Label>
                <Input placeholder="Phone number" />
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Email</Label>
                <Input 
                  placeholder="Email address"
                  defaultValue="devasanjay14@gmail.com"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Company name</Label>
                <Input placeholder="Enter company" />
              </div>

              {/* Service Category */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Service Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ac">AC Services</SelectItem>
                    <SelectItem value="electrical">Electricals & Plumbing</SelectItem>
                    <SelectItem value="carpentry">Carpentry</SelectItem>
                    <SelectItem value="civil">Civil mason</SelectItem>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="demolition">Demolition</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* PIN Code */}
              <div className="space-y-3">
                <Label className="text-base font-medium">PIN Code</Label>
                <Input placeholder="PIN code" />
              </div>

              {/* Address */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Address</Label>
                <div className="space-y-3">
                  <Input placeholder="Street" />
                  <Input placeholder="Village" />
                  <Input placeholder="Taluk" />
                  <Input placeholder="District" />
                  <Input placeholder="City" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1">
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PostProperty;