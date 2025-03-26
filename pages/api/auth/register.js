import db from "@/lib/db";
import bcrypt from "bcryptjs";

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "**Method not allowed**" });
    }

    const { email, password } = req.body;

    // **Validate input**
    if (!email || !password || password.length < 6) {
        return res.status(400).json({ error: "**Invalid email or password (min 6 chars)**" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    db.run(
        "INSERT INTO users (email, password) VALUES (?, ?)", 
        [email, hashedPassword], 
        function (err) {
            if (err) {
                console.error("**Database error:**", err);
                return res.status(500).json({ error: "**Error registering user**" });
            }
            res.status(201).json({ message: "**User registered successfully**" });
        }
    );
}
