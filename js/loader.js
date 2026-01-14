// Section loader for modular structure
(function() {
  'use strict';

  const sections = [
    'sections/about.html',
    'sections/growth-journey.html',
    'sections/work-experience.html',
    'sections/development-standards.html',
    'sections/scalability-stability.html',
    'sections/personality-style.html',
    'sections/team-growth.html',
    'sections/education-experience.html',
    'sections/skills.html',
    'sections/projects.html'
  ];

  const mainContent = document.querySelector('.main-content');

  async function loadSection(sectionPath) {
    try {
      const response = await fetch(sectionPath);
      if (!response.ok) {
        throw new Error(`Failed to load ${sectionPath}`);
      }
      let html = await response.text();
      
      // Fix image paths in HTML before parsing
      // Ensure all asset paths are absolute (starting with /)
      html = html.replace(/src="assets\//g, 'src="/assets/');
      html = html.replace(/src='assets\//g, "src='/assets/");
      html = html.replace(/src="\.\.\/assets\//g, 'src="/assets/');
      html = html.replace(/src='\.\.\/assets\//g, "src='/assets/");
      
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const section = tempDiv.querySelector('section');
      if (section) {
        mainContent.appendChild(section);
      } else {
        console.warn(`No section found in ${sectionPath}`);
      }
    } catch (error) {
      console.error(`Error loading section ${sectionPath}:`, error);
      // Show error message in UI
      const errorDiv = document.createElement('div');
      errorDiv.className = 'section-card';
      errorDiv.innerHTML = `
        <div class="card-header">
          <h2>Error Loading Section</h2>
        </div>
        <div class="card-content">
          <p>Failed to load: ${sectionPath}</p>
          <p>Error: ${error.message}</p>
        </div>
      `;
      mainContent.appendChild(errorDiv);
    }
  }

  async function loadAllSections() {
    for (const section of sections) {
      await loadSection(section);
    }
  }

  // Load sections when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllSections);
  } else {
    loadAllSections();
  }
})();
