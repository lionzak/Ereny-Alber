import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://fhxcizpcgopqomzlwmdl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk"
);

// When page loads - start timing and create session
const sessionId = crypto.randomUUID();
const startTime = Date.now();

console.log("Page loaded at:", new Date(startTime));

// Create initial session record
await supabase.from("sessions").insert({
  session_id: sessionId,
  start_time: new Date(startTime).toISOString(),
  duration_seconds: 0
});

// When page closes - update session with final duration
window.addEventListener("beforeunload", () => {
  const endTime = Date.now();
  const duration = Math.floor((endTime - startTime) / 1000); // Duration in seconds
  
  console.log("Page closing at:", new Date(endTime));
  console.log("Total duration:", duration, "seconds");
  
  // Update existing session using RPC
  fetch(`https://fhxcizpcgopqomzlwmdl.supabase.co/rest/v1/rpc/update_session_duration`, {
    method: "POST",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _session_id: sessionId,
      _duration_seconds: duration
    }),
    keepalive: true // Ensures request completes even after page closes
  });
});