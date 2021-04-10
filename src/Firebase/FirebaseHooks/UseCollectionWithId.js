import { projectFirestore } from "../FirebaseUtils";

const useCollectionWithId = (collection) => {

  const addDoc = async (doc, id) => {
    // reset the error

    try {
      await projectFirestore.collection(collection).doc(id).set(doc);
    } catch (err) {
      console.log(err.message);
    }
  };

  return {  addDoc };
};

export default useCollectionWithId;
