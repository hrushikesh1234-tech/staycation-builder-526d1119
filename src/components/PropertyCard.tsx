import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  priceNote: string;
  amenities: string[];
  isTopSelling?: boolean;
  location?: string;
  rating?: number;
}

const PropertyCard = ({
  image,
  title,
  price,
  priceNote,
  amenities,
  isTopSelling = false,
  location = "Pawna Lake",
  rating = 4.9,
}: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-700 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top Badge */}
        {isTopSelling && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-medium px-3 py-1.5 shadow-gold">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Top Rated
          </Badge>
        )}

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="text-foreground text-sm font-medium">{rating}</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-cream text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {amenities.slice(0, 4).map((amenity, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground rounded-full"
            >
              {amenity}
            </span>
          ))}
          {amenities.length > 4 && (
            <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
              +{amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-5" />

        {/* Price & CTA */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-3xl md:text-4xl font-display font-bold text-primary">
              {price}
            </span>
            <p className="text-muted-foreground text-sm mt-1">{priceNote}</p>
          </div>

          <Button className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full px-6 transition-all duration-300">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
