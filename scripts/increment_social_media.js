import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://fhxcizpcgopqomzlwmdl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk'
);

// Attach event listeners after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll('a[data-platform]');

  socialLinks.forEach(link => {
    link.addEventListener('click', async () => {
      const platform = link.getAttribute('data-platform');

      if (!platform) return;

      const { error } = await supabase.rpc("increment_social_count", {
        _platform: platform
      });

      if (error) {
        console.error(`Failed to increment count for ${platform}:`, error.message);
      } else {
        console.log(`Count incremented for ${platform}`);
      }
    });
  });
});
