
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const offers = [
  {
    title: "Members Special Rate",
    description: "Exclusive 10% off on your stay as a Trident Privilege member",
    image: "/placeholder.svg",
    price: "Starting from ₹8,500*",
  },
  {
    title: "Weekend Getaway",
    description: "Special weekend rates including breakfast and dinner",
    image: "/placeholder.svg",
    price: "Starting from ₹10,500*",
  },
  {
    title: "Advance Purchase",
    description: "Save up to 15% when you book 14 days in advance",
    image: "/placeholder.svg",
    price: "Starting from ₹7,500*",
  },
];

const OffersSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Special Offers</h2>
          <p className="text-muted-foreground font-sans">
            Discover our exclusive packages and special rates
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {offers.map((offer, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {offer.description}
                    </p>
                    <p className="font-serif text-lg mb-4">{offer.price}</p>
                    <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                      View Details
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default OffersSection;
