import PropertyCard from "./PropertyCard";
import domeResort from "@/assets/dome-resort.jpg";
import lakestoryResort from "@/assets/lakestory-resort.jpg";
import riversideGlamping from "@/assets/riverside-glamping.jpg";
import colorfulCabins from "@/assets/colorful-cabins.jpg";
import coupleRetreat from "@/assets/couple-retreat.jpg";
import cozynestResort from "@/assets/cozynest-resort.jpg";

const properties = [
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
  },
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
  },
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
  },
];

const Properties = () => {
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

        {/* Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {properties.map((property, index) => (
            <div
              key={property.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-dark font-medium transition-colors duration-300"
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
