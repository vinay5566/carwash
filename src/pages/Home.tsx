import { ArrowRight, Droplets, Shield, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80"
          alt="Car wash"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Professional Car Wash Services</h1>
            <p className="text-xl mb-8">Keep your vehicle sparkling clean with our premium wash services</p>
            <Link
              to="/pricing"
              className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>View Our Packages</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose SparkleWash?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Timer className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">Get your car cleaned in 30 minutes or less</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Droplets className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">We use environmentally safe cleaning products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Guaranteed quality service every time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}