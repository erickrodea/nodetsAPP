const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()


    //array filter method to check for duplicates

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        //pushing items to the empty array we declared in the try catch block 
        //this initialized a new json file
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')

    }
    else {
        console.log('note title taken')
    }
}

//removes notes from json file
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title != title
    })
    saveNotes(notesToKeep)
}



const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function () {
    try {
        //if files exist execute
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)


    }
    catch (e) {
        //otherwise initialize an empty array
        return []

    }

}
//exporting an object with properties
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}