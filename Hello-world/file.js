const {writeFileSync , readFile, readFileSync, appendFileSync, cpSync, unlinkSync , statSync, mkdirSync } = require('fs');

// sync .......... Blocking ..........
// writeFileSync("./test.txt", 'Hey duniya , this is Anoop Burnwal');

// async .......... Non Blocking ..........
// const { writeFile } = require('fs');
// writeFile("./test.txt", 'Async Hey duniya , this is Anoop', (err) => {});


// Sync ..........

// const result = readFileSync('./contacts.txt', 'utf8');
// console.log(result);


// Async .........
// readFile('./contacts.txt', 'utf8' , (err, result) => {
//     if(err){
//         console.log("Error",err);
//     }
//     console.log(result);
// });

// fr adding new data to the test.txt file
// appendFileSync("./test.txt", new Date().getDate().toLocaleString() + " " + " Anooz Burnwal" + "\n");

// to copy the existing file to new file
// cpSync('./test.txt', './test2.txt');

// to delete the file
// unlinkSync('./test2.txt');

// to check stats of the file
// console.log(statSync('./test.txt'));


// console.log(statSync('./test.txt').isFile()); // is it file or not
// console.log(statSync('./test.txt').isDirectory()); // is it directory or not
// console.log(statSync('./test.txt').size);



// mkdirSync('my_docs'); // to create new folder




// to check the cpu cores

// const os = require('os');
// console.log(os.cpus().length);
