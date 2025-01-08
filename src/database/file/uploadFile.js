import { supabase } from '../supabase/supabase.init'

export async function uploadFileToDB(path, file) {
  const { data, error } = await supabase.storage.from('blog').upload(path, file)

  if (data) {
    return {
      ok: true,
      data,
    }
  }

  return {
    ok: false,
    error,
  }
}
