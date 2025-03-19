
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Upload } from "lucide-react";
import { toast } from "sonner";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    accountType: "",
    idCard: null,
    campus: "",
    residenceLocation: "",
    phone: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error("File size should be less than 5MB");
        return;
      }
      setFormData(prev => ({ ...prev, idCard: file }));
    }
  };

  const validateStep1 = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all required fields");
      return false;
    }
    
    if (!formData.email.endsWith("@lau.edu") && !formData.email.endsWith("@lau.edu.lb")) {
      toast.error("Please use your LAU email address");
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }
    
    return true;
  };

  const validateStep2 = () => {
    if (!formData.gender || !formData.accountType || !formData.campus || !formData.residenceLocation || !formData.phone) {
      toast.error("Please fill in all required fields");
      return false;
    }
    
    if (!formData.idCard) {
      toast.error("Please upload your LAU ID card");
      return false;
    }
    
    return true;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Registration data:", formData);
      
      // For demo purposes only
      toast.success("Registration successful! Please check your email to verify your account.");
      
      setIsLoading(false);
      // Redirect would happen here in a real app
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Register with your LAU credentials to join the carpooling community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">LAU Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.name@lau.edu"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    type="button"
                    className="w-full bg-[#00594F] hover:bg-[#004940]"
                    onClick={nextStep}
                  >
                    Next
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Account Type</Label>
                    <Select
                      value={formData.accountType}
                      onValueChange={(value) => handleSelectChange("accountType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driver">Driver</SelectItem>
                        <SelectItem value="passenger">Passenger</SelectItem>
                        <SelectItem value="both">Both Driver & Passenger</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => handleSelectChange("gender", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="campus">Campus</Label>
                    <Select
                      value={formData.campus}
                      onValueChange={(value) => handleSelectChange("campus", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select campus" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beirut">Beirut</SelectItem>
                        <SelectItem value="byblos">Byblos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="residenceLocation">Residence Location</Label>
                    <Input
                      id="residenceLocation"
                      name="residenceLocation"
                      placeholder="e.g., Hamra, Achrafieh, Jounieh"
                      value={formData.residenceLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+961 XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="idCard">Upload LAU ID Card</Label>
                    <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6">
                      <label className="flex flex-col items-center space-y-2 cursor-pointer">
                        <Upload className="h-8 w-8 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {formData.idCard ? formData.idCard.name : "Click to upload ID"}
                        </span>
                        <span className="text-xs text-gray-400">JPG, PNG or PDF (max 5MB)</span>
                        <input
                          type="file"
                          id="idCard"
                          name="idCard"
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-[#00594F] hover:bg-[#004940]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00594F] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
