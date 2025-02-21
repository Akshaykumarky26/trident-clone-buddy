
import { MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const attractions = [
  {
    name: "City Center",
    distance: "0.5 km",
    description: "Historic downtown area with shopping and dining",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    name: "Cultural Museum",
    distance: "1.2 km",
    description: "World-class exhibits and artifacts",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "Central Park",
    distance: "0.8 km",
    description: "Beautiful green space with walking trails",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  }
]

const NearbyAttractionsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Nearby Attractions</h2>
          <p className="text-muted-foreground">Explore the best of what our location has to offer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm text-muted-foreground">{attraction.distance}</span>
                </div>
                <h3 className="font-serif text-xl mb-2">{attraction.name}</h3>
                <p className="text-muted-foreground">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NearbyAttractionsSection
