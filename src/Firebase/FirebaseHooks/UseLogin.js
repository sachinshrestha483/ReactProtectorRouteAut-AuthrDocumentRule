import { auth } from "./../../Firebase/FirebaseUtils";

let  error = null;
const login = async (email, password) => {
  error = null;

  try {
    let res = await auth.signInWithEmailAndPassword(email, password);
    error = null;
    console.log(res);
    return res;
  } catch (err) {
    error = "Incorrect login credentials";
    console.log(err.messsage)
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;