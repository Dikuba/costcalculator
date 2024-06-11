/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('customerDB');

// Insert a few documents into the customers collection.
db.getCollection('customers').insertMany([
  {
    email: 'john.doe@example.com',
    phone: '+1234567890',
    fullName: 'John Doe',
    address: '123 Main St, Anytown, USA'
  },
  {
    email: 'jane.doe@example.com',
    phone: '+0987654321',
    fullName: 'Jane Doe',
    address: '456 Elm St, Othertown, Canada'
  },
  {
    email: 'sam.smith@example.com',
    phone: '+1122334455',
    fullName: 'Sam Smith',
    address: '789 Oak St, Anothertown, UK'
  }
]);

// Find all customers and print them
const customers = db.getCollection('customers').find().toArray();
console.log(customers);
