import GetCollection from "../Firebase/FirebaseHooks/GetCollection";
import store from "../Store/Configurestore";
import { setOutLabs } from "../Store/Domain/OutLab/reducer";

const collectionName = "OutsideLabs";

const OutlabFunctions = () => {
  
    const GetOutLabList = async () => {
//    let list = await GetCollection(collectionName, null, null);
   
   await SetGroupTestInStore();
 //   console.log(list);
    return store.getState().domainReducer.outlab.outLabs;
  };

  const SetGroupTestInStore = async () => {
    console.log(store.getState());
    let list = await GetCollection(collectionName, null, null);



    console.log("----step 1----");

    if (list.error != null) {
      store.dispatch(
        setOutLabs({ isLoaded: true, outLabs: [] })
        );
    } else {
      store.dispatch(
        setOutLabs({  isLoaded: true, outLabs: list.documents })
      );
    }

    console.log("----step 2----");

    console.log(store.getState());
  };


  return { GetOutLabList };
};

export { OutlabFunctions };

class Outlab {
  constructor() {
    this.name = "";
    this.address = "";
    this.phone = "";
    this.note = "";
  }
}

export default Outlab;
