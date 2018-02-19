// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  db.collection('ToDos').findOneAndUpdate(
    {_id: new ObjectID('5a8991473c7565291301b3db')},
    {
      $set:{
        completed: true
      }
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    });
  // db.close();
});
