import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Users, Wifi, Wind, Coffee, ChevronLeft, Calendar, Phone } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";
import { properties } from "@/components/Properties";

// Extended property interface with full details
interface PropertyDetail {
  id: string;
  image: string;
  images?: string[];
  title: string;
  price: string;
  pricePerNight?: string;
  priceNote: string;
  amenities: string[];
  isTopSelling: boolean;
  location: string;
  rating: number;
  category: "camping" | "cottage" | "villa";
  description: string;
  capacity: number;
  maxCapacity?: number;
  checkInTime?: string;
  checkOutTime?: string;
  highlights: string[];
  activities: string[];
  policies?: string[];
  contact?: string;
}

const PropertyDetails = () => {
  const { propertyId } = useParams();

  // Find property from the properties list
  const foundProperty = properties.find((p) => p.id === propertyId);
  
  // Default property data if not found
  const defaultProperty: PropertyDetail = {
    id: propertyId || "1",
    image: "https://images.unsplash.com/photo-1571508601166-972e0a1f3ced?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571508601166-972e0a1f3ced?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1537359108129-c0eb8706cbf7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551092160-e23e9b6b8f69?w=1200&h=800&fit=crop",
    ],
    title: "Luxury Lakeside Cottage",
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
    contact: "+91 8669505727",
  };

  // Merge found property with default property
  const propertyData: PropertyDetail = foundProperty
    ? {
        ...defaultProperty,
        ...foundProperty,
        images: foundProperty.images || [foundProperty.image],
        highlights: foundProperty.highlights || [
          "Excellent amenities",
          "Beautiful location",
          "Great value",
          "Friendly staff",
        ],
        activities: foundProperty.activities || [
          "Boating",
          "Bonfire",
          "Swimming",
          "Hiking",
        ],
        policies: foundProperty.policies || [
          "Free cancellation up to 7 days before check-in",
          "50% refund for cancellation 3-7 days before",
        ],
      }
    : defaultProperty;

  const isCampingOrCottage = propertyData.category === "camping" || propertyData.category === "cottage";
  const isVilla = propertyData.category === "villa";

  return (
    <>
      <Helmet>
        <title>{propertyData.title} | NESTAWAY</title>
        <meta name="description" content={propertyData.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header Navigation */}
        <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors" data-testid="link-back">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Properties</span>
            </Link>
            <div className="flex items-center gap-2">
              {propertyData.isTopSelling && (
                <Badge className="bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Top Rated
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="container mx-auto px-6 py-8">
          <ImageSlider images={propertyData.images || [propertyData.image]} title={propertyData.title} />
        </div>

        {/* Pricing Card - Mobile Priority */}
        <div className="lg:hidden container mx-auto px-6 mb-8">
          <Card className="p-8 bg-card/50 border border-border rounded-2xl">
            {/* Pricing Section */}
            <div className="mb-8">
              <div className="text-muted-foreground text-sm mb-2">Price</div>

              {isCampingOrCottage ? (
                /* Per-Person Pricing for Camping & Cottage */
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-display font-bold text-primary" data-testid="text-price-per-person">
                      {propertyData.price}
                    </span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">{propertyData.priceNote}</div>
                  {propertyData.pricePerNight && (
                    <div className="text-sm text-muted-foreground mb-1">
                      {propertyData.pricePerNight} per night
                    </div>
                  )}
                </>
              ) : (
                /* Fixed Villa Rate for Villas */
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-display font-bold text-primary" data-testid="text-price-villa">
                      {propertyData.price}
                    </span>
                    <span className="text-muted-foreground">/villa</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">{propertyData.priceNote}</div>
                  <div className="text-sm text-muted-foreground mb-4">Fixed villa rate</div>
                </>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-4 mb-8 pb-8 border-b">
              {isCampingOrCottage ? (
                /* Camping/Cottage Details */
                <>
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
                </>
              ) : (
                /* Villa Details */
                <>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Max Capacity</div>
                      <div className="font-medium text-foreground">Up to {propertyData.maxCapacity || propertyData.capacity} guests</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Property Type</div>
                      <div className="font-medium text-foreground">Luxury Villa</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-xs text-muted-foreground">Check-in</div>
                      <div className="font-medium text-foreground">{propertyData.checkInTime}</div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* CTA Buttons */}
            <Button
              className="w-full mb-3 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 text-base font-medium gap-2"
              data-testid="button-contact"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t">
              <div className="text-sm text-muted-foreground mb-3">Questions about this property?</div>
              <a
                href={`tel:${propertyData.contact}`}
                className="text-primary hover:text-primary/80 font-medium text-lg"
                data-testid="link-phone"
              >
                {propertyData.contact}
              </a>
            </div>
          </Card>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Title & Info */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4" data-testid="text-property-title">
                  {propertyData.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{propertyData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="font-semibold text-foreground">{propertyData.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-property-description">
                  {propertyData.description}
                </p>
              </div>

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
                <h2 className="text-2xl font-semibold text-foreground mb-6">Activities & Experiences</h2>
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

            {/* Right Column - Pricing & Booking (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-8 bg-card/50 border border-border rounded-2xl">
                  {/* Pricing Section */}
                  <div className="mb-8">
                    <div className="text-muted-foreground text-sm mb-2">Price</div>

                    {isCampingOrCottage ? (
                      /* Per-Person Pricing for Camping & Cottage */
                      <>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl font-display font-bold text-primary" data-testid="text-price-per-person">
                            {propertyData.price}
                          </span>
                          <span className="text-muted-foreground">/person</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">{propertyData.priceNote}</div>
                        {propertyData.pricePerNight && (
                          <div className="text-sm text-muted-foreground mb-1">
                            {propertyData.pricePerNight} per night
                          </div>
                        )}
                      </>
                    ) : (
                      /* Fixed Villa Rate for Villas */
                      <>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl font-display font-bold text-primary" data-testid="text-price-villa">
                            {propertyData.price}
                          </span>
                          <span className="text-muted-foreground">/villa</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">{propertyData.priceNote}</div>
                        <div className="text-sm text-muted-foreground mb-4">Fixed villa rate</div>
                      </>
                    )}
                  </div>

                  {/* Details Section */}
                  <div className="space-y-4 mb-8 pb-8 border-b">
                    {isCampingOrCottage ? (
                      /* Camping/Cottage Details */
                      <>
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
                      </>
                    ) : (
                      /* Villa Details */
                      <>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <div className="text-xs text-muted-foreground">Max Capacity</div>
                            <div className="font-medium text-foreground">Up to {propertyData.maxCapacity || propertyData.capacity} guests</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Wind className="w-5 h-5 text-primary" />
                          <div>
                            <div className="text-xs text-muted-foreground">Property Type</div>
                            <div className="font-medium text-foreground">Luxury Villa</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <div className="text-xs text-muted-foreground">Check-in</div>
                            <div className="font-medium text-foreground">{propertyData.checkInTime}</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <Button
                    className="w-full mb-3 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
                    data-testid="button-book-now"
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 text-base font-medium gap-2"
                    data-testid="button-contact"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Button>

                  {/* Contact Info */}
                  <div className="mt-8 pt-8 border-t">
                    <div className="text-sm text-muted-foreground mb-3">Questions about this property?</div>
                    <a
                      href={`tel:${propertyData.contact}`}
                      className="text-primary hover:text-primary/80 font-medium text-lg"
                      data-testid="link-phone"
                    >
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
