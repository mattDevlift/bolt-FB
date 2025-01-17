import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmallPageHeader } from '@components/shared/SmallPageHeader';
import { BlogsProjectsGrid, GridItem } from '@components/shared/BlogsProjectsGrid';
import { CategoryGrid } from '@components/shared/CategoryGrid';
import type { Category, SortOption } from '@components/shared/CategoryGrid';

// Mock categories for demonstration
const categories: Category[] = [
  "Industry News",
  "Product Updates",
  "How-To Guides",
  "Case Studies"
];

// Sort options
const sortOptions: SortOption[] = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A-Z", value: "title-asc" },
  { label: "Z-A", value: "title-desc" }
];

// Mock blog posts for demonstration
const blogPosts: GridItem[] = [
  {
    id: 1,
    title: "The Future of Sustainable Construction Materials",
    excerpt: "Discover how eco-friendly materials are revolutionizing the construction industry and shaping the future of sustainable building practices.",
    category: "Industry News",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Essential Safety Equipment for Construction Sites",
    excerpt: "A comprehensive guide to the latest safety equipment and best practices for maintaining a secure construction environment.",
    category: "How-To Guides",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Introducing Our New Line of Concrete Forms",
    excerpt: "Explore our latest collection of innovative concrete forms designed to enhance efficiency and precision in your projects.",
    category: "Product Updates",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Success Story: Downtown Commercial Complex",
    excerpt: "Learn how Form & Build Supply helped deliver a landmark commercial project on time and under budget.",
    category: "Case Studies",
    date: "March 8, 2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Form & Build Supply Expands to New Location",
    excerpt: "We're excited to announce the opening of our newest branch, bringing our products and expertise to more customers.",
    category: "Industry News",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Join Us at the 2024 Construction Expo",
    excerpt: "Visit our booth at the upcoming Construction Expo to see live demonstrations and meet our product experts.",
    category: "Industry News",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Best Practices for Waterproofing Foundations",
    excerpt: "Expert tips and techniques for ensuring long-lasting waterproof foundations in commercial and residential projects.",
    category: "How-To Guides",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "New Energy-Efficient Insulation Solutions",
    excerpt: "Discover our latest range of insulation products designed to maximize energy efficiency and reduce environmental impact.",
    category: "Product Updates",
    date: "February 25, 2024",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Case Study: Sustainable Hospital Renovation",
    excerpt: "How our products contributed to the successful green renovation of a major healthcare facility.",
    category: "Case Studies",
    date: "February 22, 2024",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=60"
  },
];

const POSTS_PER_PAGE = 3;

export const BlogList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("newest");
  const [showFilters, setShowFilters] = useState(true);

  // Calculate number of posts per category
  const getCategoryCount = (category: string) => {
    return blogPosts.filter(post => post.category === category).length;
  };

  // Filter and sort posts
  const getFilteredAndSortedPosts = () => {
    let filtered = blogPosts.filter(post => {
      return !selectedCategory || post.category === selectedCategory;
    });

    // Sort posts based on selected sort option
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

  const filteredAndSortedPosts = getFilteredAndSortedPosts();

  // Reset to first page when category or sort changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSort]);

  return (
    <>
      <SmallPageHeader 
        title="Blogs"
        accentText="Our latest blogs and articles"
        backgroundImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=2000&auto=format&fit=crop&q=80"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <CategoryGrid
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          getCategoryCount={getCategoryCount}
          totalItems={blogPosts.length}
          allItemsLabel="All Posts"
          sortOptions={sortOptions}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />

        <BlogsProjectsGrid
          items={filteredAndSortedPosts}
          currentPage={currentPage}
          itemsPerPage={POSTS_PER_PAGE}
          onPageChange={setCurrentPage}
          onItemClick={(id) => navigate(`/blog/${id}`)}
        />
      </div>
    </>
  );
};