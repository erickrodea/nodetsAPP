// Traditional Function Expression
// const square = function (x) {
//     return x * x
// }

// Arrow Function with Block Body
// const square = (x) => {
//     return x * x
// }

// Arrow Function with Implicit Return
// const square = (x) => x * x

// Console log the result of the square function with argument 2
// console.log(square(2))

// Object definition with a method using an arrow function
const event = {
    // Property: Name of the event
    name: 'Birthday Party',

    // Property: List of guests
    guestList: ['Andrew', 'Jen', 'Mike'],

    // Method: Print the guest list for the event
    printGuestList() {
        // Log the event name
        console.log('Guest list for ' + this.name);

        // Iterate over the guest list using forEach with an arrow function
        this.guestList.forEach((guest) => {
            // Log each guest's attendance at the event
            console.log(guest + ' is attending ' + this.name);
        });
    }
}

// Call the printGuestList method of the event object
event.printGuestList();
