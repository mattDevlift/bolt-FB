import React from 'react';
import { SmallPageHeader } from '@components/shared/SmallPageHeader';
import { DemoForm } from '@components/bookDemo/DemoForm';

export const BookDemo = () => {
  return (
    <>
      <SmallPageHeader 
        title="Ask an Expert"
        accentText="Get your questions answered."
        backgroundImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=2000&auto=format&fit=crop&q=80"
      />
      <DemoForm />
    </>
  );
};