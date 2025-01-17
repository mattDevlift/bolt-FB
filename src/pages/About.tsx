import React from 'react';
import { PageHeader } from '@components/shared/PageHeader';
import { SideBySide } from '@components/shared/SideBySide';
import { Stats } from '@components/about/Stats';
import { Team } from '@components/about/Team';
import { Testimonials } from '@components/about/Testimonials';
import { Careers } from '@components/about/Careers';

export const About = () => {
  return (
    <>
      <PageHeader 
        title1="Trusted for"
        title2="50 Years"
        description="Since 1975, Form & Build Supply has been the leader in supplying quality concrete and masonry specialty products to the Ontario construction industry."
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Form & Build Supply warehouse and team"
      />
      <SideBySide 
        title="Trust Built."
        accentText="Loyalty Formed."
        subtitle="OUR STORY"
        hideButton={true}
        paragraph={`For over five decades, Form & Build Supply has been at the forefront of the construction supply industry in Ontario. What began as a small family business in 1975 has grown into one of the region's most trusted suppliers of concrete and masonry products. Our commitment to quality and customer service has remained unwavering throughout our journey.\n\nThrough the years, we've adapted to changing industry needs and technological advancements, continuously expanding our product range and expertise. \n\nToday, with six strategic locations across Ontario and a team of dedicated professionals, we continue to uphold the values that have defined us since day one: exceptional service, technical expertise, and an unwavering commitment to our customers' success.`}
      />
      <Stats />
      <Testimonials />
      <Team />
      <Careers />
    </>
  );
};