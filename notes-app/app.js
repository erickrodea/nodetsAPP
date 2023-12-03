const chalk = require('chalk'); // Library for colorful console logs
const yargs = require('yargs'); // Library for parsing command-line arguments
const notes = require('./notes.js'); // Importing the notes module


//node app.js add 
//node app.js remove 
//node app.js list
//node app.js read --title="name" 



// Customize yargs version
yargs.version('1.1.0'); // Setting the version for the command-line tool

// Create add command
yargs.command({
    command: 'add', // Command name
    describe: 'Add a new note', // Description of the command
    builder: { // Configuration for the command arguments
        title: {
            describe: 'Note title',
            demandOption: true, // The title is required
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true, // The body is required
            type: 'string'
        }
    },
    handler(argv) { // Function to be executed when the command is called
        notes.addNote(argv.title, argv.body); // Call the addNote function from the notes module
    }
})

// Create remove command
yargs.command({
    command: 'remove', // Command name
    describe: 'Remove a note', // Description of the command
    builder: { // Configuration for the command arguments
        title: {
            describe: 'Note title',
            demandOption: true, // The title is required
            type: 'string'
        }
    },
    handler(argv) { // Function to be executed when the command is called
        notes.removeNote(argv.title); // Call the removeNote function from the notes module
    }
})

// Create list command
yargs.command({
    command: 'list', // Command name
    describe: 'List your notes', // Description of the command
    handler() { // Function to be executed when the command is called
        notes.listNotes(); // Call the listNotes function from the notes module
    }
})

// Create read command
yargs.command({
    command: 'read', // Command name
    describe: 'Read a note', // Description of the command
    builder: { // Configuration for the command arguments
        title: {
            describe: 'Note title',
            demandOption: true, // The title is required
            type: 'string'
        }
    },
    handler(argv) { // Function to be executed when the command is called
        notes.readNote(argv.title); // Call the readNote function from the notes module
    }
})

yargs.parse(); // Parse the command-line arguments and execute the corresponding command
