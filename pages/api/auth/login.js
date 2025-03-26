import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing fields" });

    // Fetch user (Replace with real DB logic)
    const user = { email, password: "$2a$10$hashedpassword" }; // Fake stored hash

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ message: "Login successful", token });
}
