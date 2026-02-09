'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PromptCard from '@/components/PromptCard';
import { PROMPT_DATA, PROMPT_CATEGORIES } from '@/lib/constants';

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter prompts based on category and search
  const filteredPrompts = useMemo(() => {
    return PROMPT_DATA.filter((prompt) => {
      const matchesCategory =
        selectedCategory === 'All' || prompt.category === selectedCategory;
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Header Section */}
      <section className="min-h-[40vh] bg-gradient-to-b from-background via-background to-background px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              AI Prompts Library
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Professional prompts for image generation, video scripts, and coding tasks. Copy
              and customize for your projects.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-foreground/40">
                🔍
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {PROMPT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-neon'
                    : 'bg-white/5 text-foreground/70 border border-white/10 hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="bg-gradient-to-b from-background to-background px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard key={prompt.id} prompt={prompt} delay={index * 0.05} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-foreground/50 text-lg">
                No prompts found for "{searchQuery}" in {selectedCategory} category.
              </p>
            </motion.div>
          )}

          {/* Advertisement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 mb-12"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
              <p className="text-foreground/60 text-sm mb-2">Advertisement</p>
              <p className="text-foreground/40">AdSense Placeholder</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
