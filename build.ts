import * as chalk from 'chalk'
import * as boxen from 'boxen'
import * as fs from 'fs'
import * as path from 'path'

// Text + chalk definitions
const data = {
  name: chalk.bold(chalk.whiteBright('           Sebastian Doell')),
  handle: chalk.bold(chalk.whiteBright('katallaxie')),
  work: chalk.white('Solutions Architect at AWS'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('katallaxie'),
  github: chalk.gray('https://github.com/') + chalk.green('katallaxie'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('katallaxie'),
  web: chalk.cyan('https://katallaxie.me'),
  npx:
    chalk.red('npx') +
    ' ' +
    chalk.white('@katallaxie/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Preformating strings
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Putting it into a variable that we can easily use for boxen
const output = `
${heading}
   
${working}

${twittering}
${githubing}
${linkedining}
${webing}

${carding}
`

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.yellow(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: boxen.BorderStyle.Single
    })
  )
)
