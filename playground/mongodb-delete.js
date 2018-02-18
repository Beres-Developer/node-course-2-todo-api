// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 const db = client.db('TodoApp');
  // deleteMany
  // db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('ToDos').findOneAndDelete({completed: false}).then((deletedItem) => {
  //   console.log(deletedItem);
  // });

  db.collection('Users').deleteMany({name: 'Beresford'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a899103b686772905606562")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
