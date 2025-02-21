
import { Building } from "lucide-react"

const AboutUsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">About Us</h2>
          <div className="flex justify-center mb-6">
            <Building className="text-gold h-8 w-8" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Welcome to our luxury hotel, where timeless elegance meets modern comfort. Established in 1995, we have been providing exceptional hospitality experiences to guests from around the world.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence is reflected in every detail, from our meticulously designed rooms to our world-class dining experiences and attentive service.
            </p>
            <p className="text-lg text-muted-foreground">
              Located in the heart of the city, our hotel serves as the perfect base for both business and leisure travelers, offering easy access to major attractions while providing a peaceful sanctuary.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Hotel exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
