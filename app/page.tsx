
import dynamic from 'next/dynamic';
import React from 'react';

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import PropertyTypes from "@/components/PropertyTypes";
import FeaturedProperties from '@/components/FeaturedProperties';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const ClientLoader = dynamic(() => import('../components/ClientLoader'));

const Page: React.FC = () => {
  const title = "Real Estate";

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <ClientLoader title={title} />

      <div className="min-h-screen bg-white">
        <header className="relative">
          <Hero />
        </header>
        <main>
          <PropertyTypes />
          <Experience />
          <FeaturedProperties />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
