import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { Share2, Star, MapPin } from "lucide-react";

interface PropertyCardProps {
  id?: string;
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
  id = "1",
  image,
  title,
  price,
  priceNote,
  amenities,
  isTopSelling = false,
  location = "Pawna Lake",
  rating = 4.9,
}: PropertyCardProps) => {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = `Check out this property on LoonCamp: ${title} - ${window.location.origin}/property/${id}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="group h-full">
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-700 hover:-translate-y-2 cursor-pointer h-full relative">
        <Link to={`/property/${id}`} className="block h-full">
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
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300" data-testid={`text-property-${title.replace(/\s+/g, "-").toLowerCase()}`}>
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
                <span className="text-3xl md:text-4xl font-display font-bold text-primary" data-testid={`text-price-${title.replace(/\s+/g, "-").toLowerCase()}`}>
                  {price}
                </span>
                <p className="text-muted-foreground text-sm mt-1">{priceNote}</p>
              </div>

              <Button className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full px-6 transition-all duration-300" data-testid={`button-view-details-${title.replace(/\s+/g, "-").toLowerCase()}`}>
                Details
              </Button>
            </div>
          </div>
        </Link>
        
        {/* Share Button - Positioned absolutely to be clickable independently */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          onClick={handleShare}
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
