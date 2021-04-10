import GetDocument from "../Firebase/FirebaseHooks/GetDocument";
import UseCollectionWithId from "./../Firebase/FirebaseHooks/UseCollectionWithId";

class User {
  constructor() {
    // this would not be in prototype
    this.name = "";
    this.email = "";
    this.uid = "";
    this.isAdmin = false;
    this.isLabTechnician = false;
    this.isPatient = true;
  }

  async AddUser(id) {
    const { addDoc } = UseCollectionWithId("Users");

    await addDoc(Object.assign({}, this), id);
  }

  async GetUser(id){
    
    const {load}= GetDocument();

  const user =  await load("Users",id);
  
return user;
}




}


export default User;
