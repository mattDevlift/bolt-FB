import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FooterCTA } from './FooterCTA';
import { FooterNav } from './FooterNav';
import { FooterLegal } from './FooterLegal';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define route-specific CTA content
  const ctaContent = {
    '/': {
      heading: 'Serving you with 6 branches across Ontario!',
      description: 'With six branches across Southwestern Ontario, and delivery across the region, we\'re ready and able to help you with whatever your job needs are.',
      buttonText: 'Contact Us',
      onButtonClick: () => navigate('/contact')
    },
    '/about': {
      heading: 'Want to learn more about our services?',
      description: 'Our team of experts is here to help you find the right solutions for your projects.',
      buttonText: 'Get in Touch',
      onButtonClick: () => navigate('/contact')
    },
    '/products': {
      heading: 'Need help finding the right product?',
      description: 'Our product specialists can help you choose the perfect materials for your project.',
      buttonText: 'Ask an Expert',
      onButtonClick: () => navigate('/contact')
    },
    '/resources': {
      heading: 'Want to learn more about products we offer?',
      description: 'Our experts are ready and able to help you with whatever your job needs are.',
      buttonText: 'Contact Us',
      onButtonClick: () => navigate('/resources')
    },
    '/contact': {
      heading: 'Ask an Expert',
      description: 'Chat with one of our experts.',
      buttonText: 'Book a Demo',
      onButtonClick: () => navigate('/contact')
    },
    '/projects': {
      heading: 'Talk to a Team Member about your next project.',
      description: 'With six branches across Southwestern Ontario, and delivery across the region, we\'re ready and able to help you with whatever your job needs are.',
      buttonText: 'Book a Demo',
      onButtonClick: () => navigate('/contact')
    }
  };

  // Get CTA content for current route, fallback to default if not found
  const currentCTA = ctaContent[location.pathname as keyof typeof ctaContent] || {
    heading: 'Serving you with 6 branches across Ontario!',
    description: 'With six branches across Southwestern Ontario, and delivery across the region, we\'re ready and able to help you with whatever your job needs are.',
    buttonText: 'Contact Us',
    onButtonClick: () => navigate('/contact')
  };

  return (
    <footer className="bg-primary mt-32">
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        <FooterCTA 
          heading={currentCTA.heading}
          description={currentCTA.description}
          buttonText={currentCTA.buttonText}
          onButtonClick={currentCTA.onButtonClick}
        />
        <FooterNav />
        <FooterLegal />
      </div>
    </footer>
  );
};