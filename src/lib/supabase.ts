import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// If env vars are missing the public site keeps working with its built-in
// (static) content; only /admin is unavailable.
export const supabaseEnabled = Boolean(url && key);
export const supabase: any = supabaseEnabled ? createClient(url!, key!) : null;
export const BUCKET = 'site-media';
