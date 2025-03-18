
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
            <span className="text-5xl font-bold text-primary">404</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Page Not Found</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
