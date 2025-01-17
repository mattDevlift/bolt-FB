import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmallPageHeader } from '@components/shared/SmallPageHeader';
import { BlogsProjectsGrid, GridItem } from '@components/shared/BlogsProjectsGrid';
import { CategoryGrid } from '@components/shared/CategoryGrid';
import type { Category, SortOption } from '@components/shared/CategoryGrid';

// Mock categories for demonstration
const categories: Category[] = [
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure"
];

// Sort options
const sortOptions: SortOption[] = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A-Z", value: "title-asc" },
  { label: "Z-A", value: "title-desc" }
];

// Mock projects data
const projects: GridItem[] = [
  {
    id: 1,
    title: "Modern Office Complex Toronto",
    excerpt: "A state-of-the-art commercial building featuring sustainable materials and innovative design solutions for a leading tech company.",
    category: "Commercial",
    date: "Completed March 2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Luxury Condominium Development",
    excerpt: "Premium residential development with high-end finishes and contemporary architectural elements in downtown Mississauga.",
    category: "Residential",
    date: "Completed February 2024",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Manufacturing Facility Expansion",
    excerpt: "Major expansion of an automotive parts manufacturing facility, incorporating advanced automation systems.",
    category: "Industrial",
    date: "Completed January 2024",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Highway Bridge Rehabilitation",
    excerpt: "Comprehensive rehabilitation of a major highway bridge, including structural repairs and safety improvements.",
    category: "Infrastructure",
    date: "Completed December 2023",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Shopping Mall Renovation",
    excerpt: "Complete interior and exterior renovation of a major shopping center, modernizing the space while maintaining operations.",
    category: "Commercial",
    date: "Completed November 2023",
    image: "https://images.unsplash.com/photo-1519420573924-65fcd45245f8?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Waterfront Residential Complex",
    excerpt: "Luxury waterfront residential development featuring premium amenities and spectacular lake views.",
    category: "Residential",
    date: "Completed October 2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Distribution Center Development",
    excerpt: "State-of-the-art distribution facility with advanced logistics systems and sustainable design features.",
    category: "Industrial",
    date: "Completed September 2023",
    image: "https://images.unsplash.com/photo-1565793979206-10951493332d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Municipal Water Treatment Facility",
    excerpt: "Construction of a new water treatment facility incorporating the latest purification technologies.",
    category: "Infrastructure",
    date: "Completed August 2023",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Corporate Headquarters",
    excerpt: "Design and construction of a new corporate headquarters with emphasis on sustainability and employee wellness.",
    category: "Commercial",
    date: "Completed July 2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  }
];

const PROJECTS_PER_PAGE = 3;

export const ProjectList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("newest");
  const [showFilters, setShowFilters] = useState(true);

  // Calculate number of projects per category
  const getCategoryCount = (category: string) => {
    return projects.filter(project => project.category === category).length;
  };

  // Filter and sort projects
  const getFilteredAndSortedProjects = () => {
    let filtered = projects.filter(project => {
      return !selectedCategory || project.category === selectedCategory;
    });

    // Sort projects based on selected sort option
    switch (selectedSort) {
      case "oldest":
        return [...filtered].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case "title-asc":
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
      case "newest":
      default:
        return [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  };

  const filteredAndSortedProjects = getFilteredAndSortedProjects();

  // Reset to first page when category or sort changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSort]);

  return (
    <>
      <SmallPageHeader 
        title="PROJECTS"
        accentText="Our latest construction projects"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&auto=format&fit=crop&q=80"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <CategoryGrid
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          getCategoryCount={getCategoryCount}
          totalItems={projects.length}
          allItemsLabel="All Projects"
          sortOptions={sortOptions}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        <BlogsProjectsGrid
          items={filteredAndSortedProjects}
          currentPage={currentPage}
          itemsPerPage={PROJECTS_PER_PAGE}
          onPageChange={setCurrentPage}
          onItemClick={(id) => navigate(`/projects/${id}`)}
        />
      </div>
    </>
  );
};