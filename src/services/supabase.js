import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ylvhaxulvgqayjcxvveg.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsdmhheHVsdmdxYXlqY3h2dmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMjI0ODYsImV4cCI6MjAzNDc5ODQ4Nn0.U22p1GELqtbNBJNoBVgqJ1zh1dbKJeQkkzH1p0Ycs5M";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
