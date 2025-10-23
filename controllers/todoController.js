let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb+srv://test:test@todo.fhgnimk.mongodb.net/');

// Create a schema - this is a blueprint 
let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', (req, res) => {
        // Find data and use Promise-based syntax (exec().then().catch())
        Todo.find({})
            .exec() // Explicitly execute the query and return a Promise
            .then(data => {
                // Pass retrieved data to the view
                res.render('todo', { todos: data });
            })
            .catch(err => {
                // Handle errors gracefully instead of throwing
                console.error("Error retrieving todos:", err);
                res.status(500).send('Error retrieving todos');
            });
    });

    // --- POST /todo route ---
    app.post('/todo', urlencodedParser, (req, res) => {
        // Get data from the view and create a new Todo document
        let newTodo = new Todo(req.body);

        // Use Promise-based save()
        newTodo.save()
            .then(data => {
                // Send the saved data back as JSON
                res.json(data);
            })
            .catch(err => {
                console.error("Error saving new todo:", err);
                res.status(500).send('Error saving new todo');
            });
    });

    // --- DELETE /todo/:item route ---
    app.delete('/todo/:item', (req, res) => {
        const itemToDelete = req.params.item.replace(/\-/g, ' ');

        // FIX: Use deleteMany() or deleteOne() instead of the deprecated find().remove()
        // deleteMany() returns a promise, removing the need for a callback
        Todo.deleteMany({ item: itemToDelete })
            .then(data => {
                // Send confirmation back as JSON
                res.json(data);
            })
            .catch(err => {
                console.error("Error deleting todo item:", err);
                res.status(500).send('Error deleting todo item');
            });
    });

};

