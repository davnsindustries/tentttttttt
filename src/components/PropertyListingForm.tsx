import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, Upload, Plus, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Block {
  id: string;
  name: string;
  pricePerUnit: string;
  measurementType: string;
  totalUnits: string;
  availableUnits: string;
}

const PropertyListingForm = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState("");
  const [proximities, setProximities] = useState<string[]>([]);
  const [newProximity, setNewProximity] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newImages = files.slice(0, 15 - uploadedImages.length);
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const addAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities(prev => [...prev, newAmenity.trim()]);
      setNewAmenity("");
    }
  };

  const removeAmenity = (amenity: string) => {
    setAmenities(prev => prev.filter(a => a !== amenity));
  };

  const addProximity = () => {
    if (newProximity.trim() && !proximities.includes(newProximity.trim())) {
      setProximities(prev => [...prev, newProximity.trim()]);
      setNewProximity("");
    }
  };

  const removeProximity = (proximity: string) => {
    setProximities(prev => prev.filter(p => p !== proximity));
  };

  const addBlock = () => {
    const newBlock: Block = {
      id: Date.now().toString(),
      name: "",
      pricePerUnit: "",
      measurementType: "sqft",
      totalUnits: "",
      availableUnits: ""
    };
    setBlocks(prev => [...prev, newBlock]);
  };

  const updateBlock = (id: string, field: keyof Block, value: string) => {
    setBlocks(prev => prev.map(block => 
      block.id === id ? { ...block, [field]: value } : block
    ));
  };

  const removeBlock = (id: string) => {
    setBlocks(prev => prev.filter(block => block.id !== id));
  };

  const measurementTypes = [
    { value: "sqft", label: "Square Feet" },
    { value: "sqm", label: "Square Meters" },
    { value: "acres", label: "Acres" },
    { value: "cents", label: "Cents" },
    { value: "guntha", label: "Guntha" },
    { value: "bigha", label: "Bigha" }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
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

      {/* Property Name */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Property Name</Label>
        <Input 
          placeholder="Enter property name"
          className="text-sm sm:text-base"
        />
      </div>

      {/* Property Description */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Property Description</Label>
        <Textarea 
          placeholder="Describe your property in detail..."
          className="text-sm sm:text-base min-h-[100px]"
        />
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
            <SelectItem value="residential-plot">Residential Plot</SelectItem>
            <SelectItem value="commercial-land">Commercial Land</SelectItem>
            <SelectItem value="farm-land">Farm Land</SelectItem>
            <SelectItem value="individual-house">Individual House</SelectItem>
            <SelectItem value="apartments">Apartments</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Property ID */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Property ID</Label>
        <Input 
          placeholder="Enter unique property ID"
          className="text-sm sm:text-base"
        />
        <p className="text-xs sm:text-sm text-muted-foreground">
          Provide a unique identifier for your property
        </p>
      </div>

      {/* Price Details */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Price Details</Label>
        <div className="space-y-3">
          <Input 
            placeholder="Starting price (e.g., Rs. 50,000)"
            className="text-sm sm:text-base"
          />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Enter the starting price for your property
          </p>
        </div>
      </div>

      {/* Blocks Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm sm:text-base font-medium">Blocks</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addBlock}
            className="flex items-center gap-2"
          >
            <Plus size={16} />
            Add Block
          </Button>
        </div>
        
        {blocks.map((block) => (
          <Card key={block.id} className="p-4">
            <CardContent className="p-0 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Block Details</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeBlock(block.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  placeholder="Block name"
                  value={block.name}
                  onChange={(e) => updateBlock(block.id, 'name', e.target.value)}
                  className="text-sm"
                />
                <Input
                  placeholder="Price per unit"
                  value={block.pricePerUnit}
                  onChange={(e) => updateBlock(block.id, 'pricePerUnit', e.target.value)}
                  className="text-sm"
                />
                <Select
                  value={block.measurementType}
                  onValueChange={(value) => updateBlock(block.id, 'measurementType', value)}
                >
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Measurement type" />
                  </SelectTrigger>
                  <SelectContent>
                    {measurementTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Total units"
                  value={block.totalUnits}
                  onChange={(e) => updateBlock(block.id, 'totalUnits', e.target.value)}
                  className="text-sm"
                />
                <Input
                  placeholder="Available units"
                  value={block.availableUnits}
                  onChange={(e) => updateBlock(block.id, 'availableUnits', e.target.value)}
                  className="text-sm sm:col-span-2"
                />
              </div>
            </CardContent>
          </Card>
        ))}
        
        {blocks.length === 0 && (
          <p className="text-xs sm:text-sm text-muted-foreground">
            Add blocks to organize your property units with different pricing
          </p>
        )}
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Amenities</Label>
        <div className="flex gap-2">
          <Input
            placeholder="Add amenity"
            value={newAmenity}
            onChange={(e) => setNewAmenity(e.target.value)}
            className="text-sm sm:text-base"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
          />
          <Button type="button" onClick={addAmenity} size="sm">
            <Plus size={16} />
          </Button>
        </div>
        
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
              >
                <span>{amenity}</span>
                <button
                  type="button"
                  onClick={() => removeAmenity(amenity)}
                  className="hover:text-destructive"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Proximities */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base font-medium">Proximities</Label>
        <div className="flex gap-2">
          <Input
            placeholder="Add nearby location"
            value={newProximity}
            onChange={(e) => setNewProximity(e.target.value)}
            className="text-sm sm:text-base"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addProximity())}
          />
          <Button type="button" onClick={addProximity} size="sm">
            <Plus size={16} />
          </Button>
        </div>
        
        {proximities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {proximities.map((proximity) => (
              <div
                key={proximity}
                className="flex items-center gap-1 bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md text-sm"
              >
                <span>{proximity}</span>
                <button
                  type="button"
                  onClick={() => removeProximity(proximity)}
                  className="hover:text-destructive"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
        
        <p className="text-xs sm:text-sm text-muted-foreground">
          Add nearby landmarks, schools, hospitals, etc.
        </p>
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
    </div>
  );
};

export default PropertyListingForm;