import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getTransactions = async () => {
  try {
    const transactionsRef = collection(db, "transactions");
    const transactionsRaw = await getDocs(transactionsRef);
    const transactions = transactionsRaw.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return transactions;
  } catch (error) {
    console.log(error);
    return false;
  }
};
