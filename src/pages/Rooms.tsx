
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const rooms = [
  {
    title: "Deluxe Room",
    description: "Elegant 40 sq mt room with city views and modern amenities. Experience luxury with our premium bedding, marble bathroom, and state-of-the-art entertainment system.",
    image: "/placeholder.svg",
    amenities: ["King Bed", "City View", "Free WiFi", "Mini Bar", "42-inch LED TV", "Rain Shower", "24/7 Room Service"],
    price: "₹8,500* per night",
  },
  {
    title: "Premier Room",
    description: "Spacious 45 sq mt room with pool view and exclusive benefits. Enjoy club access, personalized butler service, and premium amenities for an elevated stay experience.",
    image: "/placeholder.svg",
    amenities: ["King/Twin Beds", "Pool View", "Club Access", "Butler Service", "Nespresso Machine", "Luxury Toiletries", "Evening Turndown"],
    price: "₹12,500* per night",
  },
  {
    title: "Trident Suite",
    description: "Luxurious 75 sq mt suite with separate living area. Our finest accommodation featuring panoramic views, premium furnishings, and exclusive suite privileges.",
    image: "/placeholder.svg",
    amenities: ["Separate Living Room", "Panoramic View", "24/7 Butler", "Lounge Access", "Jacuzzi Bath", "Private Check-in", "Airport Transfer"],
    price: "₹25,000* per night",
  },
];

const RoomsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Button 
          onClick={() => navigate(-1)}
          className="mb-8"
          variant="outline"
        >
          Back to Home
        </Button>
        
        <h1 className="text-4xl font-serif mb-4">Luxury Accommodations</h1>
        <p className="text-muted-foreground mb-12">
          Experience unparalleled luxury in our meticulously designed rooms and suites
        </p>

        <div className="grid gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="p-6 grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif mb-4">{room.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {room.description}
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Room Amenities:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-serif text-xl mb-4">{room.price}</p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
