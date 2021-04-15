import { useState } from "react";
import { projectFirestore } from "../../Firebase/FirebaseUtils";

const useCollection = (collection) => {
  // add a new document

  // const [error, useError] = useState(null);
  let error = null;

  const addDoc = async (doc) => {
    console.log("adding The Object ");

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      console.log("----res----");
      console.log(res);
      console.log("----res----");

      //return res;
    } catch (err) {
      console.log(err.message);
      error = err.message;
      //      error.value = "could not send the message";
    }
    return {error:error};
  };

  return { addDoc };
};

export default useCollection;
