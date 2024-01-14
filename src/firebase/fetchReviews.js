import {
    addDoc,
    collection,
    getDocs,
    onSnapshot,
    query,
} from "firebase/firestore";

import { db } from "./config";
const colRef = collection(db, "Portfolio");
export const getReviews = async () => {
    const items = [];
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
        const updatedDocuments = snapshot.docs.map((doc) => doc.data());
        updatedDocuments.forEach((childSnapshot) => {
            items.push({
                ...childSnapshot
            });
        });
    });
    // const snapshot = await getDocs(query(colRef));
    // snapshot.forEach((childSnapshot) => {
    //     items.push({
    //         id: childSnapshot.id,
    //         ...childSnapshot.data(),
    //     });
    // });
    return items;
}
export const postReviews = async (data) => {
    const success = await addDoc(colRef, { ...data }).then(() => {
        return true
    }).catch((error) => {
        console.log(error);
        return false
    });
    return success;
}