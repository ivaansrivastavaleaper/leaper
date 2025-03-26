import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing fields" });

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Store user in memory (Replace with real DB logic)
    const user = { email, password: hashedPassword };

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ message: "User created", token });
}
