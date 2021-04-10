import { projectFirestore } from "../FirebaseUtils";

let document = null; // agar error ho to ref ko hata do ....

const load = async (collection, Id) => {
  document = null; // changed this line

  try {
    const res = await projectFirestore.collection(collection).doc(Id).get();

    if (!res.exists) {
      return null;
      //  throw Error("That role does not Exist");
    }

    document = { ...res.data(), id: res.id };

    return document;
    //    console.log("p:" + document);
  } catch (err) {
    // error.value = err.message;

    console.log(err.message);
    return null;
    //console.log("Error Occured");
  }
};

const getDocument = () => {
  return { load };
};

export default getDocument;
