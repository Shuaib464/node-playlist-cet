// import internal module 'fs- file system'
import fs from 'fs'
import path from 'path'

//create a file with content func
function createFile (fileName, content) {
    fs.writeFileSync(fileName, content, 'utf-8')
    console.log(`file ${fileName} has been created`);
}

// read file content function
function readFile (fileName) {
    if(fs.existsSync(fileName)) {
        let content = fs.readFileSync(fileName, 'utf-8')
        console.log(content);
    } else {
        console.log(`File ${fileName} doesn't exist`);
    }
}

// update file function
function updateFile (fileName, content) {
    if (fs.existsSync(fileName)) {
        let x = fs.appendFileSync(fileName, content, 'utf-8')
        console.log(`File ${fileName} updated successfully....${x}`);
    } else {
        console.log(`File ${fileName} doesn't exist`);
    }
}

/* 
    DELETE
    fs.unlinkSync()

    MAKE A directory
    fs.mkdirSync()

    list contents of directory
    fs.readdirSync

    DELETE a directory
    fs.rmdirSync
*/

// createFile ('contact.txt', '73559202');

//read input
const input = process.argv;
const [,,command, ...args] = input
// console.log(command,args);

switch(command) {
    case 'create-file':
        createFile(args[0], args[1])
        break;
    case 'read-file':
        readFile(args[0])
        break;
    case 'update-file':
        updateFile(args[0], args[1])
        break;
}
