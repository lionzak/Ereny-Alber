import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://fhxcizpcgopqomzlwmdl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Determine device type based on screen width
function getDeviceType() {
  const width = window.innerWidth;

  if (width <= 768) return 'Mobile';
  if (width <= 1024) return 'Tablet';
  return 'Desktop';
}

async function trackDeviceView() {
  const deviceType = getDeviceType();

  const { error } = await supabase.rpc('increment_device_count', {
    d_type: deviceType,
  });

  if (error) {
    console.error("Failed to track device:", error.message);
  } 
}

// Call it once when page loads
trackDeviceView();
