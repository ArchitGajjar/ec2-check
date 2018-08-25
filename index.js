#! /usr/bin/env node

const { exec } = require('child_process')
const chalk = require('chalk')

const getInstances = () => {
  const cmd = `aws ec2 describe-volumes --no-paginate --output json`
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr)
    } else {
      const data = JSON.parse(stdout).Volumes

      for (let index = 0; index < data.length; index++) {
        const element = data[index]

        console.log(`\n      Volume ID: ${element.VolumeId}`)
        console.log(`      State: ${element.State}`)

        if (element.Tags.length && element.Tags.length > 0) {
          for (let index = 0; index < element.Tags.length; index++) {
            const tag = element.Tags[index]
            console.log(`      ${tag.Key}: ${tag.Value}`)
          }
        }

        const encrypted = element.Encrypted
          ? chalk.green('True')
          : chalk.red('False!')
        console.log(`      ${chalk.blue('Encrypted')}: ${encrypted}`)
      }
    }
    printFooter()
  })
}

const printHeader = () => {
  console.log(chalk.blue('\n      ########################################'))
  console.log(chalk.yellow('              AWS EC2 Encryption Check'))
  console.log(chalk.blue('      ########################################'))
  console.log(chalk.yellow('\n               Scanning Instances'))
}

const printFooter = () => {
    console.log(chalk.blue('\n      ########################################'))
}

printHeader()
getInstances()
