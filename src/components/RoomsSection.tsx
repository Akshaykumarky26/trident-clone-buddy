import { Card } from "./ui/card";

const rooms = [
  {
    name: "Standard Room",
    description: "Comfortable and well-equipped rooms for a relaxing stay",
    image: "/placeholder.svg",
    price: "$150",
    details: "Spacious room with a king-sized bed and city view",
  },
  {
    name: "Deluxe Room",
    description: "Experience luxury with enhanced amenities and services",
    image: "/placeholder.svg",
    price: "$250",
    details: "Luxurious room with a jacuzzi and ocean view",
  },
  {
    name: "Suite",
    description: "Indulge in our premium suites with exclusive benefits",
    image: "/placeholder.svg",
    price: "$400",
    details: "Extravagant suite with a private balcony and personalized service",
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Rooms</h2>
          <p className="text-muted-foreground font-sans">
            Experience unparalleled comfort in our elegantly designed rooms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {room.description}
                </p>
                <p className="text-sm text-gray-600">
                  {room.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
