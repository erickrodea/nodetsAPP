// console.log('Client side javascript file is loaded!')

// // //client side fetch api
// // fetch('http://puzzle.mead.io/puzzle').then((response) => {
// //     response.json().then((data) => {
// //         console.log(data)
// //     })
// // })//we fetch data from a url and umped it to the console. 

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const location = search.value //initialized value to obtain it from the form 
// //only fetch when user submits
//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {//concat it to the end of the search que
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.location)
//                 console.log(data.forecast)
//             }
//         })
//     })
// })
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})