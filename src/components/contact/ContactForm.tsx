import React from 'react';
import { Button } from '@components/ui/Button/Button';

export const ContactForm = () => {
  const branches = [
    'Toronto',
    'Mississauga',
    'Brampton',
    'Hamilton',
    'London',
    'Windsor'
  ];

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-4xl mx-auto">
      {/* Name and Company Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-[20px] font-medium text-primary mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 rounded-md border border-neutral-stroke bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
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
            name="company"
            className="w-full px-4 py-3 rounded-md border border-neutral-stroke bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {/* Email and Phone Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-[20px] font-medium text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-md border border-neutral-stroke bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[20px] font-medium text-primary mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-md border border-neutral-stroke bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {/* Branch Selection */}
      <div className="mb-6">
        <label htmlFor="branch" className="block text-[20px] font-medium text-primary mb-2">
          Select your closest branch
        </label>
        <select
          id="branch"
          name="branch"
          className="w-full px-4 py-3 rounded-md border border-neutral-stroke bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        >
          <option value="">Select a branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch.toLowerCase()}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-[20px] font-medium text-primary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Type your message..."
          className="w-full px-4 py-3 rounded-md border border-neutral-stroke bg-white focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button 
          type="submit" 
          variant="primary" 
          size="large"
          className="bg-black hover:bg-black/90 text-white"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};