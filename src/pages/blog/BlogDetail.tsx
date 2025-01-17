import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '@components/shared/Breadcrumb';
import { Button } from '@components/ui/Button/Button';
import { SocialIcon } from '@components/footer/SocialIcon';
import { FeaturedProducts } from '@components/shared/FeaturedProducts';

// Mock blog posts data (this should match the data in BlogList)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Construction Materials",
    excerpt: "Discover how eco-friendly materials are revolutionizing the construction industry and shaping the future of sustainable building practices.",
    content: `The construction industry is undergoing a significant transformation as sustainability becomes increasingly important in our modern world. This shift towards eco-friendly materials and practices is not just a trend, but a necessary evolution to address environmental challenges and meet growing regulatory requirements.

    Sustainable Materials Leading the Way
    
    One of the most promising developments in sustainable construction is the emergence of new, eco-friendly materials. These innovations include:
    
    • Bio-based concrete alternatives that reduce carbon emissions
    • Recycled steel and aluminum products that minimize resource extraction
    • Advanced timber products that offer superior strength while being renewable
    • Self-healing materials that extend infrastructure lifespan
    
    The Impact on Construction Practices
    
    The adoption of these sustainable materials is changing how we approach construction projects. Contractors are finding that these materials not only benefit the environment but often provide:
    
    • Improved durability and longevity
    • Better thermal performance
    • Reduced maintenance requirements
    • Lower lifetime costs
    
    Looking Ahead
    
    As technology continues to advance, we can expect to see even more innovations in sustainable construction materials. The future of construction lies in finding the perfect balance between durability, cost-effectiveness, and environmental responsibility.`,
    category: "Industry News",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    authorRole: "Senior Construction Specialist",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
  },
  // ... other blog posts
];

export const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog">
          <Button variant="secondary">Return to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        title={post.title}
        basePath="/blog"
        baseLabel="All Blogs"
      />

      {/* Title Section */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-12 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Date and Social Media Row */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-12 pb-8">
          <div className="flex justify-between items-center">
            <span className="text-secondary text-[16px]">
              {post.date}
            </span>
            <div className="flex space-x-3">
              <SocialIcon href="#" platform="facebook" />
              <SocialIcon href="#" platform="instagram" />
              <SocialIcon href="#" platform="linkedin" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full px-4 py-4">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-auto object-cover max-h-[600px] rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-40">
        <div className="bg-white rounded-lg p-8 md:p-12 mb-12">
          {/* Content */}
          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg text-text-secondary mb-6 leading-relaxed"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <FeaturedProducts 
        backgroundColor="#FFFFFF" 
        hideViewAll={true} 
        titleColor="#151545"
      />
    </article>
  );
};