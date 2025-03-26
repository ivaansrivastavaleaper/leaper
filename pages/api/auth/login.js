import { auth, provider, signInWithPopup } from "lib/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const result = await signInWithPopup(auth, provider);
      res.status(200).json({ user: result.user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
