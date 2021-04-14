import { projectFirestore } from "../../Firebase/FirebaseUtils";

const getCollection = async (collection, query = null, orderBy = null) => {
  let documents = [];
  let error = null;

  let collectionRef = projectFirestore.collection(collection);

  if (query != null) {
    collectionRef = collectionRef.where(...query);
  }
  if (orderBy != null) {
    collectionRef = collectionRef.orderBy(...orderBy);
  }

  try {
    const res = await collectionRef.get();
    //  console.log(res);
    documents = await res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    //    console.log(documents);
  } catch (err) {
    console.log("error occured")
    // console.log(err.message);
  }

  return { error, documents };
};

export default getCollection;