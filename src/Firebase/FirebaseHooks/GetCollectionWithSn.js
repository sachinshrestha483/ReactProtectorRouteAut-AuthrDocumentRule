import { projectFirestore } from "../../Firebase/FirebaseUtils";
import React, { useEffect, useState } from "react";

const GetCollectionWithSn = (
  collection,
  query = null,
  orderBy = null,
  setStateFun
) => {
  console.log("Loading Data");
  // register the firestore collection reference
  var unSub = null;
  useEffect(() => {
    console.log("-----------loading The SnapShot------- ");
    return () => {
      console.log("Unsubscribing");
      // unSub();
    };
  }, []);

  const getSnap = () => {
    let collectionRef = projectFirestore.collection(collection);

    if (query) {
      console.log("query from ");
      collectionRef = collectionRef.where(...query);
    }

    if (orderBy != null) {
      collectionRef = collectionRef.orderBy(...orderBy);
    }

    unSub = collectionRef.onSnapshot(
      (snap) => {
        console.log("----Get snapShot-----");
        console.log("---------------------")
        let results = [];
        snap.docs.forEach((doc) => {
          // must wait for the server to create the timestamp & send it back
          results.push({ ...doc.data(), id: doc.id });
        });

        // update values

        setStateFun(results);
      },
      (err) => {
        console.log(err.message);
        //      documents.value = null;
        //    error.value = "could not fetch the data";
      }
    );
  };

  return { getSnap };
};

export default GetCollectionWithSn;