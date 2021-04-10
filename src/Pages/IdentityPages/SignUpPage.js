import { useState } from "react";
import { auth } from "../../Firebase/FirebaseUtils";
import GetCurrentUser from "../../Firebase/FirebaseHooks/GetCurrentUser";
import User from "./../../Models/User";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerUser = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const userObj = GetCurrentUser();
      console.log("----New Created User--- ", userObj);
      console.log(userObj.user.uid);
      if (userObj != null) {
        const user = new User();
        user.email = email;
        user.name = name;
        user.uid = userObj.user.uid;
        console.log(user);
        user.AddUser(userObj.user.uid);
      }
    } catch (e) {
      console.log("Error in Creating User");
    }
  };

  return (
    <div>
      <h3 className="text-center my-2">Sign Up</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          User Name
        </label>
        <input
          type="email"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div class="mb-3">
        <button className="btn btn-primary" onClick={registerUser}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
