import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";
import useSubCollection from "../Firebase/FirebaseHooks/UseSubCollecction";

import GetCollection from "../Firebase/FirebaseHooks/GetCollection";
import { timestamp } from "./../Firebase/FirebaseUtils";
import getSubCollection from "../Firebase/FirebaseHooks/GetSubCollection";
import useSubDocument from "../Firebase/FirebaseHooks/UseSubDocument";

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
    await addDoc(Object.assign({}, doc));
  };


  const GetSubtestList = async () => {
    let list = await GetCollection(collectionName, null, ["dateIndex"]);
    console.log("List is Here");
    console.log(list);

    return list;
  };



  const  UpdateSubTest=async (parentDocumnentId,childDocumentId,obj)=> {
     let  collectionPath=  ParentCollectionName+ "/" + parentDocumnentId + "/"+collectionName;
         const { deleteDoc,updateDoc } = useSubDocument(collectionPath, childDocumentId);
    
         await updateDoc(Object.assign({}, obj));
      }


  const GetAllSubTest=async()=>{
 
 const { error, documents}=await  getSubCollection(collectionName);

 if(error!=null){
     console.log("Error in Loading The List")
 }
    let list = documents;

    return list;
  }


  return { AddSubTest, GetSubtestList ,GetAllSubTest,UpdateSubTest};
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
