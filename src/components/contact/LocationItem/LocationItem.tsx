import React from 'react';
import { LocationItemProps } from './LocationItem.types';

export const LocationItem: React.FC<LocationItemProps> = ({
  name,
  address,
  phone,
  local,
  fax,
  email,
  imageUrl,
}) => {
  // Split address at the city name
  const addressParts = address.split(/,\s*(?=[A-Za-z]+)/);
  const streetAddress = addressParts[0];
  const cityAndPostal = addressParts.slice(1).join(', ');

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-neutral-stroke h-[610px] flex flex-col">
      <div className="h-[305px] relative border-b-4 border-b-[#E0AD4F]">
        <img
          src={imageUrl}
          alt={`${name} branch location`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h3 className="text-h5 text-primary mb-4">{name}</h3>
          <div className="text-[#E0AD4F] text-regular">
            <p>{streetAddress}</p>
            <p>{cityAndPostal}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <ul className="space-y-3 text-regular">
            <li>
              <a 
                href={`mailto:${email}`}
                className="text-text-secondary hover:text-secondary transition-colors"
              >
                Email: {email}
              </a>
            </li>
            <li>
              <a 
                href={`tel:${local}`} 
                className="text-text-secondary hover:text-secondary transition-colors"
              >
                Local: {local}
              </a>
            </li>
            <li>
              <a 
                href={`tel:${phone}`} 
                className="text-text-secondary hover:text-secondary transition-colors"
              >
                Phone: {phone}
              </a>
            </li>
            <li>
              <a 
                href={`tel:${fax}`} 
                className="text-text-secondary hover:text-secondary transition-colors"
              >
                Fax: {fax}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};