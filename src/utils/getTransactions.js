import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getTransactions = async () => {
  try {
    const transactionsRef = collection(db, "transactions");
    const q = query(transactionsRef, orderBy("year"), orderBy("month"), orderBy("day"), limit(20));
    const transactionsRaw = await getDocs(q);
    const transactions = transactionsRaw.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    console.log(transactions);
    return transactions;
  } catch (error) {
    console.log(error);
    return false;
  }
};
