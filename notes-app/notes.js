// Importing required modules
const fs = require('fs');      // File System module for file operations
const chalk = require('chalk'); // Library for colorful console logs

//chalk works like style to let users know certain configs
//green good
//red bad
// Function to add a new note
const addNote = (title, body) => {
    const notes = loadNotes(); // Load existing notes from the file
    const duplicateNote = notes.find((note) => note.title === title); // Check for duplicate note titles


    if (!duplicateNote) { // If no duplicate, add the new note
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes); // Save the updated notes to the file
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!')); // Display error if the title is already in use
    }
}

// Function to remove a note by title
const removeNote = (title) => {
    const notes = loadNotes(); // Load existing notes
    const notesToKeep = notes.filter((note) => note.title !== title); // Filter out the note to be removed

    if (notes.length > notesToKeep.length) { // Check if any note was removed
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep); // Save the updated notes to the file
    } else {
        console.log(chalk.red.inverse('No note found!')); // Display error if the note is not found
    }
}

// Function to list all notes
const listNotes = () => {
    const notes = loadNotes(); // Load existing notes

    console.log(chalk.inverse('Your notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

// Function to read a note by title
const readNote = (title) => {
    const notes = loadNotes(); // Load existing notes
    const note = notes.find((note) => note.title === title); // Find the note with the specified title

    if (note) {
        console.log(chalk.green.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!')); // Display error if the note is not found
    }
}

// Function to save notes to the file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes); // Convert notes array to JSON string
    fs.writeFileSync('notes.json', dataJSON); // Write JSON string to the file
}

// Function to load notes from the file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // Read data from the file
        const dataJSON = dataBuffer.toString(); // Convert data buffer to string
        return JSON.parse(dataJSON); // Parse JSON string to get the notes array
    } catch (e) {
        return []; // Return an empty array if there's an error (e.g., file not found)
    }
}

// Exporting the functions for external use
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

//without arrow functions
// const getNotes = function () {
//     return 'Your notes...'
// }

// const addNote = function (title, body) {
//     const notes = loadNotes()


//     //array filter method to check for duplicates

//     const duplicateNotes = notes.filter(function (note) {
//         return note.title === title
//     })

//     if (duplicateNotes.length === 0) {
//         //pushing items to the empty array we declared in the try catch block 
//         //this initialized a new json file
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log(chalk.green.inverse("new note added!"))

//     }
//     else {
//         console.log(chalk.red.inverse('note title taken!'))
//     }
// }

// //removes notes from json file
// const removeNote = function (title) {
//     const notes = loadNotes()
//     const notesToKeep = notes.filter(function (note) {
//         return note.title != title
//     })
//     if (notes.length > notesToKeep.length) {
//         console.log(chalk.green.inverse("note removed"))

//     }
//     else {
//         console.log(chalk.red.inverse("no note found"))
//     }

//     saveNotes(notesToKeep)
// }



// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)

// }

// const loadNotes = function () {
//     try {
//         //if files exist execute
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)


//     }
//     catch (e) {
//         //otherwise initialize an empty array
//         return []

//     }

// }
// //exporting an object with properties
// module.exports = {
//     getNotes: getNotes,
//     addNote: addNote,
//     removeNote: removeNote
// }
