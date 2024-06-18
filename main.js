const path = require('path');

// TODO: Use path.join to join two file path segments

// TODO: Print the resulting path to the console
if (process.argv.length !== 4) {
    console.error('Usage: node joinPaths.js <path1> <path2>');
    process.exit(1); 
  }
  
  
  const path1 = process.argv[2];
  const path2 = process.argv[3];
  
  
  const joinedPath = path.join(path1, path2);
  
  
  console.log('Joined path:', joinedPath);
  
  
  module.exports = joinedPath;