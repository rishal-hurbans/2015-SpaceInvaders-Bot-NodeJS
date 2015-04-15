var	fs = require('fs'),
	main = require('./src/main');

if (process.argv.length < 3) {
    printUsage();
    process.exit(1);
}

var outputPath = process.argv[2];
if (!fs.exists(outputPath)) {
	printUsage();
	console.log('');
	console.log('Error: Output folder "' + outputPath + '" does not exist.');

	process.exit(1);
}

main(outputPath);

function printUsage() {
    console.log('');
    console.log('Node Sample Bot usage:');
    console.log('');
    console.log('node index.js <outputPath>');
    console.log('');
    console.log('\toutputPath\t relative path to the folder where the engine will read & write files (eg. output)');
}