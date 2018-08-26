#! /usr/bin/env node

/***
 * This file serves as the entry point for the cli tool.require
 * Flags and options are handles using commanderjs.
 */

const program = require('commander')
const { startTool } = require('./src/volumes')

program
  .version('0.0.2')
  .description('A tool to check whether your AWS EC2 instances are encrypted.')
  .option('-r, --region', 'Specify a particular region to lookup.')
  .parse(process.argv)

startTool(program)
