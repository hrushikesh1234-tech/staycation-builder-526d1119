import { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "./PropertyCard";
import domeResort from "@/assets/dome-resort.jpg";
import lakestoryResort from "@/assets/lakestory-resort.jpg";
import riversideGlamping from "@/assets/riverside-glamping.jpg";
import colorfulCabins from "@/assets/colorful-cabins.jpg";
import coupleRetreat from "@/assets/couple-retreat.jpg";
import cozynestResort from "@/assets/cozynest-resort.jpg";

interface Property {
  image: string;
  title: string;
  price: string;
  priceNote: string;
  amenities: string[];
  isTopSelling: boolean;
  location: string;
  rating: number;
  category: "camping" | "cottage" | "villa";
}

const properties: Property[] = [
  // Top Campings (Pawna) - 6 properties
  {
    image: riversideGlamping,
    title: "Pawna Riverside Glamping",
    price: "₹2,999",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "DJ on Saturday",
      "Riverview",
      "Food Included",
      "Free Activities",
      "Bonfire",
      "Garden",
      "Music",
      "Liquor Bar",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.7,
    category: "camping",
  },
  {
    image: cozynestResort,
    title: "CozyNest at Chavsar – Pawna Lake",
    price: "₹3,300",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "Food Included",
      "Paid Boating",
      "Bonfire",
      "Lake Access",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.5,
    category: "camping",
  },
  {
    image: colorfulCabins,
    title: "Lakeside Glamping Camp – Pawna Lake",
    price: "₹2,499",
    priceNote: "per person with meal",
    amenities: [
      "Canvas Tent",
      "Bonfire",
      "Stargazing",
      "Food Included",
      "Lake Access",
      "Free Activities",
      "Riverside View",
      "Camping Bed",
    ],
    isTopSelling: true,
    location: "Pawna Lake",
    rating: 4.8,
    category: "camping",
  },
  {
    image: riversideGlamping,
    title: "Adventure Camping Resort – Pawna",
    price: "₹2,799",
    priceNote: "per person with meal",
    amenities: [
      "Adventure Activities",
      "Campfire",
      "Stargazing",
      "Food Included",
      "Nature Trails",
      "Photography Points",
      "Lake Proximity",
      "Friendly Staff",
    ],
    isTopSelling: true,
    location: "Pawna Lake",
    rating: 4.7,
    category: "camping",
  },
  {
    image: lakestoryResort,
    title: "Nature's Embrace Camping – Pawna",
    price: "₹2,599",
    priceNote: "per person with meal",
    amenities: [
      "Tent Stay",
      "Bonfire",
      "Local Cuisine",
      "Hiking",
      "Bird Watching",
      "Photography",
      "Sunset View",
      "Expert Guides",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.6,
    category: "camping",
  },
  {
    image: domeResort,
    title: "Pawna Eco Glamping Site",
    price: "₹3,099",
    priceNote: "per person with meal",
    amenities: [
      "Eco-friendly Tents",
      "Organic Food",
      "Nature Walks",
      "Wellness Activities",
      "Bonfire",
      "Lake View",
      "Sustainable Practices",
      "Garden Access",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.9,
    category: "camping",
  },
  // Top Cottages (Pawna) - 6 properties
  {
    image: colorfulCabins,
    title: "AC House with Sleeping Loft – Pawna Lake",
    price: "₹3,199",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "AC",
      "Common Swimming Pool",
      "Food Included",
      "Free Activities",
      "Paid Boating",
      "Bonfire",
      "Lake Access",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.6,
    category: "cottage",
  },
  {
    image: lakestoryResort,
    title: "Lakestory Resort – Pawna Lake",
    price: "₹7,499",
    priceNote: "per person with meal",
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
    ],
    isTopSelling: true,
    location: "Pawna Lake",
    rating: 4.8,
    category: "cottage",
  },
  {
    image: coupleRetreat,
    title: "Dew Dreams – Couple Stay with Private Pool",
    price: "₹8,249",
    priceNote: "per person with meal",
    amenities: [
      "Private Pool",
      "Lakeview Room",
      "Steam Bath",
      "Food Included",
      "Free Activities",
      "Paid Boating",
      "Bonfire",
      "Garden",
      "Room Service",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.9,
    category: "cottage",
  },
  {
    image: colorfulCabins,
    title: "Serene Cottage Retreat – Pawna",
    price: "₹4,999",
    priceNote: "per person with meal",
    amenities: [
      "Private Cottage",
      "Valley View",
      "AC & Heater",
      "Attached Bathroom",
      "Mini Kitchen",
      "Bonfire",
      "Food Included",
      "Peaceful Location",
    ],
    isTopSelling: true,
    location: "Pawna Lake",
    rating: 4.7,
    category: "cottage",
  },
  {
    image: lakestoryResort,
    title: "Riverside Cottage Escape – Pawna",
    price: "₹5,499",
    priceNote: "per person with meal",
    amenities: [
      "Riverside Location",
      "Private Cottage",
      "AC",
      "Balcony",
      "Food Included",
      "River Activities",
      "Bonfire",
      "Natural Beauty",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.8,
    category: "cottage",
  },
  {
    image: domeResort,
    title: "Heritage Cottage Hotel – Pawna",
    price: "₹6,299",
    priceNote: "per person with meal",
    amenities: [
      "Heritage Architecture",
      "Fine Dining",
      "Spa Services",
      "Lake View Rooms",
      "Conference Room",
      "Bonfire",
      "Multiple Restaurants",
      "24-Hour Service",
    ],
    isTopSelling: false,
    location: "Pawna Lake",
    rating: 4.9,
    category: "cottage",
  },
  // Top Villas (Lonavala) - 6 properties
  {
    image: domeResort,
    title: "Dome Story Resort – Malvandi Lake, Lonavala",
    price: "₹7,499",
    priceNote: "per person with meal",
    amenities: [
      "Private Washroom",
      "AC",
      "Mini Fridge",
      "Electric Kettle",
      "BBQ",
      "Food Included",
      "Free Boating",
      "Bonfire",
      "Lake Access",
    ],
    isTopSelling: true,
    location: "Lonavala",
    rating: 4.9,
    category: "villa",
  },
  {
    image: coupleRetreat,
    title: "Luxury Villa Estate – Lonavala",
    price: "₹12,999",
    priceNote: "per person with meal",
    amenities: [
      "Private Villa",
      "Mountain View",
      "Infinity Pool",
      "Private Chef",
      "Wine Cellar",
      "Spa",
      "Garden Terrace",
      "24-Hour Butler",
    ],
    isTopSelling: true,
    location: "Lonavala",
    rating: 4.9,
    category: "villa",
  },
  {
    image: colorfulCabins,
    title: "Mountain Retreat Villa – Lonavala",
    price: "₹9,999",
    priceNote: "per person with meal",
    amenities: [
      "Private Villa",
      "Valley View",
      "Private Pool",
      "Grill Kitchen",
      "Living Room",
      "Terrace Seating",
      "Nature Access",
      "Peaceful Location",
    ],
    isTopSelling: false,
    location: "Lonavala",
    rating: 4.8,
    category: "villa",
  },
  {
    image: lakestoryResort,
    title: "Heritage Villa – Lonavala",
    price: "₹10,499",
    priceNote: "per person with meal",
    amenities: [
      "Historic Villa",
      "Antique Furnishings",
      "Private Grounds",
      "Library",
      "Music Room",
      "Fine Dining",
      "Garden",
      "Heritage Charm",
    ],
    isTopSelling: false,
    location: "Lonavala",
    rating: 4.7,
    category: "villa",
  },
  {
    image: riversideGlamping,
    title: "Waterfront Villa Paradise – Lonavala",
    price: "₹11,499",
    priceNote: "per person with meal",
    amenities: [
      "Waterfront Location",
      "Private Beach Access",
      "Infinity Pool",
      "Yacht Access",
      "Fine Dining",
      "Spa Suite",
      "Entertainment Hall",
      "Concierge Service",
    ],
    isTopSelling: true,
    location: "Lonavala",
    rating: 4.9,
    category: "villa",
  },
  {
    image: domeResort,
    title: "Eco-Luxury Villa – Lonavala",
    price: "₹8,999",
    priceNote: "per person with meal",
    amenities: [
      "Sustainable Villa",
      "Solar Powered",
      "Organic Gardens",
      "Natural Pool",
      "Wellness Center",
      "Yoga Deck",
      "Forest View",
      "Eco-Friendly Materials",
    ],
    isTopSelling: false,
    location: "Lonavala",
    rating: 4.8,
    category: "villa",
  },
];

const categories = [
  { id: "camping", label: "Top Campings", location: "Pawna" },
  { id: "cottage", label: "Top Cottages", location: "Pawna" },
  { id: "villa", label: "Top Villas", location: "Lonavala" },
];

const Properties = () => {
  const [activeTab, setActiveTab] = useState("camping");
  const sectionRefs = {
    camping: useRef<HTMLDivElement>(null),
    cottage: useRef<HTMLDivElement>(null),
    villa: useRef<HTMLDivElement>(null),
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const ref = sectionRefs[tabId as keyof typeof sectionRefs];
    if (ref?.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section id="properties" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Curated Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Premium Stays
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked luxury cottages and resorts in Pawna Lake & Lonavala,
            designed for unforgettable experiences.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-border" />
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 z-50 flex justify-center mb-16 bg-secondary/30 py-6 md:py-8 -mx-6 px-6 backdrop-blur-sm shadow-sm">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-3" data-testid="tabs-property-categories">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  data-testid={`button-tab-${category.id}`}
                  className="text-sm md:text-base"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Properties Sections */}
        {categories.map((category) => {
          const categoryProperties = properties.filter((p) => p.category === category.id);
          return (
            <div
              key={category.id}
              ref={sectionRefs[category.id as keyof typeof sectionRefs]}
              className="mb-24 md:mb-32 scroll-mt-20"
            >
              <div className="mb-12">
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-2">
                  {category.label}
                </h3>
                <p className="text-muted-foreground text-base">
                  Best experiences in {category.location}
                </p>
              </div>

              {/* Properties Grid */}
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                data-testid={`grid-properties-${category.id}`}
              >
                {categoryProperties.map((property, index) => (
                  <div
                    key={property.title}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`card-property-${property.title.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <PropertyCard {...property} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-dark font-medium transition-colors duration-300"
            data-testid="link-contact-recommendations"
          >
            Contact us for custom recommendations
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
