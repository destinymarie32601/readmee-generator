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

const licenseUrls = {
  'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0.html',
  'MIT': 'https://mit-license.org/',
  'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  'BSD 3-Clause': 'https://opensource.org/license/BSD-3-clause/',
  'Boost 1.0': 'https://www.boost.org/users/license.html#:~:text=Boost%20Software%20License%20-%20Version%201.0%20-%20August,object%20code%20generated%20by%20a%20source%20language%20processor.',
  'MPL 3.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/'
};

const licenseUrl = licenseUrls[license];

return `* [License](${licenseUrl})\n`;

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { //function to create license if specified by user
  if (license === 'None') {
    return '';
  }
  return `\n## License\n\nThis application is covered under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {       //generate the markdown data
  let markdown = `# ${data.title}\n\n`;       //title

  markdown += ` ${renderLicenseBadge(data.license)}\n\n`; //license badge

  markdown += `\n## Description\n\n`; //description
  markdown += `${data.description}\n\n`; //data that user typed in

  markdown += ` ## Table of Contents\n\n`; //generate table of contents
  markdown += `* [Description](#description)\n`;
  markdown += `* [Usage](#usage)\n`;
  markdown += `* [Installation](#installation)\n`;
  markdown += `* [Contributions](#contributions)\n`;
  markdown += `* [Test](#test)\n`;
  markdown += `* [Questions](#questions)\n`;
  markdown += `* [Email](#email)\n\n`;

  markdown += `\n## Usage\n\n`; //usage information
  markdown += ` ${data.usage}\n\n`;

  markdown += `\n## Installation\n\n` //installation
  markdown += ` ${data.installation}\n\n`

  markdown += `\n## Contributions\n\n`;
  markdown += `${data.contributions}\n\n`;

  markdown += `\n## Test\n\n`;
  markdown += `${data.test}\n\n`;

  
  markdown += `${renderLicenseSection(data.license)}\n\n`; //renders license if any
  markdown += `${renderLicenseLink(data.license)}\n\n`;

  markdown += `\n## Questions\n\n`;
  markdown += `GitHub: (https://github.com/${data.github})\n\n`;
  
  markdown += `\n## Email\n\n`;
  markdown += `${data.email}\n`;

  return markdown;

}

module.exports = generateMarkdown;
