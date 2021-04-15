import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";
import getCollection from "../Firebase/FirebaseHooks/GetCollection";
import { timestamp } from "./../Firebase/FirebaseUtils";
import useSubCollectionByPath from "../Firebase/FirebaseHooks/UseSubCollectionByPath";
import GetSubCollection from "../Firebase/FirebaseHooks/GetSubCollection";

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
    await addDoc(Object.assign({}, obj));
  };

  const GetAllTestList = async () => {
    console.log("----------------------------get all Test -------------------")
   
   
    let list = await GetSubCollection(collectionName, null, null);
    console.log("-----list------");
    console.log("-----list------");
    console.log("-----list------");
    console.log(list.documents);
    console.log("-----list------");
    console.log("-----list------");
    console.log("-----list------");

    return list;
  };

  return {
    AddTest,
    GetAllTestList,
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
