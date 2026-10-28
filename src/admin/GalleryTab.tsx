import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Loader2, Play } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { uploadMedia, removeMedia, kb } from '../lib/storage';
import { GALLERY_CATEGORIES, youtubeId } from '../lib/content';
import { Card, Field, Msg, input, btn, btnDanger } from './ui';

export default function GalleryTab() {
  const [rows, setRows] = useState<any[]>([]);
  const [mode, setMode] = useState<'image' | 'video'>('image');
  const [category, setCategory] = useState(GALLERY_CATEGORIES[0]);
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [busy, setBusy] = useState('');
  const [msg, setMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const { data, error } = await supabase.from('gallery_items').select('*').order('created_at', { ascending: false });
    if (error) setMsg(error.message); else setRows(data || []);
  };
  useEffect(() => { load(); }, []);

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setMsg('');
    try {
      if (mode === 'video') {
        if (!youtubeId(videoUrl)) throw new Error('Valid YouTube link daalein.');
        setBusy('Saving…');
        const { error } = await supabase.from('gallery_items').insert({
          type: 'video', category, title: title.trim() || category, video_url: videoUrl.trim(),
        });
        if (error) throw error;
        setVideoUrl('');
      } else {
        if (!files.length) throw new Error('Kam se kam ek image chuniye.');
        let before = 0, after = 0;
        for (let i = 0; i < files.length; i++) {
          setBusy(`Uploading ${i + 1}/${files.length}…`);
          const up = await uploadMedia('gallery', files[i], { maxDim: 1920, quality: 0.82 });
          before += up.before; after += up.after;
          const { error } = await supabase.from('gallery_items').insert({
            type: 'image', category, title: title.trim() || category, image_url: up.url, image_path: up.path,
          });
          if (error) { await removeMedia(up.path); throw error; }
        }
        setFiles([]);
        if (fileRef.current) fileRef.current.value = '';
        setMsg(`✔ ${files.length} image upload hui (${kb(before)} → ${kb(after)})`);
      }
      setTitle('');
      await load();
      if (mode === 'video') setMsg('✔ Video add ho gaya');
    } catch (err: any) {
      setMsg(err.message || 'Upload fail hua');
    } finally { setBusy(''); }
  };

  const del = async (r: any) => {
    if (!confirm('Ye item delete karna hai?')) return;
    const { error } = await supabase.from('gallery_items').delete().eq('id', r.id);
    if (error) return setMsg(error.message);
    await removeMedia(r.image_path);
    load();
  };

  const shown = rows.filter((r) => filter === 'ALL' || r.category === filter);

  return (
    <>
      <Card title="Add to Gallery">
        <form onSubmit={save} className="space-y-4">
          <div className="flex gap-2">
            {(['image', 'video'] as const).map((m) => (
              <button type="button" key={m} onClick={() => setMode(m)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold border-2 ${mode === m ? 'bg-[#003366] text-white border-[#003366]' : 'border-gray-200 text-[#003366]'}`}>
                {m === 'image' ? 'Photos' : 'Video (YouTube)'}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Category">
              <select className={input} value={category} onChange={(e) => setCategory(e.target.value)}>
                {GALLERY_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Title / Caption" hint="If left blank, the category name will be used">
              <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} />
            </Field>
          </div>
          {mode === 'image' ? (
            <Field label="Photos (You can select multiple photos at once)" hint="They will be automatically resized and compressed before uploading.">
              <input ref={fileRef} className={input} type="file" accept="image/*" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} />
            </Field>
          ) : (
            <Field label="YouTube link" hint="Upload the video to YouTube first (unlisted videos are also supported), then paste the link here.">
              <input className={input} placeholder="https://youtu.be/..." value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            </Field>
          )}
          <button className={btn} disabled={!!busy}>{busy && <Loader2 size={16} className="animate-spin" />}{busy || 'Add'}</button>
          <Msg text={msg} />
        </form>
      </Card>

      <Card title={`Gallery items (${shown.length})`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {['ALL', ...GALLERY_CATEGORIES].map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-3 py-1 rounded-full text-xs font-bold border ${filter === c ? 'bg-[#003366] text-white border-[#003366]' : 'border-gray-200 text-gray-600'}`}>{c}</button>
          ))}
        </div>
        {shown.length === 0 && <p className="text-sm text-gray-400">Yaha abhi kuch nahi hai.</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {shown.map((r) => {
            const yt = r.type === 'video' ? youtubeId(r.video_url) : null;
            return (
              <div key={r.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <div className="relative aspect-video bg-gray-100">
                  <img loading="lazy" src={r.type === 'video' ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : r.image_url} alt={r.title} className="w-full h-full object-cover" />
                  {r.type === 'video' && <Play size={18} className="absolute top-2 right-2 text-white fill-white drop-shadow" />}
                </div>
                <div className="p-2 space-y-1">
                  <p className="text-xs font-bold text-gray-700 truncate">{r.title}</p>
                  <p className="text-[10px] text-gray-400">{r.category}</p>
                  <button className={`${btnDanger} w-full`} onClick={() => del(r)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}
