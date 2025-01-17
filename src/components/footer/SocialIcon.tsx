import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

type SocialPlatform = 'facebook' | 'instagram' | 'linkedin';

interface SocialIconProps {
  platform: SocialPlatform;
  href: string;
}

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export const SocialIcon: React.FC<SocialIconProps> = ({ platform, href }) => {
  const Icon = icons[platform];
  
  return (
    <a 
      href={href}
      className="bg-white rounded-full p-2.5 text-primary hover:text-secondary transition-colors"
      aria-label={`Visit our ${platform} page`}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
};