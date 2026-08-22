import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nntpmfpvywmvxgdjxwhv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5udHBtZnB2eXdtdnhnZGp4d2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzODkyMTksImV4cCI6MjA5ODk2NTIxOX0.ClRY10gkOJ-HJ-ioFYdh-4W850TqHzpAdqCiYzWTBBI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
