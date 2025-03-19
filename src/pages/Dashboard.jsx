
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Award, 
  Bell, 
  AlertTriangle, 
  CheckCircle, 
  AlertCircle, 
  User,
  Star,
  ArrowRight 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "Sara Khalil",
    role: "Student",
    campus: "LAU Beirut",
    isDriver: true,
    residenceLocation: "Hamra",
    profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=SK",
    completedTrips: 12,
    rating: 4.9,
  };
  
  // Mock upcoming rides data
  const upcomingRides = [
    {
      id: 1,
      type: "passenger",
      from: "Hamra",
      to: "LAU Beirut",
      date: "2023-06-15",
      time: "08:00",
      driver: {
        name: "Ahmad K.",
        rating: 4.8,
        profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=AK",
      },
      status: "confirmed"
    },
    {
      id: 2,
      type: "driver",
      from: "Hamra",
      to: "LAU Beirut",
      date: "2023-06-16",
      time: "08:00",
      passengers: 2,
      seatsTotal: 4,
      status: "confirmed"
    },
    {
      id: 3,
      type: "passenger",
      from: "Hamra",
      to: "LAU Beirut",
      date: "2023-06-17",
      time: "08:00",
      driver: {
        name: "Layla M.",
        rating: 4.9,
        profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=LM",
      },
      status: "pending"
    }
  ];
  
  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: "request",
      message: "New ride request from Omar S.",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "approved",
      message: "Your ride request was approved by Layla M.",
      time: "Yesterday",
      read: false
    },
    {
      id: 3,
      type: "reminder",
      message: "Reminder: You have a ride scheduled tomorrow at 8:00 AM",
      time: "Yesterday",
      read: true
    }
  ];
  
  // Stats data
  const stats = [
    {
      id: 1,
      title: "Total Rides",
      value: "15",
      icon: <Car className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      link: "/my-rides"
    },
    {
      id: 2,
      title: "Carbon Saved",
      value: "24 kg",
      icon: <Award className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      link: "/impact"
    },
    {
      id: 3,
      title: "Money Saved",
      value: "120,000 LL",
      icon: <Users className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      link: "/savings"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img 
              src={user.profilePic} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-gray-600">{user.campus} • {user.role}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button asChild className="bg-[#00594F] hover:bg-[#004940]">
            <Link to="/search">Find a Ride</Link>
          </Button>
          {user.isDriver && (
            <Button asChild variant="outline">
              <Link to="/offer-ride">Offer a Ride</Link>
            </Button>
          )}
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-full`}>
                  {stat.icon}
                </div>
              </div>
              <Link 
                to={stat.link} 
                className="text-[#00594F] hover:underline text-sm flex items-center mt-4"
              >
                View Details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Upcoming Rides Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Rides</h2>
          <Link to="/my-rides" className="text-[#00594F] hover:underline text-sm">
            View All Rides
          </Link>
        </div>
        
        {upcomingRides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingRides.map((ride) => (
              <Card key={ride.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={ride.type === "driver" ? "outline" : "secondary"} className="mb-2 uppercase text-xs">
                      {ride.type === "driver" ? "You're Driving" : "You're a Passenger"}
                    </Badge>
                    <Badge variant={ride.status === "confirmed" ? "default" : "outline"} className={`${ride.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {ride.status === "confirmed" ? (
                        <><CheckCircle className="h-3 w-3 mr-1" /> Confirmed</>
                      ) : (
                        <><AlertCircle className="h-3 w-3 mr-1" /> Pending</>
                      )}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <div className="flex flex-col items-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-[#00594F]"></div>
                        <div className="w-0.5 h-10 bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-[#00594F]"></div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-500">From</p>
                          <p className="font-medium">{ride.from}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">To</p>
                          <p className="font-medium">{ride.to}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{new Date(ride.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{ride.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  {ride.type === "passenger" && ride.driver ? (
                    <div className="flex items-center mt-2 pt-3 border-t">
                      <img 
                        src={ride.driver.profilePic} 
                        alt={ride.driver.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="font-medium text-sm">{ride.driver.name}</p>
                        <div className="flex items-center text-xs">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1">{ride.driver.rating}</span>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="ml-auto">
                        <Link to={`/ride/${ride.id}`}>
                          Details
                        </Link>
                      </Button>
                    </div>
                  ) : ride.type === "driver" ? (
                    <div className="flex items-center mt-2 pt-3 border-t">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm">{ride.passengers} of {ride.seatsTotal} passengers</span>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="ml-auto">
                        <Link to={`/ride/${ride.id}`}>
                          Details
                        </Link>
                      </Button>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="font-medium mb-2">No upcoming rides</h3>
              <p className="text-gray-500 text-sm mb-4">You don't have any rides scheduled at the moment.</p>
              <Button asChild className="bg-[#00594F] hover:bg-[#004940]">
                <Link to="/search">Find a Ride</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      
      {/* Notifications Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Notifications</h2>
          <Link to="/notifications" className="text-[#00594F] hover:underline text-sm">
            View All
          </Link>
        </div>
        
        <Card>
          <CardContent className="p-0">
            {notifications.length > 0 ? (
              <div className="divide-y">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 flex items-start ${notification.read ? "" : "bg-blue-50"}`}
                  >
                    <div className={`rounded-full p-2 mr-3 ${
                      notification.type === "request" 
                        ? "bg-blue-100 text-blue-600" 
                        : notification.type === "approved" 
                          ? "bg-green-100 text-green-600" 
                          : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {notification.type === "request" ? (
                        <Bell className="h-5 w-5" />
                      ) : notification.type === "approved" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`${notification.read ? "text-gray-600" : "font-medium"}`}>
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-medium mb-2">No new notifications</h3>
                <p className="text-gray-500 text-sm">You're all caught up!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
