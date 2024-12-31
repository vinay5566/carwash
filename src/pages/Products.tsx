import { Shield, Spray, Droplets } from 'lucide-react';

const products = [
  {
    name: "Premium Wash Shampoo",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80",
    description: "pH-neutral car shampoo that's gentle on your car's paint while providing deep cleaning action.",
    features: ["pH-neutral formula", "Biodegradable", "Concentrated formula", "Wax-friendly"]
  },
  {
    name: "Wheel & Tire Cleaner",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
    description: "Professional-grade wheel cleaner that removes brake dust and road grime effectively.",
    features: ["Safe for all wheel types", "Brake dust removal", "Non-acidic", "Quick-acting formula"]
  },
  {
    name: "Paint Protection Sealant",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    description: "Long-lasting paint sealant that provides up to 6 months of protection.",
    features: ["UV protection", "Water repellent", "Deep shine", "Easy application"]
  }
];

export default function Products() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Professional Car Care Products</h2>
          <p className="mt-4 text-xl text-gray-600">
            Premium products used in our services, now available for purchase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Shield className="h-4 w-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}