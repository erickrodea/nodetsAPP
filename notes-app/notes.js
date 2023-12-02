const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

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
