
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import RideSearch from "./pages/RideSearch";
import ProfilePage from "./pages/ProfilePage";
import RideDetails from "./pages/RideDetails";
import OfferRide from "./pages/OfferRide";
import MyRides from "./pages/MyRides";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<RideSearch />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="ride/:id" element={<RideDetails />} />
            <Route path="offer-ride" element={<OfferRide />} />
            <Route path="my-rides" element={<MyRides />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
