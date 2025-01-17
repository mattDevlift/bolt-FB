import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/layout/Layout';
import { ScrollToTop } from '@components/shared/ScrollToTop';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Resources } from '@/pages/Resources';
import { AllProducts, ProductCategories } from '@/pages/products';
import { BookDemo } from '@/pages/BookDemo';
import { BlogList, BlogDetail } from '@/pages/blog';
import { ProjectList, ProjectDetails } from '@/pages/projects';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/category/:category" element={<ProductCategories />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;