import { projectFirestore } from "./../FirebaseUtils";

const useSubCollectionByPath = (collectionPath) => {
  let error = null;

  const addDoc = async (doc) => {
    try {
       projectFirestore.collection(collectionPath).add(doc);

    } catch (err) {
        console.log(err.message );
        error=err.message;
    }

    return{error:error};

  };

  return { addDoc };
};

export default useSubCollectionByPath;
