import React from 'react';

export const FooterLegal = () => {
  return (
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white/60 text-sm mb-4 md:mb-0">
        © 2024 Form and Build. All rights reserved.
      </p>
      <div className="flex space-x-6 text-sm">
        <a href="#" className="text-white/60 hover:text-white">Privacy Policy</a>
        <span className="text-white/60">|</span>
        <a href="#" className="text-white/60 hover:text-white">Accessibility</a>
        <span className="text-white/60">|</span>
        <a href="#" className="text-white/60 hover:text-white">Compliance</a>
      </div>
    </div>
  );
};