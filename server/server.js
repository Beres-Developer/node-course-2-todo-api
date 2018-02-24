const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { user } = require('./models/user');
const { Todo } = require('./models/todo');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  //console.log(req.body);

  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
    console.log('new todo created. ', JSON.stringify(doc, undefined, 2));
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  debugger;
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };


  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  },(e) => {
    res.status(400).send();
  });
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  })
}, (e) => {
  res.status(400).send();
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
