import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rscmhdaieasjpjmbmnqq.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzY21oZGFpZWFzanBqbWJtbnFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MTczNjgsImV4cCI6MjA1NDM5MzM2OH0.1xK00kphHbOnf1CKDs-NcMQKoVTLZKhgBLotBjY9UOw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
