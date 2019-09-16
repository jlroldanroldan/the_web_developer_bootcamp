var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?")

while (input !== "quit") {
    // handle input
    if (input === "list") {
        console.log("****************")
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("****************")
    } else if (input === "new") {
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo)
        console.log("Added todo")
    } else if (input === "delete") {
        // ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        //delete that todo
        // splice()
        todos.splice(index, 1);
        console.log("Deleted Todo")
    }
    t
    // ask again for new input
    var input = prompt("What would you like to do?")
}
console.log("OK, You quit the app")