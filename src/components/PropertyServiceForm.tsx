
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PropertyServiceForm = () => {
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

      {/* Company Name */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Company name</Label>
        <Input placeholder="Enter company" className="text-sm sm:text-base" />
      </div>

      {/* Service Category */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Service Category</Label>
        <Select>
          <SelectTrigger className="text-sm sm:text-base">
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
        <Label className="text-sm sm:text-base font-medium">PIN Code</Label>
        <Input placeholder="PIN code" className="text-sm sm:text-base" />
      </div>

      {/* Address */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Address</Label>
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

export default PropertyServiceForm;
