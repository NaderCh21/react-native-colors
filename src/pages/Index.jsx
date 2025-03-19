
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Search, Clock, Shield, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const logo = "/lovable-uploads/864b2496-762b-4427-bc71-eac5428d837f.png";
  
  // Mock testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sara K.",
      role: "Computer Science Student",
      comment: "LAU RideShare has been a game-changer for my commute! I've saved money and made new friends from my department.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmad M.",
      role: "Business Major",
      comment: "As a driver, I love being able to help fellow students while offsetting my fuel costs. The platform is very user-friendly.",
      rating: 4,
    },
    {
      id: 3,
      name: "Layla H.",
      role: "Engineering Student",
      comment: "The safety features give me peace of mind as a female rider. I can choose female-only rides which is great!",
      rating: 5,
    },
  ];

  // Mock statistics
  const stats = [
    { id: 1, value: "1,200+", label: "Active Users" },
    { id: 2, value: "5,000+", label: "Rides Completed" },
    { id: 3, value: "80%", label: "Average Cost Savings" },
    { id: 4, value: "4.8/5", label: "User Satisfaction" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#00594F] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Safe Rides for LAU Students
              </h1>
              <p className="text-xl mb-8">
                Connect with fellow students for convenient and affordable carpooling across Lebanon.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-white text-[#00594F] hover:bg-gray-200">
                  <Link to="/search">Find a Ride</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-[#004940]">
                  <Link to="/offer-ride">Offer a Ride</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://placehold.co/600x400/00594F/FFFFFF/png?text=Carpooling+Illustration" 
                alt="Carpooling Illustration" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes carpooling easy, safe, and reliable for LAU students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#00594F] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Match</h3>
              <p className="text-gray-600">
                Find or offer rides based on your schedule and route preferences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00594F] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Ride</h3>
              <p className="text-gray-600">
                Secure your seat with verified LAU students heading your way.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00594F] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rate & Review</h3>
              <p className="text-gray-600">
                Share your experience and help build a trusted community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose LAU RideShare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed specifically for LAU students with features that prioritize safety, convenience, and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-[#00594F] mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Student Verification</h3>
                <p className="text-gray-600">
                  All users verify their identity with university ID cards, ensuring a safe community.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-[#00594F] mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule Matching</h3>
                <p className="text-gray-600">
                  Find rides that perfectly align with your class schedule and commitments.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-[#00594F] mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Route Optimization</h3>
                <p className="text-gray-600">
                  Connect with drivers and passengers traveling along similar routes to save time.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-[#00594F] mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Rating System</h3>
                <p className="text-gray-600">
                  Review your experience after each ride to help maintain service quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-[#00594F] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who have transformed their commutes with LAU RideShare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the LAU RideShare Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start sharing rides with fellow students today. Save money, reduce your carbon footprint, and make new connections.
          </p>
          <Button asChild size="lg" className="bg-[#00594F] hover:bg-[#004940]">
            <Link to="/register">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
