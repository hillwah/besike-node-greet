greet = require("../")
argv = require("minimist")(process.argv.slice(2))

# console.dir(argv);
console.log greet(argv._[0], argv.drunk)
