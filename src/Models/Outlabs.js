import GetCollection from "../Firebase/FirebaseHooks/GetCollection";

const collectionName = "OutsideLabs";

const OutlabFunctions = () => {
  
    const GetOutLabList = async () => {
    let list = await GetCollection(collectionName

        , null, null);
    console.log("----list----");
    console.log(list);
    return list;
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
