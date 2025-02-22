import { Card } from "./ui/card";

const diningOptions = [
  {
    title: "Fine Dining Restaurant",
    description: "Exquisite culinary experiences with a modern twist",
    image: "/placeholder.svg",
    details: "Open for dinner, reservations recommended",
  },
  {
    title: "Casual Bistro",
    description: "Relaxed atmosphere with a diverse menu",
    image: "/placeholder.svg",
    details: "Open for lunch and dinner, walk-ins welcome",
  },
  {
    title: "Rooftop Bar",
    description: "Stunning views and handcrafted cocktails",
    image: "/placeholder.svg",
    details: "Open from evening till late, dress code smart casual",
  },
  {
    title: "In-Room Dining",
    description: "Enjoy gourmet meals in the comfort of your room",
    image: "/placeholder.svg",
    details: "Available 24/7, extensive menu options",
  },
];

const DiningSection = () => {
  return (
    <section id="dining" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Dining Options</h2>
          <p className="text-muted-foreground font-sans">
            Explore our exquisite dining experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diningOptions.map((option, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {option.description}
                </p>
                <p className="text-sm text-gray-600">
                  {option.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
