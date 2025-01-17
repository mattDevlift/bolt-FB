import React from 'react';
import { ProjectDetailsCardProps } from './ProjectDetailsCard.types';

export const ProjectDetailsCard: React.FC<ProjectDetailsCardProps> = ({
  title,
  date,
  contractor,
  owner,
  engineerArchitect,
  category,
  image
}) => {
  return (
    <div className="w-full bg-white mb-12 border border-neutral-stroke rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Project Details */}
        <div className="p-12">
          <h2 className="text-[32px] font-bold text-primary mb-2">{title}</h2>
          <p className="text-secondary mb-8">{date}</p>
          
          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="space-y-4">
                <div>
                  <p className="text-text-secondary">Contractor:</p>
                  <p className="text-primary font-medium">{contractor}</p>
                </div>
                <div>
                  <p className="text-text-secondary">Owner:</p>
                  <p className="text-primary font-medium">{owner}</p>
                </div>
                <div>
                  <p className="text-text-secondary">Engineer/Architect:</p>
                  <p className="text-primary font-medium">{engineerArchitect}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-full min-h-[400px] lg:min-h-full">
          <img 
            src={image}
            alt="Project overview"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};