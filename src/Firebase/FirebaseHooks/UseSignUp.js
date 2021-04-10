import { auth } from "./../../Firebase/FirebaseUtils";

let error = null

const signup = async (email, password, displayName) => {
  error = null

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
   console.log(res)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName:displayName })
    error = null
    
    return res
  }
  catch(err) {

    console.log(err.message)
    error=err.message;
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup