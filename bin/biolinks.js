#!/usr/bin/env node
import fetch from 'node-fetch';
import chalk from 'chalk';
import boxen from 'boxen';
// const chalk = require('chalk');
// const boxen = require('boxen');

import fs  from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    textAlignment: 'center',
};

try {
    const result = fs.readFileSync(path.resolve(__dirname, `../info.json`));
    const infoData = JSON.parse(result);
  
    const {
      first_name,
      last_name,
      location,
      bio,
      job_title,
      github_link,
      linkedin_link,
      e_link,
    } = infoData;

    const styledData = {
        firstName: chalk.magenta.bold(first_name),
        lastName: chalk.magenta.bold(last_name),

        // labelWork: chalk.white.bold('Work:'),
        work: chalk.yellow.bold(job_title),

        textLocation: chalk.white.italic(location),

        // labelBio: chalk.white.bold('Bio:'),
        textBio: chalk.white.italic(bio),


        labelGitHub: chalk.white.bold('GitHub:'),
        gitHub: chalk.cyan(github_link),

        labelLinkedIn: chalk.white.bold('LinkedIn:'),
        linkedIn: chalk.cyan(linkedin_link),

        labelMail: chalk.white.bold('Email:'),
        mail: chalk.cyan(e_link),

        labelCard: chalk.white.bold('Card:'),
        npxCard: chalk.magenta.bold('npx juliebidard'),

    };


    const newline = '\n';
      
    const output =
      newline +
      `${styledData.firstName} ${styledData.lastName}` +
      newline +
      newline +
      `${styledData.work}` +
      newline +
      newline +
      `${styledData.textLocation}` +
      newline +
      `${styledData.textBio}` +
      newline +
      newline +
      `${styledData.labelGitHub}  ${styledData.gitHub}` +
      newline +
      `${styledData.labelLinkedIn}  ${styledData.linkedIn}` +
      newline +
      `${styledData.labelMail}  ${styledData.mail}` +
      newline +
      `${styledData.labelCard}  ${styledData.npxCard} `;

      console.log(chalk.magenta(boxen(output, options)));
} catch (err) {
    console.log(chalk.bgRed.bold('Cannot read data.json file!'));
    console.log(chalk.italic(err.message));
    console.log(fetch)
}