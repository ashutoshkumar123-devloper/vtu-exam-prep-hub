
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import UpdatesSection from '@/components/UpdatesSection';
import SubjectsSection from '@/components/SubjectsSection';
import QuizSection from '@/components/QuizSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      <UpdatesSection />
      <SubjectsSection searchQuery={searchQuery} />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
