import { useEffect, useRef, useState, type FormEvent } from 'react';
import { FileText, Image as ImageIcon, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { uploadMedia, removeMedia, kb } from '../lib/storage';
import { Card, Field, Msg, input, btn, btnGhost, btnDanger } from './ui';

const EMPTY = { title: '', description: '', notice_type: 'NORMAL' };
const TYPES = [['NORMAL', 'Normal'], ['IMPORTANT', 'Important'], ['REMINDER', 'Reminder']];

export default function NoticesTab() {
  const [rows, setRows] = useState<any[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [file, setFile] = useState<File | null>(null);
  const [editing, setEditing] = useState<any | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const { data, error } = await supabase.from('notices').select('*').order('created_at', { ascending: false });
    if (error) setMsg(error.message);
    else setRows(data || []);
  };
  useEffect(() => { load(); }, []);

  const reset = () => {
    setForm(EMPTY); setFile(null); setEditing(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const save = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true); setMsg('');
    try {
      let patch: any = { ...form, title: form.title.trim() };
      let info = '';
      if (file) {
        const up = await uploadMedia('notices', file, { maxDim: 1600 });
        patch = { ...patch, file_url: up.url, file_path: up.path, file_mime: up.type };
        info = ` (${kb(up.before)} → ${kb(up.after)})`;
      }
      if (editing) {
        const { error } = await supabase.from('notices').update(patch).eq('id', editing.id);
        if (error) throw error;
        if (file) await removeMedia(editing.file_path);
      } else {
        const { error } = await supabase.from('notices').insert(patch);
        if (error) throw error;
      }
      reset(); await load(); setMsg(`✔ Saved${info}`);
    } catch (err: any) {
      setMsg(err.message || 'Save nahi hua');
    } finally { setBusy(false); }
  };

  const edit = (n: any) => {
    setEditing(n);
    setForm({ title: n.title, description: n.description || '', notice_type: n.notice_type });
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggle = async (n: any) => {
    const { error } = await supabase.from('notices').update({ is_active: !n.is_active }).eq('id', n.id);
    if (error) setMsg(error.message); else load();
  };

  const del = async (n: any) => {
    if (!confirm(`"${n.title}" delete karna hai?`)) return;
    const { error } = await supabase.from('notices').delete().eq('id', n.id);
    if (error) return setMsg(error.message);
    await removeMedia(n.file_path);
    load();
  };

  return (
    <>
      <Card title={editing ? 'Notice edit karein' : 'New notice'}>
        <form onSubmit={save} className="space-y-4">
          <Field label="Title *">
            <input className={input} required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>
          <Field label="Description (optional)">
            <textarea className={input} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Type">
              <select className={input} value={form.notice_type} onChange={(e) => setForm({ ...form, notice_type: e.target.value })}>
                {TYPES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </Field>
            <Field label="PDF or Image (optional)" hint={editing ? 'If you upload a new file, it will replace the existing one. Images are automatically compressed. PDFs must be under 5 MB.': 'Images are automatically compressed. PDFs must be under 5 MB.'}>
              <input ref={fileRef} className={input} type="file" accept="application/pdf,image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </Field>
          </div>
          <div className="flex gap-2">
            <button className={btn} disabled={busy}>{busy && <Loader2 size={16} className="animate-spin" />}{editing ? 'Update' : 'Publish'}</button>
            {editing && <button type="button" className={btnGhost} onClick={reset}>Cancel</button>}
          </div>
          <Msg text={msg} />
        </form>
      </Card>

      <Card title={`All notices (${rows.length})`}>
        {rows.length === 0 && <p className="text-sm text-gray-400">No notices at the moment.</p>}
        <ul className="divide-y divide-gray-100">
          {rows.map((n) => (
            <li key={n.id} className="py-3 flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="font-bold text-sm text-gray-800 break-words">{n.title}</p>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-2 flex-wrap">
                  {new Date(n.created_at).toLocaleDateString('en-GB')} · {n.notice_type}
                  {n.file_url && (
                    <a href={n.file_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#003366] hover:underline">
                      {n.file_mime?.includes('pdf') ? <FileText size={12} /> : <ImageIcon size={12} />} file
                    </a>
                  )}
                  {!n.is_active && <span className="text-orange-500 font-bold">HIDDEN</span>}
                </p>
              </div>
              <div className="flex gap-2">
                <button className={btnGhost} onClick={() => toggle(n)}>{n.is_active ? 'Hide' : 'Show'}</button>
                <button className={btnGhost} onClick={() => edit(n)}>Edit</button>
                <button className={btnDanger} onClick={() => del(n)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
