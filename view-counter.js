import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://fhxcizpcgopqomzlwmdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk";

const supabase = createClient(supabaseUrl, supabaseKey);

async function trackViewCount() {
  // Increment view count via RPC
  await supabase.rpc("increment_view_count");

  // Fetch updated count
  const { data, error } = await supabase
    .from("viewers")
    .select("count")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error fetching view count:", error);
    return;
  }
}

trackViewCount();
