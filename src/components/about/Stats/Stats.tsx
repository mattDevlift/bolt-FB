import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="flex-1 min-w-[200px] pl-6 border-l-2 border-[#E0AD4F] md:[&:nth-child(3)]:border-l-2 md:[&:nth-child(2)]:border-l-2">
    <div className="text-[56px] font-bold text-primary leading-tight">
      {number}
    </div>
    <div className="text-[18px] text-primary">
      {label}
    </div>
  </div>
);

export const Stats = () => {
  const stats = [
    { number: "50+", label: "Years of Experience" },
    { number: "6", label: "Locations" },
    { number: "7K+", label: "Products" },
    { number: "10K+", label: "Happy Customers" }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};