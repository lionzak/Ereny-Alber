// Replace with your GA Measurement ID
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-DHYEY60G3M'); // your GA4 ID

document.getElementById('whatsapp-icon-1')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'social',
    event_label: 'Twitter'
  });
});
document.getElementById('facebook-icon-1')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'social',
    event_label: 'Twitter'
  });
});

document.getElementById('linkedin-icon-1')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'social',
    event_label: 'GitHub'
  });
});
document.getElementById('facebook-icon-2')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'social',
    event_label: 'Twitter'
  });
});

document.getElementById('linkedin-icon-2')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'social',
    event_label: 'GitHub'
  });
});

//-------------------------------------------

document.getElementById('demo-project-1')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'project_demo',
    event_label: 'Project 1 Demo'
  });
});

document.getElementById('demo-project-2')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'project_demo',
    event_label: 'Project 2 Demo'
  });
});

document.getElementById('demo-project-3')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'project_demo',
    event_label: 'Project 3 Demo'
  });
});

document.getElementById('demo-project-4')?.addEventListener('click', () => {
  gtag('event', 'click', {
    event_category: 'project_demo',
    event_label: 'Project 4 Demo'
  });
});
