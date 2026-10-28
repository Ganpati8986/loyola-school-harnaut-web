import { useEffect, useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Bell, Image as ImageIcon, LayoutTemplate, UserSquare, LogOut, Loader2 } from 'lucide-react';
import { supabase, supabaseEnabled } from '../lib/supabase';
import { input, btn, Field, Msg } from './ui';
import NoticesTab from './NoticesTab';
import GalleryTab from './GalleryTab';
import BannersTab from './BannersTab';
import PhotosTab from './PhotosTab';

const TABS = [
  { id: 'notices', label: 'Notices', icon: Bell },
  { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  { id: 'banners', label: 'Home Banners', icon: LayoutTemplate },
  { id: 'photos', label: 'Principal & Faculty', icon: UserSquare },
] as const;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setMsg('Email or password is incorrect');
    setBusy(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-4">
        <h1 className="text-2xl font-bold text-[#003366] font-serif text-center">Admin Login</h1>
        <Field label="Email">
          <input className={input} type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="Password">
          <input className={input} type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field>
        <button className={`${btn} w-full`} disabled={busy}>
          {busy ? <Loader2 className="animate-spin" size={16} /> : 'Login'}
        </button>
        <Msg text={msg} />
      </form>
    </div>
  );
}

export default function AdminApp() {
  const [session, setSession] = useState<any>(undefined); // undefined = still loading
  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('notices');

  useEffect(() => {
    if (!supabaseEnabled) return;
    supabase.auth.getSession().then(({ data }: any) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e: any, s: any) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return setAllowed(null);
    supabase.rpc('is_admin').then(({ data, error }: any) => setAllowed(!error && data === true));
  }, [session?.user?.id]);

  const head = <Helmet><title>Admin</title><meta name="robots" content="noindex,nofollow" /></Helmet>;

  if (!supabaseEnabled)
    return <div className="p-10 text-center text-red-600">{head}Supabase env variables set nahi hain (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).</div>;
  if (session === undefined)
    return <div className="min-h-screen flex items-center justify-center">{head}<Loader2 className="animate-spin text-[#003366]" /></div>;
  if (!session) return <>{head}<Login /></>;
  if (allowed === null)
    return <div className="min-h-screen flex items-center justify-center">{head}<Loader2 className="animate-spin text-[#003366]" /></div>;
  if (!allowed)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
        {head}
        <p className="text-red-600 font-bold">Is account ko admin access nahi hai.</p>
        <button className={btn} onClick={() => supabase.auth.signOut()}>Logout</button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {head}
      <header className="bg-[#003366] text-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-serif font-bold text-lg">Website Admin</h1>
            <p className="text-xs text-white/60">{session.user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#FFD700] hover:underline">View site</a>
            <button onClick={() => supabase.auth.signOut()} className="flex items-center gap-1 text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
        <nav className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-t-lg whitespace-nowrap ${
                tab === id ? 'bg-gray-50 text-[#003366]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </nav>
      </header>
      <main className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">
        {tab === 'notices' && <NoticesTab />}
        {tab === 'gallery' && <GalleryTab />}
        {tab === 'banners' && <BannersTab />}
        {tab === 'photos' && <PhotosTab />}
      </main>
    </div>
  );
}
