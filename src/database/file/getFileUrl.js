import { supabase } from '../supabase/supabase.init'

export async function getFileUrlFromDB(path, bucketName = 'blog') {
  const { data } = supabase.storage.from(bucketName).getPublicUrl(path)
  return { ok: true, url: data.publicUrl || '' }
}
