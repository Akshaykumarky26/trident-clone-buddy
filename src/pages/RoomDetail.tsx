
import { useParams } from "react-router-dom"
import { ImageSlideshow } from "@/components/ui/image-slideshow"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const rooms = [
  {
    id: "deluxe",
    title: "Deluxe Room",
    description: "Elegant 40 sq mt room with city views and modern amenities",
    longDescription: `Experience luxury in our Deluxe Room, featuring:
    • Stunning city views from floor-to-ceiling windows
    • King-size bed with premium linens
    • Marble bathroom with rain shower
    • 55-inch Smart TV
    • Complimentary high-speed WiFi
    • Mini bar and coffee maker
    • In-room safe
    • 24-hour room service`,
    amenities: ["King Bed", "City View", "Free WiFi", "Mini Bar"],
    price: "₹8,500* per night",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    ]
  },
  {
    id: "premier",
    title: "Premier Room",
    description: "Spacious 45 sq mt room with pool view and exclusive benefits",
    longDescription: `Upgrade your stay with our Premier Room:
    • Serene pool views
    • King or twin beds configuration
    • Luxury bathroom with bathtub and shower
    • 65-inch Smart TV
    • Premium WiFi access
    • Club lounge access
    • Complimentary breakfast
    • Butler service
    • Evening cocktails and canapés`,
    amenities: ["King/Twin Beds", "Pool View", "Club Access", "Butler Service"],
    price: "₹12,500* per night",
    images: [
      "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  }
]

const RoomDetail = () => {
  const { id } = useParams()
  const room = rooms.find(r => r.id === id)

  if (!room) {
    return <div>Room not found</div>
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <ImageSlideshow
              images={room.images}
              title={room.title}
              className="w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-serif">{room.title}</h1>
            <p className="text-2xl font-serif text-gold">{room.price}</p>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{room.longDescription}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RoomDetail

