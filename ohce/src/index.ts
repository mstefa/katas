import { ohce } from './ohce'
// print process.argv
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

console.log("write your name to start! n")
// Enter any texts ( User input)
process.stdin.on('data', data => {
  ohce(data.toString());
});


