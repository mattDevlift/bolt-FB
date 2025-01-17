import React from 'react';
import { Banner } from '@components/home/Banner';
import { SideBySide } from '@components/shared/SideBySide';
import { FeaturedProducts } from '@components/shared/FeaturedProducts';
import { Categories } from '@components/home/Categories';
import { Suppliers } from '@components/home/Suppliers';
import { RecentProjects } from '@components/home/RecentProjects';
import { Services } from '@components/home/Services';

export const Home = () => {
  return (
    <>
      <Banner />
      <SideBySide 
        title="Trust Built."
        accentText="Loyalty Formed."
        description="Our state-of-the-art workshop facilities and expert team ensure that every product meets the highest standards of quality. With decades of experience in the industry, we understand the importance of reliable materials and precise craftsmanship."
        buttonText="Explore Our Story"
        onButtonClick={() => console.log('Learn more clicked')}
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Inside our workshop"
        hideButton={false}
      />
      <FeaturedProducts backgroundColor="#151545" />
      <Categories />
      <Suppliers />
      <RecentProjects />
      <Services />
    </>
  );
};