
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X, Upload } from "lucide-react";

const PropertyListingForm = () => {
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

      {/* Google Maps Link */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Google Maps Link (Optional)</Label>
        <Input 
          placeholder="https://maps.google.com/..."
          className="text-sm sm:text-base"
          type="url"
        />
        <p className="text-xs sm:text-sm text-muted-foreground">
          Paste the Google Maps link for your property location
        </p>
      </div>

      {/* Property Images */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Property Images</Label>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="property-images"
              disabled={uploadedImages.length >= 15}
            />
            <label 
              htmlFor="property-images" 
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
                    alt={`Property ${index + 1}`}
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
            Upload up to 15 images of your property. Supported formats: JPG, PNG, WEBP
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingForm;
