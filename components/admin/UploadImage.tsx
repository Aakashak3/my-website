'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { uploadFile } from '@/lib/storage';

interface UploadImageProps {
  bucket: 'posters' | 'thumbnails' | 'services' | 'projects';
  label?: string;
  initialUrl?: string | null;
  onUploaded: (result: { url: string | null; path: string }) => void;
}

export default function UploadImage({ bucket, label = 'Image', initialUrl, onUploaded }: UploadImageProps) {
  const [preview, setPreview] = useState<string | null>(initialUrl || null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    try {
      const { publicUrl, path } = await uploadFile(bucket, file, { prefix: bucket });
      setPreview(publicUrl);
      onUploaded({ url: publicUrl, path });
    } catch (err) {
      console.error('Image upload failed:', err);
      setError('Upload failed. Try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white mb-1">{label}</label>

      {preview ? (
        <div className="relative w-full aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt={label} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-full aspect-video bg-white/5 border border-dashed border-white/10 rounded-lg flex items-center justify-center text-foreground/50 text-sm">
          No image selected
        </div>
      )}

      <motion.label whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white cursor-pointer inline-block">
          {uploading ? 'Uploading...' : 'Choose Image'}
        </span>
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={uploading} />
      </motion.label>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
