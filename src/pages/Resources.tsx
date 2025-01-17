import React from 'react';
import { SmallPageHeader } from '@components/shared/SmallPageHeader';
import { Catalogue } from '@components/resources/Catalogue';

export const Resources = () => {
  return (
    <>
      <SmallPageHeader 
        title="Resources"
        accentText="Check out our latest product catalogues"
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=2000&auto=format&fit=crop&q=80"
      />
      <Catalogue />
    </>
  );
};