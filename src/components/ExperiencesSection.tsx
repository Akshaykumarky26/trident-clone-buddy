
import { Card } from "./ui/card";

const experiences = [
  {
    title: "Wellness Spa",
    description: "Rejuvenate your senses with our signature spa treatments",
    image: "/placeholder.svg",
    details: "Experience traditional and modern therapies in our luxury spa",
  },
  {
    title: "Swimming Pool",
    description: "Take a refreshing dip in our temperature-controlled pool",
    image: "/placeholder.svg",
    details: "Enjoy the serene poolside atmosphere with premium services",
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art equipment and personal training",
    image: "/placeholder.svg",
    details: "24-hour access to modern fitness facilities",
  },
  {
    title: "Business Center",
    description: "Fully equipped business center with meeting rooms",
    image: "/placeholder.svg",
    details: "Professional services for all your business needs",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Hotel Experiences</h2>
          <p className="text-muted-foreground font-sans">
            Discover exceptional experiences during your stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-2">{experience.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {experience.description}
                </p>
                <p className="text-sm text-gray-600">
                  {experience.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
