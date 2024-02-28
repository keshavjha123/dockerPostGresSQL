// const { Client } = require('pg');

// const connectionString = 'postgresql://postgres:mysecretpassword@localhost:5432/postgres';

// const client = new Client({
//     connectionString: connectionString
// });

// client.connect(err => {
//     if (err) {
//         console.error('connection error', err.stack);
//     } else {
//         console.log('connected to the database');
//     }
// });

// // client.query('CREATE TABLE "users" ( ' +
// //     'id SERIAL PRIMARY KEY, ' +
// //     'username VARCHAR(50) UNIQUE NOT NULL, ' +
// //     'email VARCHAR(255) UNIQUE NOT NULL, ' +
// //     'password VARCHAR(255) NOT NULL, ' +
// //     'created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);', (err, res) => {
// //         if (err) {
// //             console.error(err);
// //         } else {
// //             console.log(res);
// //         }
// //         client.end();
// //     });



// // client.query('INSERT INTO "users" ("username", "email", "password") ' +
// //     "VALUES ('username_here', 'user@example.com', 'user_password');",
// //     (err, res) => {
// //         if (err) {
// //             console.error(err);
// //         } else {
// //             console.log(res);
// //         }
// //         client.end();
// //     });


// client.query('SELECT * FROM "users"',
//     (err, res) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(res);
//         }
//         client.end();
//     });


