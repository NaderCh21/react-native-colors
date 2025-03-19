
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="text-center">
        <div className="bg-[#00594F] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Looks like you've taken a wrong turn. The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-[#00594F] hover:bg-[#004940]">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/search">Find a Ride</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
