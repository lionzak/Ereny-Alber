import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://fhxcizpcgopqomzlwmdl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk"
);

async function loadPersonalInfo() {
  // Get the public URL for the fixed image name
  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl("profile_picture");

  const imageUrl = publicUrlData.publicUrl;

  // Optionally fetch the rest of the personal info (brief, about, etc.)
  const { data, error } = await supabase.rpc("get_personal_info");

  if (error) {
    console.error("Error fetching personal info:", error.message);
    return;
  }

  if (!data || data.length === 0) {
    console.warn("No personal info found.");
    return;
  }

  const { brief, about, effect_color } = data[0];

  const briefEl = document.querySelector(".hero-description");
  const aboutEl = document.querySelector(".about-text");
  const imageEl = document.getElementById("personal-image");

  if (briefEl) briefEl.textContent = brief;

  if (aboutEl) {
    const processedAbout = about.replace(/<([^<>]+)>/g, "<span>$1</span>");
    aboutEl.innerHTML = processedAbout;
    if (effect_color) {
      aboutEl.querySelectorAll("span").forEach((span) => {
        span.style.color = effect_color;
      });
    }
  }

  if (imageEl && imageUrl) {
    imageEl.src = imageUrl;
  }
}

document.addEventListener("DOMContentLoaded", loadPersonalInfo);