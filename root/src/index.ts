// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
            `)
    console.log(result)
}



// createUsersTable();





// Function to insert user data into the 'users2' table
async function insertUserData(username: string, email: string, password: string) {
    await client.connect();
    const result = await client.query(
        `INSERT INTO users2 (username, email, password)
         VALUES ($1, $2, $3)`,
        [username, email, password]
    );
    console.log(result);
}


// insertUserData("Keshav11", "emailKeshav11", "password");



async function createAddressesTable() {

    await client.connect();
    const result = await client.query(`CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
    );`);
    console.log(result);

}


// createAddressesTable()



async function insertAddressesData(user_id: number, city: string, country: string, street: string, pincode: string) {
    await client.connect();
    const result = await client.query(`
        INSERT INTO addresses (city, country, street, user_id, pincode)
        VALUES ($1, $2, $3, $4, $5);`,
        [city, country, street, user_id, pincode]
    )

    console.log(result);

}

// insertAddressesData(1, "Bhopal2", "India", "ggl", "832303");



async function fetchAllDataFromTable(tableName: string) {
    await client.connect();
    const result = await client.query(`
    SELECT * FROM ${tableName};
    `);
    console.log(result.rows);
}

// fetchAllDataFromTable("addresses");



async function leftJoin() {
    await client.connect();
    const result = await client.query(`
        SELECT a.city, a.country, a.street, a.user_id, a.pincode, u.username FROM addresses AS a LEFT JOIN users2 AS u ON a.user_id=u.id
    `);
    console.log(result.rows);
}

leftJoin();



async function dropTable(tableName: string) {
    await client.connect();
    const result = await client.query(`
        DROP TABLE ${tableName};
    `);
    console.log(result);

}

// dropTable("addresses");


