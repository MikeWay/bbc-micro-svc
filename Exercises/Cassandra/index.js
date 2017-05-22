/*
See docs at http://docs.datastax.com/en/developer/nodejs-driver/3.2/
*/

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'subscriptions' });
const selectNames = 'SELECT name FROM subscriptions';
const selectNamesWhere = 'SELECT name FROM subscriptions WHERE type = ?';

client.execute(selectNames, [])
    .then(result => {
        console.log("Unfiltered Results =====================================================");
        for (let row of result.rows) {
            console.log(row.name);
        }
    })
    .catch(err => console.log(err));

client.execute(selectNamesWhere, ['Out Of Port'])
    .then(result => {
        console.log("Filtered Results =====================================================");
        for (let row of result.rows) {
            console.log(row.name);
        }
    })
    .catch(err => console.log(err));    
// const query = 'SELECT name, email FROM users WHERE key = ?';
// client.execute(query, [ 'someone' ])
//   .then(result => console.log('User with email %s', result.rows[0].email))
//   .catch(err => console.log(err));

console.log("Code completed -- Please wait -- a timeout error might yet happen!");
