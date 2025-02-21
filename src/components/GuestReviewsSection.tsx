
import { Star } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Exceptional service and beautiful rooms. The staff went above and beyond to make our stay memorable.",
    date: "March 2024"
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "The perfect luxury experience. The attention to detail in every aspect of the hotel is remarkable.",
    date: "February 2024"
  },
  {
    name: "Emma Wilson",
    rating: 4,
    comment: "Wonderful location and amazing dining options. A truly luxurious experience.",
    date: "January 2024"
  }
]

const GuestReviewsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Guest Reviews</h2>
          <p className="text-muted-foreground">What our guests say about their stay</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.comment}</p>
                <div className="border-t pt-4">
                  <p className="font-serif text-lg">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            View more reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default GuestReviewsSection
