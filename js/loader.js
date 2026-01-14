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
      const html = await response.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const section = tempDiv.querySelector('section');
      if (section) {
        mainContent.appendChild(section);
      }
    } catch (error) {
      console.error(`Error loading section ${sectionPath}:`, error);
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
