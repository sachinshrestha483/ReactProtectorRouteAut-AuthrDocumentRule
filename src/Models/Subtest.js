import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";
import useSubCollection from "../Firebase/FirebaseHooks/UseSubCollecction";
import GetSubDocument from "../Firebase/FirebaseHooks/GetSubDocument";

import GetCollection from "../Firebase/FirebaseHooks/GetCollection";
import { timestamp } from "./../Firebase/FirebaseUtils";
import getSubCollection from "../Firebase/FirebaseHooks/GetSubCollection";
import useSubDocument from "../Firebase/FirebaseHooks/UseSubDocument";

import { setSubTests } from "../Store/Domain/Subtest/reducer";
import store from "../Store/Configurestore";

const ParentCollectionName = "TestGroup";
const collectionName = "SubTests";

export const SubtestFunctions = () => {
  const AddSubTest = async (id, doc) => {
    doc.dateIndex = timestamp();
    const { addDoc } = useSubCollection(
      ParentCollectionName,
      id,
      collectionName
    );
    let res = await addDoc(Object.assign({}, doc));
    console.log(res);
    return res;
  };

  const GetSubtestById = async (parentDocumnentId, childDocumentId) => {
    let collectionPath =
      ParentCollectionName + "/" + parentDocumnentId + "/" + collectionName;

    const { load } = GetSubDocument();

    let res = await load(collectionPath, childDocumentId);

    return res;
  };

  // const GetSubtestList = async () => {
  //   let list = await GetCollection(collectionName, null, ["dateIndex"]);
  //   console.log("List is Here");
  //   console.log(list);

  //   return list;
  // };

  const UpdateSubTest = async (parentDocumnentId, childDocumentId, obj) => {
    let collectionPath =
      ParentCollectionName + "/" + parentDocumnentId + "/" + collectionName;
    const { deleteDoc, updateDoc } = useSubDocument(
      collectionPath,
      childDocumentId
    );

    let res = await updateDoc(Object.assign({}, obj));

    return res;
  };

  const GetAllSubTest = async () => {
    // const { error, documents } = await getSubCollection(collectionName);

    // if (error != null) {
    //   console.log("Error in Loading The List");
    // }
    // let list = documents;

    // store.getState();

    if (store.getState().domainReducer.subTest.isLoaded == false) {
      setSubTestinStore();
    }

    return store.getState().domainReducer.subTest.subTests;
  };

  const setSubTestinStore = async () => {
    const { error, documents } = await getSubCollection(collectionName);

    if (error != null) {
      store.dispatch(setSubTests({ isLoaded: true, subTests: [] }));
    } else {
      store.dispatch(setSubTests({ isLoaded: true, subTests: documents }));
    }
  };

  return {
    AddSubTest,
    GetAllSubTest,
    UpdateSubTest,
    GetSubtestById,
  };
};

class SubTest {
  constructor() {
    this.name = "";
    this.isIndividualTest = false;
    this.nameBelowTest = "";
    this.summary = "";
    this.cost = 0;
    this.mrp = 0;
    this.isOutsideTest = false;
    this.outsidelabId = "";
    this.dateIndex = "";
    this.show = true;
    this.note = "";
    this.groupTestId = "";
  }

  //   async AddSubTest() {
  //     const { addDoc } = useCollection(collectionName);
  //     this.createdAt=timestamp;
  //     await addDoc(Object.assign({}, this));
  //   }
  //   async UpdateSubTest(id) {
  //     const { updateDoc } = UseDocument(collectionName, id);

  //     await updateDoc(Object.assign({}, this));
  //   }

  //   async GetSubTestById(id) {
  //     const { load } = GetDocument(collectionName, id);
  //     let subTest = await load();
  //     return subTest;
  //   }

  //   async GetSubTestList() {
  //     let subTestList = await getCollection(collectionName,null,['dateIndex']);
  //     return subTestList;
  //   }
}
export default SubTest;
