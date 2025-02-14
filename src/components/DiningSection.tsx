
import { Card } from "./ui/card";

const restaurants = [
  {
    name: "Saffron",
    cuisine: "Indian Speciality Restaurant",
    description: "Experience the rich flavors of Indian cuisine in an elegant setting",
    image: "/placeholder.svg",
    timing: "12:30 PM - 11:30 PM",
    specialty: "Traditional Indian delicacies with a modern twist",
  },
  {
    name: "The Verandah",
    cuisine: "All-Day Dining",
    description: "International cuisine served in a bright and airy atmosphere",
    image: "/placeholder.svg",
    timing: "24 Hours",
    specialty: "Extensive buffet and à la carte menu",
  },
  {
    name: "Tuscany",
    cuisine: "Italian Restaurant",
    description: "Authentic Italian flavors in a romantic setting",
    image: "/placeholder.svg",
    timing: "7:00 PM - 11:30 PM",
    specialty: "Wood-fired pizzas and handmade pasta",
  },
];

const DiningSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Fine Dining</h2>
          <p className="text-muted-foreground font-sans">
            Embark on a culinary journey through our exceptional restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{restaurant.name}</h3>
                <p className="text-gold font-sans text-sm mb-2">{restaurant.cuisine}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {restaurant.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Hours:</span> {restaurant.timing}</p>
                  <p><span className="font-semibold">Specialty:</span> {restaurant.specialty}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
