import UseCollection from "./../Firebase/FirebaseHooks/UseCollection";

class PrivateCategory {
  constructor() {
    // this would not be in prototype
    this.name = "";
  }

  async AddCategory() {
    const { addDoc } = UseCollection("PrivateCatogory");

    await addDoc(Object.assign({}, this));
  }
}

export default PrivateCategory;
