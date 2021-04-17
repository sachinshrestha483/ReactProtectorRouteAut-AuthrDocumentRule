import GetCollection from "../Firebase/FirebaseHooks/GetCollection";
import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import useCollection from "../Firebase/FirebaseHooks/UseCollection";
import UseDocument from "../Firebase/FirebaseHooks/UseDocument";
import { timestamp } from "../Firebase/FirebaseUtils";
import store from "../Store/Configurestore";
import { setGroupTests } from "../Store/Domain/GroupTest/reducer";

const collectionName = "TestGroup";

export const TestGroupFunctions = () => {
  const AddGroupTest = async (obj) => {
    const { addDoc } = useCollection(collectionName);
    obj.dateIndex = timestamp();

    console.log("TimeStamp");
    console.log(timestamp());
    let res = await addDoc(Object.assign({}, obj));

    console.log("---------Error is Here----------");
    console.log(res);
    console.log("---------Error is Here----------");

    console.log("---------Error is Here----------");

    return res;
  };

  const GetTestGroupList = async () => {
    //let groupList = await GetCollection(collectionName, null, ["dateIndex"]);

    let isgroupTestLoaded = store.getState().domainReducer.groupTest.isLoaded;
    console.log(isgroupTestLoaded);
    if (isgroupTestLoaded == false) {
      await SetGroupTestInStore();
    }
    console.log("----step 3----");

    console.log(store.getState());

    return store.getState().domainReducer.groupTest.groupTests;
  };

  const UpdateTest = async (id, obj) => {
    const { updateDoc } = await UseDocument(collectionName, id);

    let res = await updateDoc(Object.assign({}, obj));
    await SetGroupTestInStore();
    return res;
  };

  const GetTestGroupById = async (id) => {
    const { load } = GetDocument();
    console.log("---Collection Name and Id---");
    console.log(collectionName);
    console.log(id);
    let Testgroup = await load(collectionName, id);
    return Testgroup;
  };

  const SetGroupTestInStore = async () => {
    console.log(store.getState());

    let groupList = await GetCollection(collectionName, null, ["dateIndex"]);

    console.log("-------group list-----");
    console.log(groupList);
    console.log("-------group list-----");

    console.log("----step 1----");

    if (groupList.error != null) {
      store.dispatch(setGroupTests({ isLoaded: true, groupTests: [] }));
    } else {
      store.dispatch(
        setGroupTests({ isLoaded: true, groupTests: groupList.documents })
      );
    }

    console.log("----step 2----");

    console.log(store.getState());
  };

  return { AddGroupTest, GetTestGroupList, UpdateTest, GetTestGroupById };
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
