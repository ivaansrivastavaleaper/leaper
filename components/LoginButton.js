import { auth, provider, signInWithPopup } from "../lib/firebase";

export default function LoginButton() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}
