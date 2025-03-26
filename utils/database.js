import { ref, set } from "firebase/database";
import { database } from "../firebase"; 

export function writeUserData(userId, name, email) {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email
  });
}
import { ref, get } from "firebase/database";
import { database } from "../firebase"; 

export async function getUserData(userId) {
  const snapshot = await get(ref(database, 'users/' + userId));
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No data available");
    return null;
  }
}
