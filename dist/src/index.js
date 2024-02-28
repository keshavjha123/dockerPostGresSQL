"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
            `);
        console.log(result);
    });
}
// createUsersTable();
// Function to insert user data into the 'users2' table
function insertUserData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`INSERT INTO users2 (username, email, password)
         VALUES ($1, $2, $3)`, [username, email, password]);
        console.log(result);
    });
}
// insertUserData("Keshav11", "emailKeshav11", "password");
function createAddressesTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`CREATE TABLE addresses (
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
    });
}
// createAddressesTable()
function insertAddressesData(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        INSERT INTO addresses (city, country, street, user_id, pincode)
        VALUES ($1, $2, $3, $4, $5);`, [city, country, street, user_id, pincode]);
        console.log(result);
    });
}
// insertAddressesData(1, "Bhopal2", "India", "ggl", "832303");
function fetchAllDataFromTable(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    SELECT * FROM ${tableName};
    `);
        console.log(result.rows);
    });
}
// fetchAllDataFromTable("addresses");
function leftJoin() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        SELECT a.city, a.country, a.street, a.user_id, a.pincode, u.username FROM addresses AS a LEFT JOIN users2 AS u ON a.user_id=u.id
    `);
        console.log(result.rows);
    });
}
leftJoin();
function dropTable(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        DROP TABLE ${tableName};
    `);
        console.log(result);
    });
}
// dropTable("addresses");
