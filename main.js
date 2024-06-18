const path = require('path');

// TODO: Use path.join to join two file path segments

// TODO: Print the resulting path to the console
function joinPaths(input1, input2) {
  
    const joinedPath = path.join(input1, input2);
    
    
    console.log('Joined path:', joinedPath);
}


const args = process.argv.slice(2);


if (args.length !== 2) {
    console.error('Usage: node joinPaths.js <path1> <path2>');
    process.exit(1); 
}

const input1 = args[0];
const input2 = args[1];
joinPaths(input1, input2);
