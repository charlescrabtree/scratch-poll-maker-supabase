const SUPABASE_URL = 'https://hxnmyoamqkyeaybcgtum.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4bm15b2FtcWt5ZWF5YmNndHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzgzNzEsImV4cCI6MTk3NTIxNDM3MX0.M74QbOVkzdaVOrVsLNfuxBZhMbtfI4HGVFx138-KZqI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createNewPoll(data) {
    const resp = await client
        .from('polls')
        .insert(data);
    
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}

export async function getPolls() {
    const resp = await client
        .from('polls')
        .select('*');
    if (resp.error) {
        throw new Error(resp.error.message);
    }
    return resp.data;
}