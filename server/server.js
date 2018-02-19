const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// const newTodo = new Todo({
//   text: 'Cook delicious meal'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo. ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo. ', e);
// });

const myTodo = new Todo({
  text: 'Learn node programming and become awesome',
  completed: true,
  completedAt: 99822389120
});

myTodo.save().then((doc) => {
  console.log('Saved todo. ', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo. ', e);
});
