import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://fhxcizpcgopqomzlwmdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk";

const supabase = createClient(supabaseUrl, supabaseKey);

window.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supabase.rpc("get_social_media");

  if (error) {
    console.error("RPC Error:", error);
    return;
  }

  data.forEach(({ platform, link }) => {
    const anchors = document.querySelectorAll(
      `a[data-platform="${platform.toLowerCase()}"]`
    );
    console.log(`Found ${anchors.length} anchor(s) for ${platform}`);

    anchors.forEach((a) => {
      console.log(`Updating ${platform} link: ${link}`);
      a.href = link;
    });
  });
});
