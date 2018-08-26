const { exec } = require('child_process')
const chalk = require('chalk')

const { printFooter, printHeader } = require('./prints')
const { allRegions } = require('./regions')

/**
 * Prints the information for each volume in a region.
 * @param {string} region
 * @param {bool} userInput
 */
const getInstances = (region, regionEntered) => {
  let cmd = `aws ec2 describe-volumes --no-paginate --output json`

  if (region) cmd += ` --region ${region}`

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(stderr)
    } else {
      const data = JSON.parse(stdout).Volumes

      if (data.length != 0) {
        for (let index = 0; index < data.length; index++) {
          printVolumeData(data[index])
        }
        printFooter()
      } else if (regionEntered) {
        console.log(`\n          ${chalk.red(`no instances found in ${region}`)}\n`)
      }
    }
  })
}

/**
 * Prints the information for a passed in volume.
 * @param {object} volume
 */
const printVolumeData = volume => {
  console.log(`\n      Volume ID: ${volume.VolumeId}`)
  console.log(`      Availability Zone: ${volume.AvailabilityZone}`)
  printTags(volume.Tags)
  console.log(`      State: ${volume.State}`)

  const encrypted = volume.Encrypted ? chalk.green('True') : chalk.red('False!')
  console.log(`      ${chalk.blue('Encrypted')}: ${encrypted}`)
}

/**
 * Iterates through the tags array and prints the key and value.
 * @param {array} tags
 */
const printTags = tags => {
  if (tags.length && tags.length > 0) {
    for (let index = 0; index < tags.length; index++) {
      const tag = tags[index]
      console.log(`      ${tag.Key}: ${tag.Value}`)
    }
  }
}

/**
 * Takes in the commanderjs instance and starts the tool.
 * @param {object} program
 */
const startTool = program => {
  const regionEntered = program.region && program.args.length > 0
  const region = regionEntered ? program.args[0] : allRegions

  printHeader()
  if (regionEntered) {
    getInstances(region, true)
  } else {
    for (let index = 0; index < allRegions.length; index++) {
      getInstances(allRegions[index].RegionName, false)
    }
  }
}

module.exports = { startTool }
