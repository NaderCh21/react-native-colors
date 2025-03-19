
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, MapPin, Car, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth context in a real app

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // For demo purposes - in a real app this would be handled by auth context
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const logo = "/lovable-uploads/864b2496-762b-4427-bc71-eac5428d837f.png";

  return (
    <nav className="bg-[#00594F] text-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LAU Carpooling" className="h-12" />
            <span className="ml-2 font-bold text-xl hidden sm:block">LAU RideShare</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/search" className="hover:text-gray-200">Find Rides</Link>
            <Link to="/offer-ride" className="hover:text-gray-200">Offer Ride</Link>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-[#004940]">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-rides" className="flex items-center">
                      <Car className="mr-2 h-4 w-4" />
                      <span>My Rides</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#00594F]">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-white text-[#00594F] hover:bg-gray-200">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link to="/" className="block py-2 hover:bg-[#004940] px-2 rounded" onClick={toggleMenu}>Home</Link>
            <Link to="/search" className="block py-2 hover:bg-[#004940] px-2 rounded" onClick={toggleMenu}>Find Rides</Link>
            <Link to="/offer-ride" className="block py-2 hover:bg-[#004940] px-2 rounded" onClick={toggleMenu}>Offer Ride</Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="block py-2 hover:bg-[#004940] px-2 rounded" onClick={toggleMenu}>
                  Profile
                </Link>
                <Link to="/my-rides" className="block py-2 hover:bg-[#004940] px-2 rounded" onClick={toggleMenu}>
                  My Rides
                </Link>
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#004940]" onClick={() => { handleLogout(); toggleMenu(); }}>
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex space-x-2 mt-4">
                <Button asChild variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-[#00594F]">
                  <Link to="/login" onClick={toggleMenu}>Login</Link>
                </Button>
                <Button asChild className="flex-1 bg-white text-[#00594F] hover:bg-gray-200">
                  <Link to="/register" onClick={toggleMenu}>Register</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
