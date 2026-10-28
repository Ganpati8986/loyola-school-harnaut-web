import { supabase, BUCKET } from './supabase';

export const MAX_PDF_MB = 5;

type Opts = { maxDim?: number; quality?: number };

// Resize (longest side <= maxDim) + re-encode to WebP. Visually lossless at
// quality ~0.8-0.85, typically 70-90% smaller. GIF/SVG are left untouched.
async function compressImage(file: File, { maxDim = 1920, quality = 0.82 }: Opts = {}) {
  if (file.type === 'image/gif' || file.type === 'image/svg+xml') return file as Blob;
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
  const scale = Math.min(1, maxDim / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext('2d')!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close?.();
  const blob: Blob | null = await new Promise((r) => canvas.toBlob(r, 'image/webp', quality));
  // keep the original if re-encoding somehow made it bigger
  return blob && blob.size < file.size ? blob : (file as Blob);
}

const EXT: Record<string, string> = {
  'image/webp': 'webp', 'image/jpeg': 'jpg', 'image/png': 'png', 'image/gif': 'gif', 'application/pdf': 'pdf',
};
export const kb = (n: number) => (n > 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.round(n / 1024)} KB`);

export async function uploadMedia(folder: string, file: File, opts?: Opts) {
  let blob: Blob = file;
  if (file.type.startsWith('image/')) blob = await compressImage(file, opts);
  else if (file.type === 'application/pdf') {
    if (file.size > MAX_PDF_MB * 1048576) throw new Error(`PDF ${kb(file.size)} hai. Max ${MAX_PDF_MB} MB allowed.`);
  } else throw new Error('Sirf image ya PDF upload kar sakte hain.');

  const ext = EXT[blob.type] || 'bin';
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, blob, {
    contentType: blob.type, cacheControl: '31536000',
  });
  if (error) throw error;
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { url: data.publicUrl as string, path, type: blob.type, before: file.size, after: blob.size };
}

export async function removeMedia(path?: string | null) {
  if (path) await supabase.storage.from(BUCKET).remove([path]);
}
