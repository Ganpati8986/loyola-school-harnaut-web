import { supabase, supabaseEnabled } from './supabase';

export const GALLERY_CATEGORIES = ['CAMPUS', 'CLASSROOM', 'LAB', 'GAMES', 'STAFF', 'EVENTS'];

export const youtubeId = (url = ''): string | null => {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  return m ? m[1] : null;
};

async function select(table: string, build: (q: any) => any): Promise<any[]> {
  if (!supabaseEnabled) return [];
  try {
    const { data, error } = await build(supabase.from(table).select('*'));
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.error(`Supabase ${table} load failed:`, e);
    return [];
  }
}

export const fetchBanners = () =>
  select('banners', (q) => q.eq('is_active', true).order('sort_order').order('created_at'));

export async function fetchGalleryItems() {
  const rows = await select('gallery_items', (q) => q.order('created_at', { ascending: false }));
  return rows.map((r) => {
    const yt = r.type === 'video' ? youtubeId(r.video_url) : null;
    return {
      type: r.type,
      category: r.category,
      title: r.title || r.category,
      src: r.type === 'video' ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : r.image_url,
      videoUrl: r.video_url,
      youtubeId: yt,
    };
  });
}

// Same shape the Notice Board / Bulletin Board already use for ERP notices.
export async function fetchSiteNotices() {
  const rows = await select('notices', (q) => q.eq('is_active', true).order('created_at', { ascending: false }));
  return rows.map((n) => ({
    id: n.id,
    date: new Date(n.created_at).toLocaleDateString('en-GB'),
    title: n.title,
    description: n.description,
    isNew: Date.now() - new Date(n.created_at).getTime() <= 7 * 864e5,
    isImportant: n.notice_type === 'IMPORTANT',
    isReminder: n.notice_type === 'REMINDER',
    fileType: !n.file_mime ? 'other' : n.file_mime.includes('pdf') ? 'pdf' : n.file_mime.startsWith('image/') ? 'image' : 'other',
    fileUrl: n.file_url || null,
  }));
}

// Photos for fixed spots on pages (principal, vice_principal, faculty carousel).
export async function fetchSiteImages(): Promise<Record<string, string[]>> {
  const rows = await select('site_images', (q) => q.order('sort_order').order('created_at'));
  const map: Record<string, string[]> = {};
  rows.forEach((r) => (map[r.slot] ||= []).push(r.image_url));
  return map;
}

// Editable text (name, role, quote, paragraphs) for principal / vice_principal.
export async function fetchSiteText(): Promise<Record<string, any>> {
  const rows = await select('site_text', (q) => q);
  const map: Record<string, any> = {};
  rows.forEach((r) => (map[r.key] = r.data || {}));
  return map;
}
