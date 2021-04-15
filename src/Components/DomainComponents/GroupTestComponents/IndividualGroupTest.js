import { useState } from "react";
import TestGroup from "../../../Models/TestGroup";
import { TestGroupFunctions } from "../../../Models/TestGroup";
import { useAlert } from "react-alert";

const IndividualGroupTest = (props) => {
  const [showEditPage, setShowEditPage] = useState(false);

  const [displayName, setDisplayName] = useState(props.item.name);

  const [name, setName] = useState(props.item.name);
  const [notes, setNotes] = useState(props.item.notes);
  const [showOrHide, setShowOrHide] = useState(props.item.show);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const alert = useAlert();

  const handleUpdate = async () => {
    const { UpdateTest, GetTestGroupById } = TestGroupFunctions();
    const updateObj = new TestGroup();
    updateObj.name = name;
    updateObj.notes = notes;
    updateObj.show = showOrHide;
    updateObj.dateIndex = props.item.dateIndex;
    setIsSubmittingForm(true);
    let res = await UpdateTest(props.item.id, updateObj);
    setIsSubmittingForm(false);

    if (res.error != null) {
      alert.error(res.error);
    } else {
      alert.success("Updated ");
    }
    let updatedObject = await GetTestGroupById(props.item.id);

    console.log("-----Updated Object----");
    console.log(updatedObject);
    console.log("-----Updated Object----");
    if (updatedObject != null) {
      console.log("-----Not Nulll----");

      setDisplayName(updatedObject.name);
      setName(updatedObject.name);
      setNotes(updatedObject.notes);
      setShowOrHide(updatedObject.show);
    }
    // setName(updatedObject.name);
    // setNotes(updatedObject.notes);
    // setShowOrHide(updatedObject.show);
  };

  return (
    <div>
      <div>
        <div class="shadow-md p-8 overflow-x-auto hover:bg-gray-200 secondaryText">
          <div class="flex flex-row items-center justify-between">
            <div>{displayName}</div>
            <div class="ml-2">
              <svg
                onClick={() => {
                  setShowEditPage(!showEditPage);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
          </div>
        </div>
        {showEditPage ? (
          <div class="flex flex-col">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                console.log("Updating Object ");
                handleUpdate();
              }}
            >
              <label class="  normalText mb-0">Name</label>
              <input
                class="inputBox"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label class=" normalText mb-0">Notes</label>
              <input
                class="inputBox"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <div class="flex flex-row items-center">
                <input
                  type="checkbox"
                  checked={showOrHide}
                  onChange={(e) => {
                    setShowOrHide(e.target.checked);
                  }}
                  class="mb-2"
                />
                <label class="ml-2  py-0 normalText">Show/Hide</label>
              </div>

              <div class="flex flex-row">

{isSubmittingForm?
  <button type="submit" class="primaryDisabledButton text-center">
                  Updating 
                </button>:
 <button type="submit" class="primaryButton text-center">
 Update
</button>

}
               


              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default IndividualGroupTest;
