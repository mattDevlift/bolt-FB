import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/ui/Button/Button';

const projects = [
  {
    title: "Modern Office Complex",
    description: "A state-of-the-art commercial building featuring sustainable materials and innovative design solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Residential Development",
    description: "Premium residential development with high-end finishes and contemporary architectural elements.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Industrial Warehouse",
    description: "Large-scale industrial facility built with cutting-edge construction techniques and materials.",
    image: "https://images.unsplash.com/photo-1565793979206-10951493332d?w=800&auto=format&fit=crop&q=60"
  }
];

export const RecentProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <h2 className="text-h4 md:text-h3 text-primary">
          Recent Projects
        </h2>
        <Button 
          variant="secondary" 
          size="large"
          onClick={() => navigate('/projects')}
        >
          View All Projects
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="w-full max-w-[405px] h-[511px] mx-auto flex flex-col"
          >
            <div className="h-[253px] mb-6">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-h5 text-primary mb-4">{project.title}</h3>
              <p className="text-regular text-text-secondary">{project.description}</p>
              <div className="mt-auto pt-6">
                <Button 
                  variant="secondary" 
                  size="large"
                  className="text-primary"
                  onClick={() => navigate('/projects')}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};