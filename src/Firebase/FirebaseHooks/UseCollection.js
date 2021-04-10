import { projectFirestore } from "../../Firebase/FirebaseUtils";

const useCollection = (collection) => {
  // add a new document
  const addDoc = async (doc) => {
    console.log("adding The Object ");

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      return res;
    } catch (err) {
      console.log(err.message);
      //      error.value = "could not send the message";
    }
  };

  return { addDoc };
};

export default useCollection;
