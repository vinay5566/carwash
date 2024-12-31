import { Shield, Droplets, Timer, Car, Sun, Wrench } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Paint Protection",
      description: "Special formulas that protect your car's paint while cleaning"
    },
    {
      icon: Droplets,
      title: "Spot-Free Rinse",
      description: "Advanced water filtration system for a spotless finish"
    },
    {
      icon: Timer,
      title: "Quick Service",
      description: "Complete wash and dry in under 30 minutes"
    },
    {
      icon: Car,
      title: "Undercarriage Wash",
      description: "Thorough cleaning of your vehicle's underside"
    },
    {
      icon: Sun,
      title: "Triple Foam Polish",
      description: "Premium foam treatment for extra shine"
    },
    {
      icon: Wrench,
      title: "Modern Equipment",
      description: "State-of-the-art washing and drying systems"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover what makes our car wash service stand out
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Car wash facility"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}