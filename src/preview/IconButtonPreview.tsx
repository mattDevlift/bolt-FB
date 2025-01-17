import React from 'react';
import { IconButton } from '../components/ui/IconButton/IconButton';
import { Search, ShoppingCart, ChevronLeft, X } from 'lucide-react';

const IconButtonPreview = () => {
  const variants = ['primary', 'secondary', 'outline', 'ghost'] as const;
  const sizes = ['sm', 'md', 'lg'] as const;
  const icons = [
    { icon: Search, label: 'Search' },
    { icon: ShoppingCart, label: 'Cart' },
    { icon: ChevronLeft, label: 'Back' },
    { icon: X, label: 'Close' },
  ];

  return (
    <div className="p-8">
      <h1>Icon Button Components</h1>
      
      {variants.map((variant) => (
        <div key={variant} className="mb-12">
          <h2 className="text-xl font-semibold mb-4 capitalize">{variant} Buttons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {icons.map(({ icon, label }) => (
              <div key={label} className="space-y-4">
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <IconButton
                      key={size}
                      icon={icon}
                      variant={variant}
                      size={size}
                      aria-label={label}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <IconButton
                    icon={icon}
                    variant={variant}
                    disabled
                    aria-label={`${label} (Disabled)`}
                  />
                  <IconButton
                    icon={icon}
                    variant={variant}
                    isLoading
                    aria-label={`${label} (Loading)`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconButtonPreview;