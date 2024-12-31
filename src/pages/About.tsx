export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About SparkleWash</h2>
          <p className="text-xl text-gray-600">Your trusted partner in car care since 1995</p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80"
                alt="Car wash facility"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
              <p className="text-gray-600">
                Founded in 1995, SparkleWash has been providing top-quality car wash services to our
                community for over 25 years. We started with a simple mission: to deliver exceptional
                car cleaning services while maintaining the highest standards of customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of the leading automated car wash facilities in the
                region, serving thousands of satisfied customers each month. Our state-of-the-art
                equipment and dedicated team ensure that every vehicle leaves our facility looking its
                absolute best.
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quality service at competitive prices</li>
                  <li>• Environmental responsibility</li>
                  <li>• Customer satisfaction guarantee</li>
                  <li>• Community involvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}