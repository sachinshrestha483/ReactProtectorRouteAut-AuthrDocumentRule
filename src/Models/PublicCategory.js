import UseCollection from "./../Firebase/FirebaseHooks/UseCollection";

class PublicCategory {
  constructor() {
    // this would not be in prototype
    this.name = "";
  }

  async AddCategory() {
    const { addDoc } = UseCollection("PublicCatogory");

    await addDoc(Object.assign({}, this));
  }
}

export default PublicCategory;
