import { projectFirestore } from "../FirebaseUtils";

const useSubCollection = (collection, documentId, subcollection) => {
  console.log("----UserId:-----");
  console.log(documentId);

  const addDoc = async (doc) => {
    // reset the error

    try {
      await projectFirestore
        .collection(collection)
        .doc(documentId)
        .collection(subcollection)
        .add(doc);
    } catch (err) {
      console.log(err);
    }
  };

  return {  addDoc };
};

export default useSubCollection;
