//
// Goal: Create a method to get incomplete tasks
//

// Object definition representing a list of tasks
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    // Method: getTasksToDo
    // Description: Returns an array of tasks that are not completed.
    getTasksToDo() {
        // Use the filter method to create a new array with only incomplete tasks
        // Arrow function is used to check if the 'completed' property of each task is false
        return this.tasks.filter((task) => task.completed === false);
    }
}

// Log the result of calling the getTasksToDo method
console.log(tasks.getTasksToDo());
