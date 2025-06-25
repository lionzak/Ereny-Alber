import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://fhxcizpcgopqomzlwmdl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk";

const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = crypto.randomUUID();
const milestones = [25, 50, 75, 100];
let maxScroll = 0;
let highestMilestone = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (docHeight <= 0) return; // prevent divide-by-zero

  const scrollPercent = Math.round((scrollTop / docHeight) * 100);
  if (scrollPercent > maxScroll) {
    maxScroll = scrollPercent;

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && milestone > highestMilestone) {
        highestMilestone = milestone;
        console.log(`Reached milestone: ${highestMilestone}%`);
      }
    }
  }
});

window.addEventListener("beforeunload", async () => {
  if (highestMilestone === 0) return; // don't insert if nothing was reached

  const { error } = await supabase
    .from("scroll_depth")
    .insert([
      {
        session_id: sessionId,
        scroll_percentage: highestMilestone,
      },
    ]);

  if (error) {
    console.error("Supabase insert error:", error.message);
  } else {
    console.log(`✅ Final milestone (${highestMilestone}%) saved`);
  }
});
