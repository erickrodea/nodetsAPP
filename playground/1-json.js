const fs = require('fs')
// const book = {
//     title: 'Ego',
//     author: ' ryan holiday'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)


// //this allows me to access only one part of the file like the author only part
// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


//this allows me to modify the content in the json file 
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'erick r'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)