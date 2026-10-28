import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { uploadMedia, removeMedia, kb } from '../lib/storage';
import { Card, Field, Msg, input, btn, btnGhost, btnDanger } from './ui';

// const SLOTS = [
//   { slot: 'principal', title: "Principal ki photo (Home: Principal's Message)", hint: 'Portrait photo best rehti hai (4:5).', multiple: false, maxDim: 1200 },
//   { slot: 'vice_principal', title: 'Vice Principal ki photo (Home: Vice Principal tab)', hint: 'Portrait photo best rehti hai (4:5).', multiple: false, maxDim: 1200 },
//   { slot: 'faculty', title: 'Diverse Faculty photos (Home: faculty slider)', hint: 'Landscape photos (4:3). Kai photos ek saath add kar sakte ho, slider me ghoomti rahengi.', multiple: true, maxDim: 1600 },
// ];

const SLOTS = [
  {
    slot: 'principal',
    title: "Principal's Photo (Home: Principal's Message)",
    hint: 'Portrait photos work best (4:5).',
    multiple: false,
    maxDim: 1200,
  },
  {
    slot: 'vice_principal',
    title: "Vice Principal's Photo (Home: Vice Principal Tab)",
    hint: 'Portrait photos work best (4:5).',
    multiple: false,
    maxDim: 1200,
  },
  {
    slot: 'faculty',
    title: 'Faculty Photos (Home: Faculty Slider)',
    hint: 'Landscape photos work best (4:3). You can add multiple photos at once, and they will rotate in the slider.',
    multiple: true,
    maxDim: 1600,
  },
];
function SlotCard({ slot, title, hint, multiple, maxDim }: (typeof SLOTS)[number]) {
  const [rows, setRows] = useState<any[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState('');
  const [msg, setMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const { data, error } = await supabase.from('site_images').select('*').eq('slot', slot).order('sort_order').order('created_at');
    if (error) setMsg(error.message); else setRows(data || []);
  };
  useEffect(() => { load(); }, []);

  const remove = async (r: any) => {
    const { error } = await supabase.from('site_images').delete().eq('id', r.id);
    if (error) throw error;
    await removeMedia(r.image_path);
  };

  const upload = async () => {
    if (!files.length) return setMsg('Pehle photo chuniye.');
    setMsg('');
    try {
      const old = rows;
      let before = 0, after = 0;
      const list = multiple ? files : files.slice(0, 1);
      for (let i = 0; i < list.length; i++) {
        setBusy(`Uploading ${i + 1}/${list.length}…`);
        const up = await uploadMedia('site', list[i], { maxDim, quality: 0.85 });
        before += up.before; after += up.after;
        const { error } = await supabase.from('site_images').insert({ slot, image_url: up.url, image_path: up.path });
        if (error) { await removeMedia(up.path); throw error; }
      }
      if (!multiple) for (const r of old) await remove(r); // single spot: new photo replaces the old one
      setFiles([]);
      if (fileRef.current) fileRef.current.value = '';
      await load();
      setMsg(`✔ Done (${kb(before)} → ${kb(after)})`);
    } catch (e: any) {
      setMsg(e.message || 'Upload fail hua');
    } finally { setBusy(''); }
  };

  const del = async (r: any) => {
    if (!confirm('Ye photo hatani hai?')) return;
    try { await remove(r); await load(); } catch (e: any) { setMsg(e.message); }
  };

  return (
    <Card title={title}>
      <p className="text-xs text-gray-500 mb-4">{hint} If no photo is added here, the website's existing default photo will be displayed.</p>
      <div className="flex flex-wrap gap-3 mb-4">
        {rows.map((r) => (
          <div key={r.id} className="w-32 border border-gray-200 rounded-xl overflow-hidden">
            <img loading="lazy" src={r.image_url} alt="" className="w-full aspect-[4/5] object-cover bg-gray-100" />
            <div className="p-2"><button className={`${btnDanger} w-full`} onClick={() => del(r)}>{multiple ? 'Delete' : 'Default pe wapas'}</button></div>
          </div>
        ))}
        {rows.length === 0 && <p className="text-sm text-gray-400">Abhi default photo use ho rahi hai.</p>}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <input ref={fileRef} className={`${input} max-w-sm`} type="file" accept="image/*" multiple={multiple} onChange={(e) => setFiles(Array.from(e.target.files || []))} />
        <button className={btn} disabled={!!busy} onClick={upload}>
          {busy && <Loader2 size={16} className="animate-spin" />}{busy || (multiple ? 'Add Images' : rows.length ? 'Change Image' : 'Add Images')}
        </button>
      </div>
      <Msg text={msg} />
    </Card>
  );
}

function TextCard({ k, title }: { k: string; title: string }) {
  const [f, setF] = useState({ name: '', role: '', quote: '', paragraphs: '' });
  const [has, setHas] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    supabase.from('site_text').select('*').eq('key', k).maybeSingle().then(({ data }: any) => {
      if (!data) return;
      setHas(true);
      const d = data.data || {};
      setF({ name: d.name || '', role: d.role || '', quote: d.quote || '', paragraphs: (d.paragraphs || []).join('\n\n') });
    });
  }, []);

  const save = async () => {
    setBusy(true); setMsg('');
    const paragraphs = f.paragraphs.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    const { error } = await supabase.from('site_text').upsert({
      key: k, data: { name: f.name.trim(), role: f.role.trim(), quote: f.quote.trim(), paragraphs }, updated_at: new Date().toISOString(),
    });
    setBusy(false);
    if (error) setMsg(error.message); else { setHas(true); setMsg('✔ Saved'); }
  };

  const reset = async () => {
    if (!confirm('Purana (default) text wapas lagana hai?')) return;
    const { error } = await supabase.from('site_text').delete().eq('key', k);
    if (error) return setMsg(error.message);
    setF({ name: '', role: '', quote: '', paragraphs: '' }); setHas(false); setMsg('✔ Default text wapas aa gaya');
  };

  return (
    <Card title={title}>
      <p className="text-xs text-gray-500 mb-4">Any field left blank will retain its existing text on the website.</p>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Name"><input className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></Field>
          <Field label="Designation"><input className={input} value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })} /></Field>
        </div>
        <Field label="Quote (bada highlight text)"><textarea className={input} rows={3} value={f.quote} onChange={(e) => setF({ ...f, quote: e.target.value })} /></Field>
        <Field label="Message paragraphs" hint="Leave one blank line between each paragraph.">
          <textarea className={input} rows={7} value={f.paragraphs} onChange={(e) => setF({ ...f, paragraphs: e.target.value })} />
        </Field>
        <div className="flex gap-2">
          <button className={btn} disabled={busy} onClick={save}>{busy && <Loader2 size={16} className="animate-spin" />}Save</button>
          {has && <button className={btnGhost} onClick={reset}>Default Text</button>}
        </div>
        <Msg text={msg} />
      </div>
    </Card>
  );
}

export default function PhotosTab() {
  const photo = (slot: string) => <SlotCard {...SLOTS.find((s) => s.slot === slot)!} />;
  return (
    <>
      <div>{photo('principal')}</div>
      <div><TextCard k="principal" title="Principal's Name and Message" /></div>
      <div>{photo('vice_principal')}</div>
      <div><TextCard k="vice_principal" title="Vice Principal's Name and Message" /></div>
      <div>{photo('faculty')}</div>
    </>
  );
}
