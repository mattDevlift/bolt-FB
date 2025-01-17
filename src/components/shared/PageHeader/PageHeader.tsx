import React from 'react';

interface PageHeaderProps {
  title1: string;
  title2: string;
  accentText?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title1,
  title2,
  accentText,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-4 py-12 mt-5">
        <div className="text-center">
          <h2 className="text-h1 mb-8">
            {title1} <span className="text-[#E0AD4F]">{title2}</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">
            {description}
          </p>
        </div>
      </section>
      
      <div className="w-full px-4 py-4">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover max-h-[600px] rounded-2xl"
        />
      </div>
    </>
  );
};