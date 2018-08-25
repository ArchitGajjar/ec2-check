const exec = require('child-process')

exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.log('bad')
  } else {
    console.log(stdout)
  }
})
