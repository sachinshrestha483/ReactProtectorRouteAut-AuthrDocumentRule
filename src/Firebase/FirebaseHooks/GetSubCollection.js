import { projectFirestore } from "./../FirebaseUtils";

// Used Group Query Here.... 

const getSubCollection = async (finalCollection,query = null, orderBy=null) => {
  let  documents =[];
  let error = null;

  let collectionRef = projectFirestore.collectionGroup(finalCollection);

  if (query!=null) {
    collectionRef = collectionRef.where(...query);
  }
  
  if(orderBy!=null){
      collectionRef=collectionRef.orderBy(...orderBy)
  }

 

let res= await collectionRef.get();

try{
    
    documents=await res.docs.map((doc)=>{
        return{...doc.data(),id:doc.id}
    }) 
    
}
catch(err){
     console.log(err.message);
error=err.message;
}



  return { error, documents };
};

export default getSubCollection;