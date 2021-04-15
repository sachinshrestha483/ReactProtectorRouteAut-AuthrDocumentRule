import { projectFirestore } from "../../Firebase/FirebaseUtils";


const UseDocument = (collection, id) => {
  let error = null;

  let docRef = projectFirestore.collection(collection).doc(id);
  const deleteDoc = async () => {
    error = null;

    try {
      const res = await docRef.delete();
      return res;
    } catch (err) {
      console.log(err.message);
      error = "could Not Delete";
    }
  };

  const updateDoc = async (updates) => {
    error = null;

    try {
      await docRef.update(updates);
      console.log("res is Here ");

     
    } catch (err) {
      console.log(err.message);
      error = err.message;
    }

return {error}

  };

  return { error,  deleteDoc, updateDoc };
};

export default UseDocument;
