import { useState } from "react";
import TestGroup from "../../../Models/TestGroup";
import { TestGroupFunctions } from "../../../Models/TestGroup";
import { useAlert } from "react-alert";

const AddGroupTestComponent = (props) => {
  const [groupName, setGroupName] = useState("");
  const [notes, setNotes] = useState("");
  const [showorHide, setShoworHide] = useState(true);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const alert = useAlert();

  const handleSubmit = async () => {
    const { AddGroupTest } = TestGroupFunctions();

    const object = new TestGroup();

    object.name = groupName;
    object.notes = notes;
    object.show = showorHide;

    console.log(object);

    setIsSubmittingForm(true);
    let res = await AddGroupTest(object);
    setIsSubmittingForm(false);

    if (res.error != null) {
      alert.error(res.error);
    } else {
      alert.success("Added ");
    }
    setGroupName("");
    props.loadDatafun();
  };

  return (
    <div>
      <div className="lg:fixed lg:w-60	">
        <div className="secondaryText">Add Group</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            className="inputBox "
            placeholder="Group Name"
            value={groupName}
            required
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

          {isSubmittingForm ? (
            <button type="submit" disabled className="primaryDisabledButton">
              Adding it
            </button>
          ) : (
            <button type="submit" className="primaryButton">
              Add It
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddGroupTestComponent;
