
import { useParams } from "react-router-dom";
import { ImageSlideshow } from "@/components/ui/image-slideshow";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rooms = {
  "deluxe-room": {
    title: "Deluxe Room",
    description: "Elegant 40 sq mt room with city views and modern amenities",
    longDescription: `Experience luxury in our Deluxe Room, where modern comfort meets elegant design. Featuring floor-to-ceiling windows that showcase stunning city views, this 40-square-meter sanctuary offers the perfect retreat for both business and leisure travelers.

Our Deluxe Room comes equipped with a plush king-sized bed dressed in premium linens, ensuring a restful night's sleep. The sophisticated marble bathroom includes a rain shower and premium toiletries for your comfort.`,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    amenities: [
      "King Bed",
      "City View",
      "Free WiFi",
      "Mini Bar",
      "40-inch Smart TV",
      "In-room Safe",
      "Rain Shower",
      "Work Desk",
      "24/7 Room Service",
      "Climate Control"
    ],
    price: "₹8,500* per night",
    specifications: {
      size: "40 sq mt",
      bedType: "King Size",
      occupancy: "2 Adults + 1 Child",
      view: "City View",
      bathroom: "Marble bathroom with rain shower"
    }
  },
  "premier-room": {
    title: "Premier Room",
    description: "Spacious 45 sq mt room with pool view and exclusive benefits",
    longDescription: `Indulge in the refined luxury of our Premier Room, where exceptional comfort meets exclusive privileges. This spacious 45-square-meter haven offers breathtaking pool views and access to our exclusive Club Lounge.

The Premier Room features an elegant design with contemporary furnishings and a serene color palette. The room's large windows fill the space with natural light while providing spectacular views of our swimming pool and landscaped gardens.`,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    amenities: [
      "King/Twin Beds",
      "Pool View",
      "Club Access",
      "Butler Service",
      "55-inch Smart TV",
      "Premium Mini Bar",
      "Espresso Machine",
      "Luxury Bathroom",
      "Evening Turndown",
      "Club Lounge Access"
    ],
    price: "₹12,500* per night",
    specifications: {
      size: "45 sq mt",
      bedType: "King or Twin Beds",
      occupancy: "2 Adults + 1 Child",
      view: "Pool View",
      bathroom: "Luxury bathroom with bathtub and shower"
    }
  },
  "trident-suite": {
    title: "Trident Suite",
    description: "Luxurious 75 sq mt suite with separate living area",
    longDescription: `Welcome to the epitome of luxury in our Trident Suite, where unparalleled elegance meets exceptional service. This expansive 75-square-meter suite offers a sophisticated residential-style layout with separate living and sleeping areas.

The Trident Suite provides an exclusive experience with panoramic city views through floor-to-ceiling windows. The suite's refined décor combines contemporary design with traditional touches, creating an atmosphere of timeless luxury.`,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    amenities: [
      "Separate Living Room",
      "Panoramic View",
      "24/7 Butler",
      "Lounge Access",
      "65-inch Smart TV",
      "Dining Area",
      "Walk-in Closet",
      "Luxury Toiletries",
      "Private Check-in",
      "Airport Transfer"
    ],
    price: "₹25,000* per night",
    specifications: {
      size: "75 sq mt",
      bedType: "King Size",
      occupancy: "2 Adults + 2 Children",
      view: "Panoramic City View",
      bathroom: "Luxury marble bathroom with jacuzzi"
    }
  }
};

const RoomDetail = () => {
  const { roomId } = useParams();
  const room = rooms[roomId as keyof typeof rooms];

  if (!room) {
    return <div className="p-8">Room not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar with black text */}
      <div className="text-black">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif mb-8">{room.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Details */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">{room.longDescription}</p>
              
              <div>
                <h2 className="text-2xl font-serif mb-4">Room Specifications</h2>
                <dl className="grid grid-cols-2 gap-4">
                  {Object.entries(room.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-medium capitalize">{key}</dt>
                      <dd className="text-muted-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4">Amenities</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2">
                      <span className="text-muted-foreground">• {amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-2xl font-serif mb-4">{room.price}</p>
                <Button size="lg" className="w-full bg-gold hover:bg-gold-dark">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Right side - Image Slideshow */}
            <div className="h-[600px]">
              <ImageSlideshow 
                images={room.images} 
                title={room.title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RoomDetail;

