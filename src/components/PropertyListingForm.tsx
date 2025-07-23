
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PropertyListingForm = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Legal Name */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Legal name</Label>
        <div className="space-y-3">
          <Input 
            placeholder="First name On ID"
            defaultValue="deva"
            className="text-sm sm:text-base"
          />
          <Input 
            placeholder="Last name on ID"
            defaultValue="Sanjay"
            className="text-sm sm:text-base"
          />
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Make sure this name matches on your Government ID.
        </p>
      </div>

      {/* Phone Number */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Phone number</Label>
        <Input placeholder="Phone number" className="text-sm sm:text-base" />
      </div>

      {/* Email */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Email</Label>
        <Input 
          placeholder="Email address"
          defaultValue="devasanjay14@gmail.com"
          className="text-sm sm:text-base"
        />
      </div>

      {/* Ownership */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Ownership</Label>
        <Select>
          <SelectTrigger className="text-sm sm:text-base">
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
        <Label className="text-sm sm:text-base font-medium">Property type</Label>
        <Select>
          <SelectTrigger className="text-sm sm:text-base">
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
        <Label className="text-sm sm:text-base font-medium">Property location</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input placeholder="Street" className="text-sm sm:text-base" />
          <Input placeholder="Village" className="text-sm sm:text-base" />
          <Input placeholder="Taluk" className="text-sm sm:text-base" />
          <Input placeholder="District" className="text-sm sm:text-base" />
          <Input placeholder="City" className="text-sm sm:text-base sm:col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default PropertyListingForm;
