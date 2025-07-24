
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X, Upload } from "lucide-react";

const PropertyServiceForm = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newImages = files.slice(0, 15 - uploadedImages.length);
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Service Images - Moved to top */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Service Images</Label>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="service-images"
              disabled={uploadedImages.length >= 15}
            />
            <label 
              htmlFor="service-images" 
              className={`flex items-center gap-2 px-4 py-2 border border-input rounded-md cursor-pointer hover:bg-accent transition-colors text-sm ${
                uploadedImages.length >= 15 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Upload size={16} />
              Upload Images ({uploadedImages.length}/15)
            </label>
          </div>
          
          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {uploadedImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Service ${index + 1}`}
                    className="w-full h-20 sm:h-24 object-cover rounded-lg border border-border"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(index)}
                  >
                    <X size={12} />
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          <p className="text-xs sm:text-sm text-muted-foreground">
            Upload up to 15 images showcasing your services. Supported formats: JPG, PNG, WEBP
          </p>
        </div>
      </div>

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

      {/* Phone Number - Added */}
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
            <SelectItem value="construction">Construction & Contractors</SelectItem>
            <SelectItem value="landscaping">Landscaping & Gardening</SelectItem>
            <SelectItem value="security">Security Systems</SelectItem>
            <SelectItem value="roofing">Roofing & Waterproofing</SelectItem>
            <SelectItem value="flooring">Flooring & Tiling</SelectItem>
            <SelectItem value="cleaning">Cleaning & Maintenance</SelectItem>
            <SelectItem value="interiors">Interior Design</SelectItem>
            <SelectItem value="glass">Glass & Aluminum Work</SelectItem>
            <SelectItem value="steel">Steel Fabrication</SelectItem>
            <SelectItem value="solar">Solar Installation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Service Description */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Service Description</Label>
        <Input placeholder="Brief description of your services" className="text-sm sm:text-base" />
      </div>

      {/* Gender */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Gender</Label>
        <Select>
          <SelectTrigger className="text-sm sm:text-base">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Available Days */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Available Days</Label>
        <Input placeholder="e.g., Monday to Friday, All days" className="text-sm sm:text-base" />
      </div>

      {/* Experience */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Experience (Years)</Label>
        <Input placeholder="Years of experience" className="text-sm sm:text-base" type="number" />
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

      {/* Google Maps Link */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Google Maps Link (Optional)</Label>
        <Input 
          placeholder="https://maps.google.com/..."
          className="text-sm sm:text-base"
          type="url"
        />
        <p className="text-xs sm:text-sm text-muted-foreground">
          Paste the Google Maps link for your service location
        </p>
      </div>
    </div>
  );
};

export default PropertyServiceForm;
