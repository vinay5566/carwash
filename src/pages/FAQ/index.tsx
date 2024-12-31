import FAQSection from './components/FAQSection';
import { faqData } from './data/faqData';

export default function FAQ() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>
        <FAQSection faqs={faqData} />
      </div>
    </div>
  );
}