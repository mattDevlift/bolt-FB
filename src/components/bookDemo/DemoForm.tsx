import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@components/ui/Button/Button';

export const DemoForm = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-[32px] font-bold text-primary mb-8">
            Schedule a free demo or lunch and learn with one of our experts
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-[#E0AD4F] rounded-full p-1">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Personalized Product Demonstrations
                </h3>
                <p className="text-text-secondary">
                  Get hands-on experience with our products through personalized demonstrations tailored to your specific needs and applications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-[#E0AD4F] rounded-full p-1">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Expert Technical Support
                </h3>
                <p className="text-text-secondary">
                  Our team of industry experts will provide detailed technical insights and answer all your questions about product specifications and applications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-[#E0AD4F] rounded-full p-1">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  Lunch and Learn Sessions
                </h3>
                <p className="text-text-secondary">
                  Join us for an informative lunch session where we'll showcase our products and discuss how they can benefit your projects while enjoying a complimentary meal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[20px] font-medium text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[20px] font-medium text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-[20px] font-medium text-primary mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-[20px] font-medium text-primary mb-2">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-[20px] font-medium text-primary mb-2">
                Do you want to schedule a demo or lunch and learn?
              </label>
              <select
                id="type"
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              >
                <option value="">Select an option</option>
                <option value="demo">Demo</option>
                <option value="lunch">Lunch and Learn</option>
              </select>
            </div>

            <div>
              <label htmlFor="products" className="block text-[20px] font-medium text-primary mb-2">
                What products are you interested in?
              </label>
              <textarea
                id="products"
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                required
              />
            </div>

            <div>
              <label htmlFor="additional" className="block text-[20px] font-medium text-primary mb-2">
                Is there anything else you are interested in?
              </label>
              <textarea
                id="additional"
                rows={4}
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-md border border-neutral-stroke focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="large"
              className="w-full bg-black hover:bg-black/90"
            >
              Request a Demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};