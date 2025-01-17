import React from 'react';
import { Button } from '../components/ui/Button/Button';

const ButtonPreview = () => {
  const sizes = ['small', 'medium', 'large'] as const;
  const variants = [
    'primary',
    'secondary',
    'primary-outline',
    'secondary-outline',
    'alt',
    'alt-icon',
  ] as const;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Button Components</h1>
      
      {sizes.map((size) => (
        <div key={size} className="mb-12">
          <h2 className="text-xl font-semibold mb-4 capitalize">{size} Buttons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {variants.map((variant) => (
              <div key={variant} className="space-y-4">
                <div>
                  <Button
                    variant={variant}
                    size={size}
                    withIcon={variant === 'alt-icon'}
                  >
                    Button
                  </Button>
                </div>
                <div>
                  <Button
                    variant={variant}
                    size={size}
                    withIcon={variant === 'alt-icon'}
                    disabled
                  >
                    Button
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButtonPreview;