const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove({})

Todo.findOneAndRemove({ _id: "5a915ec1fe9af90014976132" }).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove("5a915ec1fe9af90014976132").then((todo) => {
  console.log(todo);
});
