import { useState } from "react";
import { auth } from "./../../Firebase/FirebaseUtils";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log("Error in Login ");
    }
  };

  return (
    <div>
      <h3 className="text-center my-2">Login </h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          class="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>

      <div class="mb-3">
        <button onClick={loginUser} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
