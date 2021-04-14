
import { projectFirestore } from "./../FirebaseUtils";

const useSubDocument = (collectionPath, id) => {
  let error =null;

  let docref = projectFirestore.collection(collectionPath).doc(id);

  const deleteDoc = async () => {
    error = null;

    try {
      const res = await docref.delete();
      error = null;
      return res;
    } catch (err) {
      console.log(err.message);
      error = "Could Not Delete";
    }
  };

  const updateDoc = async (updates) => {
    error = null;

    try {
      const res = await docref.update(updates);
      return res;
    } catch (err) {
      console.log(err.message);
      error = "Could Not Update The Document";
    }
  };

  return { error,  deleteDoc, updateDoc };
};

export default useSubDocument;