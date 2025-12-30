import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Users, Wifi, Wind, Coffee, Utensils, Heart, Share2, ChevronLeft, Calendar, Phone } from "lucide-react";

// Extended property interface with full details
interface PropertyDetail {
  id: string;
  image: string;
  images?: string[];
  title: string;
  price: string;
  priceNote: string;
  amenities: string[];
  isTopSelling: boolean;
  location: string;
  rating: number;
  category: "camping" | "cottage" | "villa";
  description: string;
  capacity: number;
  checkInTime?: string;
  checkOutTime?: string;
  highlights: string[];
  activities: string[];
  policies?: string[];
  contact?: string;
  pricePerNight?: string;
}

const PropertyDetails = () => {
  const { propertyId } = useParams();

  // Mock property data - in real app, fetch from backend
  const propertyData: PropertyDetail = {
    id: propertyId || "1",
    image: "https://images.unsplash.com/photo-1571508601166-972e0a1f3ced?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571508601166-972e0a1f3ced?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1537359108129-c0eb8706cbf7?w=1200&h=800&fit=crop",
    ],
    title: "Luxury Lakeside Resort",
    price: "₹7,499",
    pricePerNight: "₹3,500",
    priceNote: "per person with meal",
    location: "Pawna Lake, Maharashtra",
    rating: 4.8,
    category: "cottage",
    amenities: [
      "Private Pool",
      "Private Washroom",
      "AC",
      "Mini Fridge",
      "Smart Projector",
      "Home Theatre",
      "BBQ",
      "Food Included",
      "Lake Touch",
      "Toiletries",
      "Garden",
    ],
    isTopSelling: true,
    capacity: 4,
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    description:
      "Experience the ultimate luxury at our lakeside retreat. Wake up to stunning lake views, enjoy world-class amenities, and unwind in nature's embrace. Perfect for couples, families, and groups seeking an unforgettable getaway.",
    highlights: [
      "Panoramic lake views",
      "Private infinity pool",
      "Spa and wellness center",
      "Gourmet dining experience",
      "Water sports facilities",
      "Photography-worthy locations",
    ],
    activities: [
      "Boating",
      "Swimming",
      "Hiking",
      "Bonfire",
      "Stargazing",
      "Yoga and meditation",
      "Photography tours",
      "Local cultural experiences",
    ],
    policies: [
      "Free cancellation up to 7 days before check-in",
      "50% refund for cancellation 3-7 days before",
      "No refund for cancellation within 3 days",
      "Children below 5 years stay free",
    ],
    contact: "+91 8181909069",
  };

  return (
    <>
      <Helmet>
        <title>{propertyData.title} | NESTAWAY</title>
        <meta
          name="description"
          content={propertyData.description}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header Navigation */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Properties</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="outline" data-testid="button-wishlist">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" data-testid="button-share">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative w-full h-96 md:h-screen/2 lg:h-96 bg-secondary overflow-hidden">
          <img
            src={propertyData.image}
            alt={propertyData.title}
            className="w-full h-full object-cover"
            data-testid="img-property-main"
          />
          {propertyData.isTopSelling && (
            <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground font-medium px-4 py-2">
              <Star className="w-4 h-4 mr-1 fill-current" />
              Top Rated
            </Badge>
          )}
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2" data-testid="text-property-title">
                      {propertyData.title}
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{propertyData.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="font-medium">{propertyData.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">About this property</h2>
                <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-property-description">
                  {propertyData.description}
                </p>
              </Card>

              {/* Highlights */}
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {propertyData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Amenities */}
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Amenities</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {propertyData.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 text-foreground">
                      <Wifi className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Activities */}
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Activities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {propertyData.activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 text-foreground">
                      <Coffee className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Policies */}
              {propertyData.policies && (
                <Card className="p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Cancellation Policies</h2>
                  <ul className="space-y-3">
                    {propertyData.policies.map((policy, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{policy}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-8 bg-card/50 border border-border">
                  {/* Price Section */}
                  <div className="mb-8">
                    <div className="text-muted-foreground text-sm mb-2">Price</div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-display font-bold text-primary">{propertyData.price}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{propertyData.priceNote}</div>
                    {propertyData.pricePerNight && (
                      <div className="text-sm text-muted-foreground">{propertyData.pricePerNight} per night</div>
                    )}
                  </div>

                  {/* Details Section */}
                  <div className="space-y-4 mb-8 pb-8 border-b">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Capacity</div>
                        <div className="font-medium text-foreground">{propertyData.capacity} guests</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Check-in</div>
                        <div className="font-medium text-foreground">{propertyData.checkInTime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Check-out</div>
                        <div className="font-medium text-foreground">{propertyData.checkOutTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <Button className="w-full mb-3 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium" data-testid="button-book-now">
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-base font-medium gap-2" data-testid="button-contact">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Button>

                  {/* Contact Info */}
                  <div className="mt-8 pt-8 border-t">
                    <div className="text-sm text-muted-foreground mb-3">Need help?</div>
                    <a href={`tel:${propertyData.contact}`} className="text-primary hover:text-primary/80 font-medium" data-testid="link-phone">
                      {propertyData.contact}
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
