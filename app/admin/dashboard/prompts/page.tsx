'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

interface Prompt {
  id: string;
  title: string;
  description: string | null;
  content: string;
  category_id: string | null;
  is_featured: boolean;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
}

const checkUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  console.log("Current Logged-in User:", user?.email);
  if (user?.email !== 'aakashnarayanan465@gmail.com') {
    alert("Warning: You are not logged in as the correct admin!");
  }
};

export default function PromptsPanel() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'created' | 'title'>('created');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category_id: '',
    is_featured: false,
  });

  useEffect(() => {
    fetchPrompts();
    fetchCategories();
    checkUser();
  }, []);

  const fetchPrompts = async () => {
    try {
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPrompts(data || []);
    } catch (err) {
      console.error('Error fetching prompts:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('prompt_categories')
        .select('*');

      if (error) throw error;
      setCategories(data || []);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        const { error } = await supabase
          .from('prompts')
          .update(formData)
          .eq('id', editingId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('prompts')
          .insert([formData]);

        if (error) throw error;
      }

      await fetchPrompts();
      setIsModalOpen(false);
      setEditingId(null);
      setFormData({ title: '', description: '', content: '', category_id: '', is_featured: false });
    } catch (err) {
      const anyErr = err as any;
      const message = anyErr?.message || (typeof anyErr === 'string' ? anyErr : JSON.stringify(anyErr));
      console.error('Error saving prompt:', message, anyErr);
      alert(`Error saving prompt: ${message}`);
    }
  };

  const handleEdit = (prompt: Prompt) => {
    setFormData({
      title: prompt.title,
      description: prompt.description || '',
      content: prompt.content,
      category_id: prompt.category_id || '',
      is_featured: prompt.is_featured,
    });
    setEditingId(prompt.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this prompt?')) return;

    try {
      const { error } = await supabase.from('prompts').delete().eq('id', id);

      if (error) throw error;
      await fetchPrompts();
    } catch (err) {
      const anyErr = err as any;
      const message = anyErr?.message || (typeof anyErr === 'string' ? anyErr : JSON.stringify(anyErr));
      console.error('Error deleting prompt:', message, anyErr);
      alert(`Error deleting prompt: ${message}`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ title: '', description: '', content: '', category_id: '', is_featured: false });
  };

  const filteredPrompts = prompts
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Prompts Management</h1>
            <p className="text-foreground/60 mt-1">Add, edit, and delete AI prompts</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white hover:shadow-neon transition-all duration-300"
          >
            + Add Prompt
          </motion.button>
        </div>
      </motion.div>

      {/* Filters & Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-4 flex-wrap"
      >
        <input
          type="text"
          placeholder="Search prompts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-xs px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-foreground/40 focus:border-primary/50 outline-none transition-colors"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'created' | 'title')}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary/50 outline-none transition-colors"
        >
          <option value="created">Newest First</option>
          <option value="title">Sort by Title</option>
        </select>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Featured</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">Created</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground/80">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-foreground/60">
                    Loading...
                  </td>
                </tr>
              ) : filteredPrompts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-foreground/60">
                    No prompts found. Create one to get started!
                  </td>
                </tr>
              ) : (
                filteredPrompts.map((prompt) => (
                  <tr key={prompt.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">{prompt.title}</td>
                    <td className="px-6 py-4 text-sm text-foreground/70">
                      {categories.find((c) => c.id === prompt.category_id)?.name || '—'}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {prompt.is_featured ? (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                          ⭐ Featured
                        </span>
                      ) : (
                        <span className="text-foreground/50">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground/70">
                      {new Date(prompt.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(prompt)}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-xs hover:bg-blue-500/30 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(prompt.id)}
                          className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-xs hover:bg-red-500/30 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-white/10 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingId ? 'Edit Prompt' : 'Add New Prompt'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-foreground/60 hover:text-foreground text-2xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary/50 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary/50 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary/50 outline-none transition-colors min-h-48"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary/50 outline-none transition-colors"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="featured" className="text-sm text-white font-medium cursor-pointer">
                  Mark as featured ⭐
                </label>
              </div>

              <div className="flex gap-3 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white hover:shadow-neon transition-all duration-300"
                >
                  {editingId ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
