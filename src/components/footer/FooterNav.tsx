import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@components/ui/Button/Button';
import { Logo } from '@components/brand/Logo';
import { SocialIcon } from './SocialIcon';

export const FooterNav = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
      <div className="flex-shrink-0">
        <Logo variant="horizontal" className="h-8 mb-6 text-white" />
        <div className="flex space-x-3">
          <SocialIcon href="#" platform="facebook" />
          <SocialIcon href="#" platform="instagram" />
          <SocialIcon href="#" platform="linkedin" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex justify-end">
          <div className="w-full max-w-xs">
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-[16px] font-semibold tracking-wider text-secondary uppercase">
                FIND A LOCATION
              </h3>
              <ChevronRight className="h-3 w-3 text-secondary" />
            </div>
            <p className="text-[16px] text-white/80">
              Browse our locations to find a Form & Build team close to you.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-full max-w-xs">
            <div className="flex items-center space-x-2 mb-3">
              <h3 className="text-[16px] font-semibold tracking-wider text-secondary uppercase">
                SUBSCRIBE
              </h3>
              <ChevronRight className="h-3 w-3 text-secondary" />
            </div>
            <p className="text-[16px] text-white/80">
              Get informed about promotions, educational information or sign up for delivery notifications.
            </p>
            <Button variant="secondary" size="large" className="w-full mt-2">
              Subscribe Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};