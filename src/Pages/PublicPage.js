

import { useState } from "react";
import PublicCategory from "../Models/PublicCategory";

const PublicPage = () => {
  const [name, setName] = useState("");

  const AddCategory = async () => {
    const publicCategory = new PublicCategory();
    publicCategory.name = name;
    await publicCategory.AddCategory();
  };

  return (
    <div>
      <h1>Public Page</h1>

      <input
        type="text"
        class="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />

      <button className="btn btn-primary" onClick={AddCategory}>Add Category</button>
    </div>
  );
};

export default PublicPage;
