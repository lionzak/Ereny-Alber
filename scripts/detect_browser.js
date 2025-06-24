import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


const supabaseUrl = "https://fhxcizpcgopqomzlwmdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk";


const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

function detectBrowser() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    return "Chrome";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    return "Safari";
  } else if (userAgent.includes("Edg")) {
    return "Edge";
  } else {
    return "Unknown";
  }
}

const browser = detectBrowser();

async function trackBrowserVisit() {
  const { error } = await supabase.rpc("increment_browser_count", {
    browser_name: browser,
  });

  if (error) {
    console.error("Browser tracking failed:", error.message);
  } 
}

trackBrowserVisit();    