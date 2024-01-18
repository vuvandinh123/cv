import {
    getDocs,
    collection,
    query,
} from "firebase/firestore";

import { db } from "./config";
const colRef = collection(db, "Works")
export const fetchWork = async () => {
    const items = [];
    const snapshot = await getDocs(query(colRef));
    snapshot.forEach((childSnapshot) => {
        items.push({
            id: childSnapshot.id,
            ...childSnapshot.data(),
        });
    });
    return items;
}