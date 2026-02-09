'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-neon">
            <span className="text-white font-bold text-lg">DA</span>
          </div>
          <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            DevAI
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Admin Login */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/admin"
            className="text-sm px-4 py-2 rounded-lg border border-primary/50 text-primary hover:shadow-neon transition-all duration-300"
          >
            Admin Login
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
