import { Database } from "sqlite3";

const db = new Database(":memory:"); // Change to a file-based DB if needed

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)");
});

export default db;
