import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";

import getCollection from "../Firebase/FirebaseHooks/GetCollection";
import { timestamp } from "./../Firebase/FirebaseUtils";

const collectionName = "SubTest";

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
    this.show=true;
    
  }

  async AddTest() {
    const { addDoc } = useCollection(collectionName);
    this.createdAt = timestamp;
    await addDoc(Object.assign({}, this));
  }
  async UpdateTest(id) {
    const { updateDoc } = UseDocument(collectionName, id);

    await updateDoc(Object.assign({}, this));
  }

  async GetTestById(id) {
    const { load } = GetDocument(collectionName, id);
    let subTest = await load();
    return subTest;
  }

  async GetTestList() {
    let subTestList = await getCollection(collectionName, null, ["dateIndex"]);
    return subTestList;
  }
}

export default Test;
