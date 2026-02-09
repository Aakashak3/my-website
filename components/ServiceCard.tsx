'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from './GlassCard';

interface ServiceCardProps {
  service: {
    id: string;
    icon: string;
    title: string;
    description: string;
    included: string[];
    cta: {
      text: string;
      href: string;
    };
  };
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <GlassCard delay={delay}>
      <div className="flex flex-col h-full gap-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay }}
          viewport={{ once: true }}
          className="text-5xl"
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">{service.title}</h3>

        {/* Description */}
        <p className="text-foreground/70 leading-relaxed">{service.description}</p>

        {/* What's Included Section */}
        <div className="border-t border-white/10 pt-6">
          <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
            What's Included
          </h4>
          <ul className="space-y-2">
            {service.included.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: delay + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-foreground/70 text-sm"
              >
                <span className="text-accent text-lg">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-auto pt-6"
        >
          <Link
            href={service.cta.href}
            className="w-full inline-block px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg shadow-neon hover:shadow-neon-lg transition-all duration-300 text-center"
          >
            ⭐ {service.cta.text}
          </Link>
        </motion.div>
      </div>
    </GlassCard>
  );
}
