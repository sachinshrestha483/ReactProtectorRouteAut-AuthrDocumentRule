import GetCollection from "../Firebase/FirebaseHooks/GetCollection";
import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";
import { timestamp } from "../Firebase/FirebaseUtils";
const collectionName = "TestGroup";

export const TestGroupFunctions = () => {
  const AddGroupTest = async (obj) => {
    const { addDoc} = useCollection(collectionName);
   obj.dateIndex= timestamp();

    console.log("TimeStamp")
    console.log(timestamp());
  let res=   await addDoc(Object.assign({}, obj));
  
console.log("---------Error is Here----------")
console.log(res);
console.log("---------Error is Here----------")

console.log("---------Error is Here----------")

return res;
};

  const GetTestGroupList = async () => {
    let groupList = await GetCollection(collectionName,null,["dateIndex"]);
    return groupList;
  };

      const  UpdateTest=async(id,obj)=> {
      const { updateDoc } =await  UseDocument(collectionName, id);

    
    
    let res=   await updateDoc(Object.assign({}, obj));
    
    return res;
    
    }

    
     const  GetTestGroupById= async(id)=> {
      const { load } = GetDocument();
      console.log('---Collection Name and Id---')
      console.log(collectionName);
      console.log(id)
      let Testgroup = await load(collectionName, id);
      return Testgroup;
    }

  return { AddGroupTest, GetTestGroupList ,UpdateTest,GetTestGroupById};
};

class TestGroup {
  constructor() {
    this.name = "";
    this.notes = "";
    this.show = true;
    this.dateIndex = "";
  }
}
export default TestGroup;

// class TestGroup {
//   constructor() {
//     this.name = "";
//     this.note = "";
//   }
//    async AddGroupTest() {
//      const { addDoc } = useCollection(collectionName);

//      await addDoc(Object.assign({}, this));
//    }
//    async UpdateTest(id) {
//      const { updateDoc } = UseDocument(collectionName, id);

//      await updateDoc(Object.assign({}, this));
//    }

//    async GetTestGroupById(id) {
//      const { load } = GetDocument(collectionName, id);
//      let Testgroup = await load();
//      return Testgroup;
//    }

//    async GetTestGroupList() {
//      let groupList = await GetCollection(collectionName);
//      return groupList;
//    }
// }

// export default TestGroup;
