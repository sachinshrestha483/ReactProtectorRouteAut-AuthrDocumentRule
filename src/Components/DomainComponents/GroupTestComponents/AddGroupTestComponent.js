import { useState } from "react";
import TestGroup from "../../../Models/TestGroup";
import { TestGroupFunctions } from "../../../Models/TestGroup";
const AddGroupTestComponent = (props) => {
  const [groupName, setGroupName] = useState("");
  const [notes, setNotes] = useState("");
  const [showorHide, setShoworHide] = useState(true);

  const handleSubmit = async () => {
    const { AddGroupTest } = TestGroupFunctions();

    const object = new TestGroup();

    object.name = groupName;
    object.notes = notes;
    object.show = showorHide;

    console.log(object);

    await AddGroupTest(object);
    props.loadDatafun();
  };

  return (
    <div>
      <div className="lg:fixed lg:w-60	">
        <div className="secondaryText">Add Group</div>

        <input
          className="inputBox "
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
        <input
          className="inputBox "
          value={notes}
          placeholder="Note"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <div class="flex flex-row items-center">
          <input
            checked={showorHide}
            onChange={(e) => {
              setShoworHide(e.target.checked);
            }}
            type="checkbox"
            class="mb-2"
          />
          <label class="ml-2  py-0 normalText">Show/Hide</label>
        </div>

        <button type="submit" onClick={handleSubmit} className="primaryButton">
          Add It
        </button>
      </div>
    </div>
  );
};

export default AddGroupTestComponent;
