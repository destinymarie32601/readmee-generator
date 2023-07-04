// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `* [License](#license)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `##License\n\nThis application is covered under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ##Description
  ${data.description}

  ##Usage
  ${data.usage}

  ##Installation
  ${data.installation}

  ##Contributions
  ${data.contributions}

  ##Test
  ${data.test}

  
  ${renderLicenseSection(data.license)}

  ##Contact
  GitHub: (https://github.com/${data.github})
  
  ##Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
