import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addTransaction = async (transaction) => {
  try {
    const transactionsRef = collection(db, "transactions");
    await addDoc(transactionsRef, transaction);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
