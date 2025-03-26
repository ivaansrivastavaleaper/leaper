import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/register", { email, password });
            alert("Registration successful!");
            router.push("/login");
        } catch (error) {
            alert("Error: " + error.response?.data?.error || "Something went wrong");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
