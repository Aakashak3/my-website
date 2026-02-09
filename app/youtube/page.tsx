'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import VideoCard from '@/components/VideoCard';
import { YOUTUBE_VIDEOS } from '@/lib/constants';

export default function YouTubePage() {
  return (
    <>
      {/* Header Section */}
      <section className="min-h-[40vh] bg-gradient-to-b from-background via-background to-background px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block mb-6 text-5xl">📺</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              YouTube Channel
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Fun and easy AI tutorials, tools, and challenges 🤖<br />Beginner-friendly content to learn AI step by step 🚀
            </p>
          </motion.div>

          {/* Advertisement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <p className="text-foreground/60 text-sm mb-2">Advertisement</p>
            <p className="text-foreground/40">AdSense Placeholder</p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="bg-gradient-to-b from-background to-background px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {YOUTUBE_VIDEOS.map((video, index) => (
              <VideoCard key={video.id} video={video} delay={index * 0.05} />
            ))}
          </div>

          {/* Advertisement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center mb-16"
          >
            <p className="text-foreground/60 text-sm mb-2">Advertisement</p>
            <p className="text-foreground/40">AdSense Placeholder</p>
          </motion.div>

          {/* Subscribe Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="text-5xl mb-6">🎥</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe for More Content
            </h2>
            <p className="text-foreground/70 mb-8">
              Get notified about new tutorials, tips, and tech insights
            </p>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-neon hover:shadow-neon-lg transition-all duration-300"
            >
              📺 Subscribe on YouTube
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
