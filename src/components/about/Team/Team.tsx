import React from 'react';
import { SectionHeader } from '@components/shared/SectionHeader';

const teamMembers = [
  {
    name: "Michael Roberts",
    title: "Chief Executive Officer",
    email: "michael.roberts@formandbuild.com",
    phone: "(416) 555-0101",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Sarah Anderson",
    title: "Chief Operations Officer",
    email: "sarah.anderson@formandbuild.com",
    phone: "(416) 555-0102",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "David Chen",
    title: "Chief Financial Officer",
    email: "david.chen@formandbuild.com",
    phone: "(416) 555-0103",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Emily Thompson",
    title: "VP of Sales",
    email: "emily.thompson@formandbuild.com",
    phone: "(416) 555-0104",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "James Wilson",
    title: "VP of Operations",
    email: "james.wilson@formandbuild.com",
    phone: "(416) 555-0105",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Lisa Martinez",
    title: "VP of Marketing",
    email: "lisa.martinez@formandbuild.com",
    phone: "(416) 555-0106",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60"
  }
];

export const Team = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          title="OUR TEAM"
          accentText="Meet our Leadership Team"
          titleColor="text-[#E0AD4F]"
          accentTextColor="text-primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="h-[520px] bg-white rounded-lg overflow-hidden border border-neutral-stroke"
            >
              <div className="h-[347px] relative border-b-4 border-[#E0AD4F]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[22px] font-semibold text-primary mb-6">{member.name}</h3>
                <p className="text-[16px] text-[#E0AD4F]">{member.title}</p>
                <div className="mt-0">
                  <a 
                    href={`mailto:${member.email}`}
                    className="block text-[16px] text-text-secondary hover:text-secondary transition-colors"
                  >
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="block text-[16px] text-text-secondary hover:text-secondary transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};