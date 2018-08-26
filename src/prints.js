const chalk = require('chalk')

const printHeader = () => {
  console.log(chalk.blue('\n      ########################################'))
  console.log(chalk.yellow('              AWS EC2 Encryption Check'))
  console.log(chalk.blue('      ########################################'))
  console.log(chalk.yellow('\n               Scanning Instances'))
}

const printFooter = () => {
  console.log(chalk.blue('\n      ########################################'))
}

module.exports = { printFooter, printHeader }
