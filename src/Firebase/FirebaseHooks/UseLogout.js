import {auth} from "../FirebaseUtils";





const Logout=async ()=>{
try{
await auth.signOut();
}
catch(err){

    console.log(err.message);

}


}

const useLogout=()=>{
    return {Logout}
}

export default useLogout;
