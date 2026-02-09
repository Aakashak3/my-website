'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';

const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { id: 'prompts', label: 'Prompts', href: '/admin/dashboard/prompts', icon: '✨' },
  { id: 'videos', label: 'Videos', href: '/admin/dashboard/videos', icon: '🎥' },
  { id: 'services', label: 'Services', href: '/admin/dashboard/services', icon: '🛠️' },
  { id: 'messages', label: 'Messages', href: '/admin/dashboard/messages', icon: '💬' },
];

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/admin');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const isActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === '/admin/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-white/5 backdrop-blur-xl border-r border-white/10 h-screen flex flex-col transition-all duration-300 fixed left-0 top-0 z-40`}
    >
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-sm">DA</span>
            </div>
            <span className="font-bold text-white">Admin</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive(item.href)
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'text-foreground/70 hover:bg-white/5 hover:text-foreground'
            }`}
            title={isCollapsed ? item.label : undefined}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 space-y-3">
        {!isCollapsed && (
          <div className="text-xs text-foreground/60 p-3 bg-white/5 rounded-lg">
            <p className="font-medium text-foreground mb-1">Logged in as</p>
            <p className="truncate">{user?.email}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg transition-colors text-sm font-medium"
        >
          {isCollapsed ? '🚪' : 'Logout'}
        </button>
      </div>
    </motion.aside>
  );
}
