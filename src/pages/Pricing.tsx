import { Check } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "Basic Wash",
      price: 15,
      features: [
        "Exterior Wash",
        "Spot-Free Rinse",
        "Power Dry",
        "Wheel Cleaning"
      ]
    },
    {
      name: "Premium Wash",
      price: 25,
      features: [
        "Everything in Basic",
        "Triple Foam Polish",
        "Undercarriage Wash",
        "Tire Shine",
        "Rain-X Treatment"
      ]
    },
    {
      name: "Ultimate Wash",
      price: 35,
      features: [
        "Everything in Premium",
        "Hand Wax",
        "Interior Vacuum",
        "Dashboard Cleaning",
        "Window Cleaning",
        "Air Freshener"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Washing Packages</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect package for your vehicle
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-center text-gray-900">
                    {pkg.name}
                  </h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-gray-600 ml-1">/wash</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}