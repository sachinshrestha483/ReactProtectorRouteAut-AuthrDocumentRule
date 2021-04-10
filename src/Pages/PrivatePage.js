import { useState } from "react";
import PrivateCategory from "./../Models/PrivateCategory";
const PrivatePage = () => {
  const [name, setName] = useState("");

  const AddCategory = async () => {
    const privateCategory = new PrivateCategory();
    privateCategory.name = name;
    await privateCategory.AddCategory();
  };

  return (
    <div>
      <h1>Private Page</h1>

      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />

      <button className="btn btn-primary" onClick={AddCategory}>
        Add Category
      </button>
    </div>
  );
};

export default PrivatePage;
