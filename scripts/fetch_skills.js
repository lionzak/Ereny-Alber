import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://fhxcizpcgopqomzlwmdl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk"
);
async function loadSkills() {
  const { data, error } = await supabase.rpc("get_skills");

  if (error) {
    console.error("❌ Error fetching skills:", error.message);
    return;
  }

  const skillsGrid = document.querySelector(".skills-grid");

  if (!skillsGrid || !data) return;

  // Clear old content
  skillsGrid.innerHTML = "";

  // Dynamically create and append skill cards
  data.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";

    const img = document.createElement("img");
    img.src = skill.skill_image;
    img.alt = skill.skill_name;

    const p = document.createElement("p");
    p.textContent = skill.skill_name;

    skillDiv.appendChild(img);
    skillDiv.appendChild(p);
    skillsGrid.appendChild(skillDiv);
  });
}

document.addEventListener("DOMContentLoaded", loadSkills);
