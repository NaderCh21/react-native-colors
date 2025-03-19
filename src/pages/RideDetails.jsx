
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Car, 
  Star, 
  MessageCircle, 
  Phone, 
  Mail, 
  Shield, 
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const RideDetails = () => {
  const { id } = useParams();
  const [isRequesting, setIsRequesting] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  
  // Mock ride data - in a real app, fetch this based on the ID
  const ride = {
    id: parseInt(id),
    driver: {
      id: "d123",
      name: "Ahmad K.",
      rating: 4.8,
      gender: "male",
      profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=AK",
      completedRides: 42,
      joinedDate: "January 2023",
      email: "ahmad.k@lau.edu",
      phone: "+961 71 123 456",
      verified: true
    },
    from: "Hamra",
    to: "LAU Beirut",
    date: "2023-06-15",
    time: "08:00",
    price: 15000,
    seatsAvailable: 3,
    seatsTotal: 4,
    car: "Honda Civic, White",
    licensePlate: "B 12345",
    routeDetails: "Via Bliss Street, AUB, then to LAU",
    additionalInfo: "I leave promptly at 8 AM. Please be ready at least 5 minutes before. No smoking in the car."
  };

  const handleBookRequest = () => {
    setIsRequesting(true);
    setIsBookingDialogOpen(false);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Booking request sent successfully! You'll receive a notification when the driver responds.");
      setIsRequesting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/search" className="text-[#00594F] hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to search results
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Ride Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Route Information */}
                <div className="border-b pb-4">
                  <div className="flex items-start mb-4">
                    <div className="flex flex-col items-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#00594F]"></div>
                      <div className="w-0.5 h-12 bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-[#00594F]"></div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="text-gray-500">Pickup Location</p>
                        <p className="font-medium text-lg">{ride.from}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Drop-off Location</p>
                        <p className="font-medium text-lg">{ride.to}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl">{ride.price.toLocaleString()} LL</p>
                      <p className="text-gray-500">per seat</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <p className="text-gray-500 text-sm">Date</p>
                        <p className="font-medium">{new Date(ride.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <p className="text-gray-500 text-sm">Time</p>
                        <p className="font-medium">{ride.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Details */}
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-3">Additional Details</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <p className="text-gray-500 text-sm">Available Seats</p>
                        <p className="font-medium">{ride.seatsAvailable} of {ride.seatsTotal}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Car className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <p className="text-gray-500 text-sm">Vehicle</p>
                        <p className="font-medium">{ride.car}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">License Plate</p>
                    <p className="font-medium">{ride.licensePlate}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">Route Details</p>
                    <p className="font-medium">{ride.routeDetails}</p>
                  </div>
                  
                  {ride.additionalInfo && (
                    <div>
                      <p className="text-gray-500 text-sm">Additional Information</p>
                      <p className="font-medium">{ride.additionalInfo}</p>
                    </div>
                  )}
                </div>
                
                {/* Safety Features */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Safety Features</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-green-50 rounded-md">
                      <Shield className="h-5 w-5 mr-2 text-green-600" />
                      <p>University ID Verification</p>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-md">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      <p>QR Verification Before Ride</p>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-md">
                      <AlertCircle className="h-5 w-5 mr-2 text-green-600" />
                      <p>SOS Button During Ride</p>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-md">
                      <Star className="h-5 w-5 mr-2 text-green-600" />
                      <p>Rated by {ride.driver.completedRides} riders</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Driver Profile */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <img src={ride.driver.profilePic} alt={ride.driver.name} />
                </Avatar>
                <h3 className="font-semibold text-xl">{ride.driver.name}</h3>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{ride.driver.rating}</span>
                  <span className="text-gray-500 ml-1">({ride.driver.completedRides} rides)</span>
                </div>
                {ride.driver.verified && (
                  <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
                    <Shield className="h-3 w-3 mr-1" /> Verified Driver
                  </Badge>
                )}
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Member Since</p>
                  <p>{ride.driver.joinedDate}</p>
                </div>
                
                <div>
                  <p className="text-gray-500 text-sm">Gender</p>
                  <p className="capitalize">{ride.driver.gender}</p>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <Button className="w-full bg-[#00594F] hover:bg-[#004940]">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact Driver
                </Button>
                
                <AlertDialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button 
                      className="w-full" 
                      variant="outline" 
                      disabled={isRequesting}
                    >
                      {isRequesting ? "Sending Request..." : "Request Booking"}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm your booking request</AlertDialogTitle>
                      <AlertDialogDescription>
                        You are about to request a seat on this ride. The driver will need to approve your request before the booking is confirmed.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleBookRequest} className="bg-[#00594F] hover:bg-[#004940]">
                        Confirm Request
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <a href={`mailto:${ride.driver.email}`} className="text-[#00594F] hover:underline">
                    {ride.driver.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <a href={`tel:${ride.driver.phone}`} className="text-[#00594F] hover:underline">
                    {ride.driver.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            <p>
              See something concerning?{" "}
              <Link to="/report" className="text-[#00594F] hover:underline">Report this ride</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
