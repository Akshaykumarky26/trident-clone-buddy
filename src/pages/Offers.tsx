
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const offers = [
  {
    title: "Members Special Rate",
    description: "Exclusive 10% off on your stay as a Trident Privilege member. Join our membership program and enjoy special benefits including early check-in, late check-out, and complimentary room upgrades when available.",
    image: "/placeholder.svg",
    price: "Starting from ₹8,500*",
    terms: "Valid for stays between April 1st - September 30th, 2024",
  },
  {
    title: "Weekend Getaway",
    description: "Make your weekends special with our weekend package including breakfast and dinner. Enjoy a luxurious stay with gourmet dining experiences at our specialty restaurants.",
    image: "/placeholder.svg",
    price: "Starting from ₹10,500*",
    terms: "Valid for Friday, Saturday and Sunday stays",
  },
  {
    title: "Advance Purchase",
    description: "Plan ahead and save up to 15% when you book 14 days in advance. Package includes complimentary breakfast and airport transfers.",
    image: "/placeholder.svg",
    price: "Starting from ₹7,500*",
    terms: "Must be booked at least 14 days in advance",
  },
];

const OffersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Button 
          onClick={() => navigate(-1)}
          className="mb-8"
          variant="outline"
        >
          Back to Home
        </Button>
        
        <h1 className="text-4xl font-serif mb-4">Special Offers</h1>
        <p className="text-muted-foreground mb-12">
          Discover our exclusive packages and special rates for an unforgettable stay
        </p>

        <div className="grid gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="p-6 grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-serif mb-4">{offer.title}</h2>
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  <p className="font-serif text-xl mb-2">{offer.price}</p>
                  <p className="text-sm text-muted-foreground">{offer.terms}</p>
                </div>
                <Button className="mt-4 bg-gold hover:bg-gold/90 text-white">
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

export default OffersPage;
