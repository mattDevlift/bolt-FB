import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Breadcrumb } from '@components/shared/Breadcrumb';
import { Button } from '@components/ui/Button/Button';
import { ProjectDetailsCard } from '@components/projects/ProjectDetailsCard';
import { FeaturedProducts } from '@components/shared/FeaturedProducts';

// Mock project data (this should match the data in ProjectList)
const projects = [
  {
    id: 1,
    title: "Modern Office Complex Toronto",
    description: "A state-of-the-art commercial building featuring sustainable materials and innovative design solutions for a leading tech company.",
    category: "Commercial",
    date: "Completed March 2024",
    contractor: "BuildTech Construction Ltd.",
    owner: "TechCorp Industries",
    engineer: "Smith & Associates Engineering",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Luxury Condominium Development",
    description: "Premium residential development with high-end finishes and contemporary architectural elements in downtown Mississauga.",
    category: "Residential",
    date: "Completed February 2024",
    contractor: "Elite Construction Group",
    owner: "Skyline Developments Inc.",
    architect: "Modern Living Architects",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Manufacturing Facility Expansion",
    description: "Major expansion of an automotive parts manufacturing facility, incorporating advanced automation systems.",
    category: "Industrial",
    date: "Completed January 2024",
    contractor: "Industrial Builders Co.",
    owner: "AutoParts Manufacturing Inc.",
    engineer: "Industrial Systems Engineering Ltd.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Highway Bridge Rehabilitation",
    description: "Comprehensive rehabilitation of a major highway bridge, including structural repairs and safety improvements.",
    category: "Infrastructure",
    date: "Completed December 2023",
    contractor: "Infrastructure Solutions Corp.",
    owner: "Ministry of Transportation",
    engineer: "Bridge Engineering Associates",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Shopping Mall Renovation",
    description: "Complete interior and exterior renovation of a major shopping center, modernizing the space while maintaining operations.",
    category: "Commercial",
    date: "Completed November 2023",
    contractor: "Retail Construction Specialists",
    owner: "Mall Properties Group",
    architect: "Retail Design Studio",
    image: "https://images.unsplash.com/photo-1519420573924-65fcd45245f8?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Waterfront Residential Complex",
    description: "Luxury waterfront residential development featuring premium amenities and spectacular lake views.",
    category: "Residential",
    date: "Completed October 2023",
    contractor: "Waterfront Builders Inc.",
    owner: "Lakeside Development Corp.",
    architect: "Waterfront Architecture Group",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Distribution Center Development",
    description: "State-of-the-art distribution facility with advanced logistics systems and sustainable design features.",
    category: "Industrial",
    date: "Completed September 2023",
    contractor: "Industrial Construction Co.",
    owner: "Global Logistics Ltd.",
    engineer: "Logistics Engineering Group",
    image: "https://images.unsplash.com/photo-1565793979206-10951493332d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Municipal Water Treatment Facility",
    description: "Construction of a new water treatment facility incorporating the latest purification technologies.",
    category: "Infrastructure",
    date: "Completed August 2023",
    contractor: "Municipal Construction Services",
    owner: "City Water Authority",
    engineer: "Water Systems Engineering Inc.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Corporate Headquarters",
    description: "Design and construction of a new corporate headquarters with emphasis on sustainability and employee wellness.",
    category: "Commercial",
    date: "Completed July 2023",
    contractor: "Corporate Builders Ltd.",
    owner: "Tech Innovations Corp.",
    architect: "Sustainable Design Partners",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  }
];

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(project => project.id === Number(id));

  if (!project) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button 
          variant="secondary"
          onClick={() => navigate('/projects')}
        >
          Return to Projects
        </Button>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <Breadcrumb 
        title={project.title}
        basePath="/projects"
        baseLabel="All Projects"
      />

      <div className="max-w-[1440px] mx-auto py-8 px-12">
        <ProjectDetailsCard 
          title={project.title}
          date={project.date}
          contractor={project.contractor}
          owner={project.owner}
          engineerArchitect={project.engineer || project.architect}
          category={project.category}
          image={project.image}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-12 mb-16">
        <div className="bg-white rounded-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Background</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <FeaturedProducts 
        backgroundColor="#FFFFFF" 
        hideViewAll={true} 
        titleColor="#151545"
      />
    </article>
  );
};