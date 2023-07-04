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
  let markdown = `# ${data.title}\n\n`;      

  markdown += ` ${renderLicenseBadge(data.license)}\n\n`;

  markdown += `\n##Description\n\n`;
  markdown += `${data.description}\n\n`;

  markdown += ` #Table of Contents\n\n`;
  markdown += `* [Description](#description)\n`;
  markdown += `* [Usage](#usage)\n`;
  markdown += `* [Installation](#installation)\n`;
  markdown += `* [Contributions](#contributions)\n`;
  markdown += `* [Test](#test)\n`;
  markdown += `* [Questions](#questions)\n`;
  markdown += `* [Email](#email)\n\n`;

  markdown += `\n##Usage\n\n`;
  markdown += ` ${data.usage}\n\n`;

  markdown += `\n##Installation\n\n`
  markdown += ` ${data.installation}\n\n`

  markdown += `\n##Contributions\n\n`;
  markdown += `${data.contributions}\n\n`;

  markdown += `\n##Test\n\n`;
  markdown += `${data.test}\n\n`;

  
  markdown += `${renderLicenseSection(data.license)}\n\n`;

  markdown += `\n##Questions\n\n`;
  markdown += `GitHub: (https://github.com/${data.github})\n\n`;
  
  markdown += `\n##Email\n\n`;
  markdown += `${data.email}\n`;

  return markdown;

}

module.exports = generateMarkdown;
