
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: "deluxe",
    title: "Deluxe Room",
    description: "Elegant 40 sq mt room with city views and modern amenities",
    image: "/placeholder.svg",
    amenities: ["King Bed", "City View", "Free WiFi", "Mini Bar"],
    price: "₹8,500* per night",
  },
  {
    id: "premier",
    title: "Premier Room",
    description: "Spacious 45 sq mt room with pool view and exclusive benefits",
    image: "/placeholder.svg",
    amenities: ["King/Twin Beds", "Pool View", "Club Access", "Butler Service"],
    price: "₹12,500* per night",
  },
  {
    id: "trident",
    title: "Trident Suite",
    description: "Luxurious 75 sq mt suite with separate living area",
    image: "/placeholder.svg",
    amenities: ["Separate Living Room", "Panoramic View", "24/7 Butler", "Lounge Access"],
    price: "₹25,000* per night",
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Luxury Accommodations</h2>
          <p className="text-muted-foreground font-sans">
            Choose from our selection of elegantly appointed rooms and suites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Link to={`/rooms/${room.id}`} key={index}>
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">{room.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {room.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {amenity}
                      </li>
                    ))}
                  </ul>
                  <p className="font-serif text-lg mb-4">{room.price}</p>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                    View Details
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;

