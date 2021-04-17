import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";
import getCollection from "../Firebase/FirebaseHooks/GetCollection";
import { timestamp } from "./../Firebase/FirebaseUtils";
import useSubCollectionByPath from "../Firebase/FirebaseHooks/UseSubCollectionByPath";
import GetSubCollection from "../Firebase/FirebaseHooks/GetSubCollection";
import useSubDocument from "../Firebase/FirebaseHooks/UseSubDocument";
import GetSubDocument from "../Firebase/FirebaseHooks/GetSubDocument";
import store from "../Store/Configurestore";
import { setTests } from "../Store/Domain/Test/reducer";

const collectionName = "Test";
const subParentCollectionName = "SubTests";
const parentCollectionName = "TestGroup";

const TestFunctions = () => {
  const AddTest = async (groupTestId, subtestId, obj) => {
    const collectionPath =
      parentCollectionName +
      "/" +
      groupTestId +
      "/" +
      subParentCollectionName +
      "/" +
      subtestId +
      "/" +
      collectionName;
    const { addDoc } = useSubCollectionByPath(collectionPath);
    obj.dateIndex = timestamp();
    let res = await addDoc(Object.assign({}, obj));
    console.log(res);
    return res;
  };

  const GetTestById = async (groupTestId, subtestId, id) => {
    const collectionPath =
      parentCollectionName +
      "/" +
      groupTestId +
      "/" +
      subParentCollectionName +
      "/" +
      subtestId +
      "/" +
      collectionName;

    const { load } = GetSubDocument();

    let doc = await load(collectionPath, id);

    return doc;
  };

  const UpdateTest = async (groupTestId, subtestId, id, doc) => {
    const collectionPath =
      parentCollectionName +
      "/" +
      groupTestId +
      "/" +
      subParentCollectionName +
      "/" +
      subtestId +
      "/" +
      collectionName;

    const { updateDoc } = useSubDocument(collectionPath, id);

    let res = await updateDoc(Object.assign({}, doc));

    console.log("----res-----");
    console.log(res);
    console.log("----res-----");

    return res;
  };

  const GetAllTestList = async () => {
    console.log("----------------------------get all Test -------------------");

    // let list = await GetSubCollection(collectionName, null, null);

    // console.log(list.documents);

    if(store.getState().domainReducer.test.isLoaded==false){
      await seTestinStore();

    }

    console.log(store.getState());

    return store.getState().domainReducer.test.tests;
  };

  const seTestinStore = async () => {
    let list = await GetSubCollection(collectionName, null, null);

    if (list.error != null) {
      store.dispatch(setTests({ isLoaded: true, tests: [] }));
    } else {
      store.dispatch(setTests({ isLoaded: true, tests: list.documents }));
    }
  };

  return {
    AddTest,
    GetAllTestList,
    GetTestById,
    UpdateTest,
  };
};

export { TestFunctions };

class Test {
  constructor() {
    this.name = "";
    this.unit = "";
    // Text Prefred More ......
    // default value  for  range in  null
    this.normalRangeText = null;
    this.infantNormalRangeMax = null;
    this.infantNormalRangeMin = null;
    this.maleNormalRangeMax = null;
    this.maleNormalRangeMin = null;
    this.femaleNormalRangeMax = null;
    this.femaleNormalRangeMin = null;
    this.centerText = null;
    this.leftText = null;
    this.belowText = null;
    this.summary = null;
    this.groupId = "";
    this.subtestId = "";
    this.dateIndex = "";
    this.show = true;
    this.suggestedValues = [];
  }

  // async AddTest() {
  //   const { addDoc } = useCollection(collectionName);
  //   this.createdAt = timestamp;
  //   await addDoc(Object.assign({}, this));
  // }
  // async UpdateTest(id) {
  //   const { updateDoc } = UseDocument(collectionName, id);

  //   await updateDoc(Object.assign({}, this));
  // }

  // async GetTestById(id) {
  //   const { load } = GetDocument(collectionName, id);
  //   let subTest = await load();
  //   return subTest;
  // }

  // async GetTestList() {
  //   let subTestList = await getCollection(collectionName, null, ["dateIndex"]);
  //   return subTestList;
  // }
}

export default Test;
