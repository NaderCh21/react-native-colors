
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, Clock, User, Car, Filter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RideSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    gender: "all",
    priceRange: "all",
    seatsAvailable: "all",
  });

  // Mock ride data
  const rides = [
    {
      id: 1,
      driver: {
        name: "Ahmad K.",
        rating: 4.8,
        gender: "male",
        profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=AK",
      },
      from: "Hamra",
      to: "LAU Beirut",
      date: "2023-06-15",
      time: "08:00",
      price: 15000,
      seatsAvailable: 3,
      car: "Honda Civic, White",
    },
    {
      id: 2,
      driver: {
        name: "Layla M.",
        rating: 4.9,
        gender: "female",
        profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=LM",
      },
      from: "Achrafieh",
      to: "LAU Beirut",
      date: "2023-06-15",
      time: "08:30",
      price: 20000,
      seatsAvailable: 2,
      car: "Toyota Corolla, Silver",
    },
    {
      id: 3,
      driver: {
        name: "Omar S.",
        rating: 4.7,
        gender: "male",
        profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=OS",
      },
      from: "Jounieh",
      to: "LAU Byblos",
      date: "2023-06-15",
      time: "07:45",
      price: 25000,
      seatsAvailable: 4,
      car: "Kia Sportage, Black",
    },
    {
      id: 4,
      driver: {
        name: "Nour H.",
        rating: 4.6,
        gender: "female",
        profilePic: "https://placehold.co/100x100/00594F/FFFFFF/png?text=NH",
      },
      from: "Batroun",
      to: "LAU Byblos",
      date: "2023-06-15",
      time: "08:15",
      price: 30000,
      seatsAvailable: 1,
      car: "Nissan Qashqai, Blue",
    },
  ];

  // Apply filters and search
  const filteredRides = rides.filter(ride => {
    // Apply basic search
    const fromMatch = !from || ride.from.toLowerCase().includes(from.toLowerCase());
    const toMatch = !to || ride.to.toLowerCase().includes(to.toLowerCase());
    const dateMatch = !date || ride.date === date;
    
    // Apply additional filters
    const genderMatch = filters.gender === "all" || ride.driver.gender === filters.gender;
    
    let priceMatch = true;
    if (filters.priceRange === "low") {
      priceMatch = ride.price < 20000;
    } else if (filters.priceRange === "medium") {
      priceMatch = ride.price >= 20000 && ride.price < 30000;
    } else if (filters.priceRange === "high") {
      priceMatch = ride.price >= 30000;
    }
    
    let seatsMatch = true;
    if (filters.seatsAvailable !== "all") {
      seatsMatch = ride.seatsAvailable >= parseInt(filters.seatsAvailable);
    }
    
    return fromMatch && toMatch && dateMatch && genderMatch && priceMatch && seatsMatch;
  });

  const handleFilterChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Find a Ride</h1>
      
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="from" className="mb-2 block">From</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Starting point"
                className="pl-10"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="to" className="mb-2 block">To</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination"
                className="pl-10"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="date" className="mb-2 block">Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-end gap-2">
            <Button className="bg-[#00594F] hover:bg-[#004940] flex-1">
              <Search className="mr-2" size={18} />
              Search
            </Button>
            
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Filter Options</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender-filter">Driver Gender</Label>
                    <Select
                      value={filters.gender}
                      onValueChange={(value) => handleFilterChange("gender", value)}
                    >
                      <SelectTrigger id="gender-filter">
                        <SelectValue placeholder="Select gender preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="female">Female Only</SelectItem>
                        <SelectItem value="male">Male Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price-filter">Price Range</Label>
                    <Select
                      value={filters.priceRange}
                      onValueChange={(value) => handleFilterChange("priceRange", value)}
                    >
                      <SelectTrigger id="price-filter">
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="low">Low (Below 20,000 LL)</SelectItem>
                        <SelectItem value="medium">Medium (20,000 - 30,000 LL)</SelectItem>
                        <SelectItem value="high">High (Above 30,000 LL)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="seats-filter">Minimum Seats</Label>
                    <Select
                      value={filters.seatsAvailable}
                      onValueChange={(value) => handleFilterChange("seatsAvailable", value)}
                    >
                      <SelectTrigger id="seats-filter">
                        <SelectValue placeholder="Select minimum seats" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="1">At least 1</SelectItem>
                        <SelectItem value="2">At least 2</SelectItem>
                        <SelectItem value="3">At least 3</SelectItem>
                        <SelectItem value="4">At least 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full mt-4 bg-[#00594F] hover:bg-[#004940]" onClick={() => setIsFilterOpen(false)}>
                    Apply Filters
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Available Rides</h2>
          <p className="text-gray-500">{filteredRides.length} rides found</p>
        </div>
        
        {filteredRides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRides.map(ride => (
              <Card key={ride.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={ride.driver.profilePic} 
                        alt={ride.driver.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{ride.driver.name}</h3>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm ml-1">{ride.driver.rating}</span>
                          <span className="text-xs text-gray-500 ml-2">
                            • {ride.driver.gender === "female" ? "Female" : "Male"} driver
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex flex-col items-center mr-3">
                          <div className="w-2 h-2 rounded-full bg-[#00594F]"></div>
                          <div className="w-0.5 h-10 bg-gray-300"></div>
                          <div className="w-2 h-2 rounded-full bg-[#00594F]"></div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-500">From</p>
                            <p className="font-medium">{ride.from}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">To</p>
                            <p className="font-medium">{ride.to}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{new Date(ride.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{ride.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{ride.seatsAvailable} seats available</span>
                        </div>
                        <div className="flex items-center">
                          <Car className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{ride.car}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 p-4 border-t">
                    <div>
                      <span className="font-semibold text-lg">{ride.price.toLocaleString()} LL</span>
                      <span className="text-gray-500 text-sm"> / seat</span>
                    </div>
                    <Button asChild className="bg-[#00594F] hover:bg-[#004940]">
                      <Link to={`/ride/${ride.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium mb-2">No rides found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
            <Button asChild className="bg-[#00594F] hover:bg-[#004940]">
              <Link to="/offer-ride">Offer a Ride</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideSearch;
