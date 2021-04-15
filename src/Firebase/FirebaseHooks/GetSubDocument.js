import { projectFirestore } from "../FirebaseUtils";

const load = async (collectionpath, Id) => {
  let document = null;
  let error = null;

  try {
    const res = await projectFirestore.collection(collectionpath).doc(Id).get();

    if (!res.exists) {
      error = "Not Found";
    }

    document = { ...res.data(), id: res.id };
  } catch (err) {
    console.log(err.message);
    error = err.message;
  }
  return{error,document}
};

const GetSubDocument = () => {
  return { load };
};

export default GetSubDocument;
