'use client';

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { useState } from 'react';

interface PromptCardProps {
  prompt: {
    id: string;
    title: string;
    description: string;
    content: string;
    category: string;
    delay?: number;
  };
  delay?: number;
}

export default function PromptCard({ prompt, delay = 0 }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      Image: '🖼️',
      Video: '🎥',
      Coding: '💻',
    };
    return icons[category] || '✨';
  };

  return (
    <GlassCard delay={delay}>
      <div className="flex flex-col h-full gap-4">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
            {getCategoryIcon(prompt.category)} {prompt.category}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">{prompt.title}</h3>

        {/* Description */}
        <p className="text-foreground/70 text-sm flex-grow">{prompt.description}</p>

        {/* Code/Content Preview */}
        <div className="bg-black/30 rounded-lg p-3 border border-white/5 max-h-28 overflow-hidden">
          <code className="text-xs text-accent font-mono whitespace-pre-wrap break-words">
            {prompt.content.substring(0, 150)}
            {prompt.content.length > 150 ? '...' : ''}
          </code>
        </div>

        {/* Copy Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className={`w-full px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            copied
              ? 'bg-primary/20 text-primary'
              : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20'
          }`}
        >
          {copied ? '✓ Copied!' : '📋 Copy Prompt'}
        </motion.button>

        {/* Action Icons */}
        <div className="flex gap-2 pt-2 border-t border-white/10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-white/5 transition-all duration-300"
            title="Copy"
          >
            📋
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-white/5 transition-all duration-300"
            title="Share"
          >
            🔗
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-white/5 transition-all duration-300"
            title="Save"
          >
            💾
          </motion.button>
        </div>
      </div>
    </GlassCard>
  );
}
