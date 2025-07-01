// scripts/load-projects.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  'https://fhxcizpcgopqomzlwmdl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoeGNpenBjZ29wcW9temx3bWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODEwOTksImV4cCI6MjA2NTc1NzA5OX0.IreRdrOuw4zwSrol1mln_44JK6scXwC1qbvrX8mUTVk'
);
const renderProjects = async () => {
  const { data: projects, error } = await supabase.rpc('get_all_projects');
  if (error) {
    console.error('Failed to load projects:', error);
    return;
  }

  const container = document.querySelector('#projects .container');

  projects.forEach((project, i) => {
    const article = document.createElement('article');
    article.className = 'project';

    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'project-images';
    (project.images || []).forEach((img, index) => {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      imgEl.alt = `${project.project_name} Screenshot ${index + 1}`;
      imagesDiv.appendChild(imgEl);
    });

    const infoDiv = document.createElement('div');
    infoDiv.className = 'project-info';

    const title = document.createElement('h3');
    title.textContent = project.project_name;
    infoDiv.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = project.project_brief;
    infoDiv.appendChild(desc);

    const tools = document.createElement('p');
    tools.className = 'project-tools';
    tools.textContent = 'Tools: Figma';
    infoDiv.appendChild(tools);

    if (project.project_link) {
      const anchor = document.createElement('a');
      anchor.href = project.project_link;
      anchor.target = '_blank';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'project-btn';
      button.id = `demo-project-${i + 1}`;
      button.textContent = 'View Project';

      anchor.appendChild(button);
      infoDiv.appendChild(anchor);
    }

    article.appendChild(imagesDiv);
    article.appendChild(infoDiv);
    container.appendChild(article);
  });
};

renderProjects();
