import React from 'react';
import { PageHeader } from '@components/shared/PageHeader';
import { ContactForm } from '@components/contact/ContactForm';
import { LocationItem } from '@components/contact/LocationItem';
import { SectionHeader } from '@components/shared/SectionHeader';

export const Contact = () => {
  const locations = [
    {
      name: "Toronto Branch",
      address: "123 Industrial Parkway, Toronto, ON M5V 1A1",
      phone: "1-800-555-0123",
      local: "(416) 555-0123",
      fax: "(416) 555-0124",
      email: "toronto@formandbuild.com",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Mississauga Branch",
      address: "456 Commerce Valley Dr, Mississauga, ON L5A 1W9",
      phone: "1-800-555-0456",
      local: "(905) 555-0456",
      fax: "(905) 555-0457",
      email: "mississauga@formandbuild.com",
      imageUrl: "https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Brampton Branch",
      address: "789 Queen Street E, Brampton, ON L6T 4M9",
      phone: "1-800-555-0789",
      local: "(905) 555-0789",
      fax: "(905) 555-0790",
      email: "brampton@formandbuild.com",
      imageUrl: "https://images.unsplash.com/photo-1577849304422-d019fdd6f29f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Hamilton Branch",
      address: "321 Industrial Drive, Hamilton, ON L8E 1G6",
      phone: "1-800-555-0321",
      local: "(905) 555-0321",
      fax: "(905) 555-0322",
      email: "hamilton@formandbuild.com",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "London Branch",
      address: "567 Wellington Road, London, ON N6C 4R4",
      phone: "1-800-555-0567",
      local: "(519) 555-0567",
      fax: "(519) 555-0568",
      email: "london@formandbuild.com",
      imageUrl: "https://images.unsplash.com/photo-1561518776-e76a5e48f731?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Windsor Branch",
      address: "890 Walker Road, Windsor, ON N8Y 2N5",
      phone: "1-800-555-0890",
      local: "(519) 555-0890",
      fax: "(519) 555-0891",
      email: "windsor@formandbuild.com",
      imageUrl: "https://images.unsplash.com/photo-1615870123253-f3de8aa89e24?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <PageHeader 
        title1="Contact"
        title2="Us"
        description="Our team of experts have the knowledge and experience to get the job done right. Our team members are dedicated to providing quality service and products to our customers."
        imageSrc="https://images.unsplash.com/photo-1565793979206-10951493332d?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Modern industrial warehouse building"
      />

      <section className="max-w-[1440px] mx-auto px-16 py-16 mt-4">
        <SectionHeader
          title="CONTACT"
          accentText="Get in Touch"
          titleColor="text-[#E0AD4F]"
          accentTextColor="text-primary"
        />
        <ContactForm />
      </section>

      <section className="max-w-[1440px] mx-auto px-16 py-16 mt-4">
        <SectionHeader
          title="OUR LOCATIONS"
          accentText="Have a question? We have the answer."
          titleColor="text-[#E0AD4F]"
          accentTextColor="text-primary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationItem
              key={index}
              {...location}
            />
          ))}
        </div>
      </section>
    </>
  );
};