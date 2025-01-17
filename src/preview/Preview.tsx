import React from 'react';
import ButtonPreview from './ButtonPreview';
import IconButtonPreview from './IconButtonPreview';

const Preview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ButtonPreview />
      <IconButtonPreview />
    </div>
  );
};

export default Preview;