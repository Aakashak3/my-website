'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES_DATA } from '@/lib/constants';

export default function ServicesPage() {
  return (
    <>
      {/* Header Section */}
      <section className="min-h-[30vh] bg-gradient-to-b from-background via-background to-background px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Services</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Transform your ideas into reality with cutting-edge development and AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-b from-background to-background px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={service.id} service={service} delay={index * 0.1} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-foreground/70 mb-8">
              Let's discuss how I can help bring your vision to life with modern technology and AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-neon hover:shadow-neon-lg transition-all duration-300"
                >
                  📞 Get in Touch
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:shadow-neon transition-all duration-300"
                >
                  📖 Learn More About Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
