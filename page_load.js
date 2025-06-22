import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://fhxcizpcgopqomzlwmdl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const start = performance.now();

window.addEventListener("load", async () => {
  const end = performance.now();
  const loadTime = Math.round(end - start);
  console.log(`Page load time: ${loadTime} ms`);

  // Generate or reuse a session ID
  let sessionId = localStorage.getItem("session_id");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("session_id", sessionId);
  }

  // Insert directly into Supabase
  const { error } = await supabase.from("page_load").insert([
    {
      session_id: sessionId,
      time_ms: loadTime,
    },
  ]);

  if (error) {
    console.error("Error inserting page load time:", error.message);
  } else {
    console.log("Page load time saved to Supabase.");
  }
});
