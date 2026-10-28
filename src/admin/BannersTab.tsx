import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { uploadMedia, removeMedia, kb } from '../lib/storage';
import { Card, Field, Msg, input, btn, btnGhost, btnDanger } from './ui';

const EMPTY = { title: '', subtitle: '', motto: '', sort_order: 1 };

export default function BannersTab() {
  const [rows, setRows] = useState<any[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [file, setFile] = useState<File | null>(null);
  const [editing, setEditing] = useState<any | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const { data, error } = await supabase.from('banners').select('*').order('sort_order').order('created_at');
    if (error) setMsg(error.message); else setRows(data || []);
  };
  useEffect(() => { load(); }, []);

  const reset = () => {
    setForm({ ...EMPTY, sort_order: rows.length + 1 }); setFile(null); setEditing(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setMsg('');
    if (!editing && !file) return setMsg('Banner image chuniye.');
    setBusy(true);
    try {
      let patch: any = { ...form, sort_order: Number(form.sort_order) || 1 };
      let info = '';
      if (file) {
        const up = await uploadMedia('banners', file, { maxDim: 2000, quality: 0.85 });
        patch = { ...patch, image_url: up.url, image_path: up.path };
        info = ` (${kb(up.before)} → ${kb(up.after)})`;
      }
      if (editing) {
        const { error } = await supabase.from('banners').update(patch).eq('id', editing.id);
        if (error) throw error;
        if (file) await removeMedia(editing.image_path);
      } else {
        const { error } = await supabase.from('banners').insert(patch);
        if (error) throw error;
      }
      await load(); reset(); setMsg(`✔ Saved${info}`);
    } catch (err: any) {
      setMsg(err.message || 'Save nahi hua');
    } finally { setBusy(false); }
  };

  const edit = (b: any) => {
    setEditing(b);
    setForm({ title: b.title || '', subtitle: b.subtitle || '', motto: b.motto || '', sort_order: b.sort_order });
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggle = async (b: any) => {
    const { error } = await supabase.from('banners').update({ is_active: !b.is_active }).eq('id', b.id);
    if (error) setMsg(error.message); else load();
  };

  const del = async (b: any) => {
    if (!confirm('Ye banner delete karna hai?')) return;
    const { error } = await supabase.from('banners').delete().eq('id', b.id);
    if (error) return setMsg(error.message);
    await removeMedia(b.image_path);
    load();
  };

  return (
    <>
  <Card title={editing ? 'Edit Banner' : 'New Home Banner'}>
        <p className="text-xs text-gray-500 mb-4">
          As long as at least one banner is active here, the homepage slider will display these banners. If you hide or delete all banners, the website's original default banners will be displayed again
        </p>
        <form onSubmit={save} className="space-y-4">
          <Field label={editing ? 'New image (optional)' : 'Image *'} hint="Landscape images work best (e.g., 1920 × 800). Images are automatically compressed.">
            <input ref={fileRef} className={input} type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Heading"><input className={input} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></Field>
            <Field label="Sub-heading"><input className={input} value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} /></Field>
            <Field label="Motto / tagline"><input className={input} value={form.motto} onChange={(e) => setForm({ ...form, motto: e.target.value })} /></Field>
            <Field label="Order (1 = pehle)"><input className={input} type="number" min={1} value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value as any })} /></Field>
          </div>
          <div className="flex gap-2">
            <button className={btn} disabled={busy}>{busy && <Loader2 size={16} className="animate-spin" />}{editing ? 'Update' : 'Add banner'}</button>
            {editing && <button type="button" className={btnGhost} onClick={reset}>Cancel</button>}
          </div>
          <Msg text={msg} />
        </form>
      </Card>

      <Card title={`Banners (${rows.length})`}>
        {rows.length === 0 && <p className="text-sm text-gray-400">There are no banners at the moment. The website is displaying the default banners.</p>}
        <div className="grid sm:grid-cols-2 gap-4">
          {rows.map((b) => (
            <div key={b.id} className={`border rounded-xl overflow-hidden ${b.is_active ? 'border-gray-200' : 'border-orange-300 opacity-70'}`}>
              <img loading="lazy" src={b.image_url} alt={b.title} className="w-full aspect-[21/9] object-cover bg-gray-100" />
              <div className="p-3 space-y-2">
                <p className="text-sm font-bold text-gray-800 truncate">#{b.sort_order} · {b.title || '(no heading)'}</p>
                <div className="flex gap-2">
                  <button className={btnGhost} onClick={() => toggle(b)}>{b.is_active ? 'Hide' : 'Show'}</button>
                  <button className={btnGhost} onClick={() => edit(b)}>Edit</button>
                  <button className={btnDanger} onClick={() => del(b)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
