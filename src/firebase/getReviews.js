// import {
//     collection,
//     getDocs,
//     query,
// } from "firebase/firestore";

// import { db } from "./config";
// export const getReviews = async () => {
//     const items = [];
//     const colRef = collection(db, "Portfolio");
//     const snapshot = await getDocs(query(colRef));
//     snapshot.forEach((childSnapshot) => {
//         items.push({
//             id: childSnapshot.id,
//             ...childSnapshot.data(),
//         });
//     });
//     return items;
// }