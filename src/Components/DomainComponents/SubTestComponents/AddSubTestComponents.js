import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import OutLab from "../../../Models/Outlabs";
import { OutlabFunctions } from "../../../Models/Outlabs";
import Subtest from "../../../Models/Subtest";
import { SubtestFunctions } from "../../../Models/Subtest";
import { TestGroupFunctions } from "../../../Models/TestGroup";
import { useAlert } from "react-alert";

const AddSubtestComponent = () => {
  const [name, setName] = useState("");
  const [isIndividualTest, setIsIndividualTest] = useState(true);
  const [nameBelowTest, setNameBelowTest] = useState("");
  const [summary, setSummary] = useState("");
  const [cost, setCost] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [isOutsideTest, setIsOutsideTest] = useState(false);
  const [dateIndex, setDateIndex] = useState("");
  const [show, setShow] = useState(true);
  const [note, setNote] = useState("");
  const [groupTestId, setGroupTestId] = useState([]);
  const [groupTestList, setTestGroupList] = useState([]);
  const [outsideLabId, setOutsidelabId] = useState(null);
  const [OutsideLabList, setOutsideLabList] = useState([]);
  const [showSelectOutsidelab, setShowSelectOutsideLab] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const alert = useAlert();

  const loadOutLabList = async () => {
    const { GetOutLabList } = OutlabFunctions();

    console.log("-------Outside lab List--------");

    let list = await GetOutLabList();

    console.log(list);
    setOutsideLabList(list.documents);
  };

  useEffect(() => {
    loadOutLabList();
    loadTestGroupsList();
  }, []);

  const addSubtest = async () => {
    const subtestObject = new Subtest();
    const { AddSubTest } = SubtestFunctions();

    subtestObject.name = name;
    subtestObject.cost = cost;
    subtestObject.isIndividualTest = isIndividualTest;
    subtestObject.isOutsideTest = isOutsideTest;
    subtestObject.mrp = mrp;
    subtestObject.nameBelowTest = nameBelowTest;
    subtestObject.outsidelabId = outsideLabId;
    subtestObject.show = show;
    subtestObject.summary = `${summary.toString()}`;
    subtestObject.note = note;
    subtestObject.groupTestId = groupTestId;

    console.log("----Summary-----");
    console.log(summary);

    setIsSubmittingForm(true);
    let res = await AddSubTest(groupTestId, subtestObject);
    setIsSubmittingForm(false);

    console.log("------Calling The Alert-----");
    console.log("------Calling The Res-----");

    console.log(res);
    console.log("------Calling The Alert-----");

    if (res.error == null) {
      alert.success("Test Added!");
       setName("");
       setNameBelowTest("");
       setNote("")
       setOutsidelabId("");
       setShowSelectOutsideLab(false);
       setSummary("");
       setMrp(0);
       setCost(0);
       setIsOutsideTest(false);

    } else {
      alert.error("Error Occured " + res.error);
    }




  };

  const loadTestGroupsList = async () => {
    const { GetTestGroupList } = TestGroupFunctions();

    let list = await GetTestGroupList();
    setTestGroupList(list.documents);
  };

  const handleEditorChange = (e) => {
    // setSummary(e.target.getContent());
    console.log("Content was updated:", e.target.getContent());
    setSummary(e.target.getContent());
  };

  return (
    <div>
      {/* <div className="lg:fixed lg:w-60	"> */}
      <div className="secondaryText text-center">Add Subtest</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSubtest();
        }}
      >
        <div className=" lg:grid lg:grid-cols-3 lg:gap-4	  ">
          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Select GroupTest </label>

            <select
              required
              className="inputBox  py-0"
              value={groupTestId}
              onChange={(e) => setGroupTestId(e.target.value)}
            >
              <option  value="">Select The Group Test</option>
              {groupTestList.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Subtest Name</label>
            <input
              required
              className="inputBox "
              placeholder="Subtest Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Cost </label>

            <input
              className="inputBox "
              required
              type="number"
              value={cost}
              placeholder=""
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Mrp </label>

            <input
              className="inputBox "
              required
              value={mrp}
              type="number"
              placeholder=""
              onChange={(e) => {
                setMrp(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Name Below Test </label>

            <input
              className="inputBox "
              value={nameBelowTest}
              placeholder=""
              onChange={(e) => {
                setNameBelowTest(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Note </label>

            <input
              className="inputBox "
              value={note}
              placeholder=""
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </div>

          {showSelectOutsidelab ? (
            <div className="col-span-1">
              <label class="  normalText mb-0 pb-0">Select OutSide Lab </label>

              <select
                className="inputBox  py-0"
                value={outsideLabId}
                onChange={(e) => setOutsidelabId(e.target.value)}
              >
                {OutsideLabList.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>
          ) : null}
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4  my-4  grid grid-cols-1  ">
          <div class="col-span-1 lg:mt-0">
            <input
              checked={isOutsideTest}
              onChange={(e) => {
                setIsOutsideTest(e.target.checked);
                setShowSelectOutsideLab(!showSelectOutsidelab);
              }}
              type="checkbox"
              class="mb-2"
            />
            <label class="ml-2  py-0 normalText">Outside Test </label>
          </div>

          <div class="col-span-1 lg:mt-0">
            <input
              checked={show}
              onChange={(e) => {
                setShow(e.target.checked);
              }}
              type="checkbox"
              class="mb-2"
            />
            <label class="ml-2  py-0 normalText">Show/Hide </label>
          </div>

          <div className="col-span-1 lg:mt-0">
            <input
              checked={isIndividualTest}
              onChange={(e) => {
                setIsIndividualTest(e.target.checked);
              }}
              type="checkbox"
              class="mb-2"
            />
            <label class="ml-2  py-0 normalText">IsIndividual Test </label>
          </div>
        </div>

        <div className="col-span-1">
          <label class="  normalText mb-0 pb-0">Summary </label>

          <Editor
            apiKey="dqmesquky3zxf9m3uipmxhl2racwrbe5276vsy1h1bvzm5d3"
            className="inputBox "
            //value={summary}
            placeholder=""
            onChange={handleEditorChange}
          />
        </div>
{isSubmittingForm?<button type="submit" disabled className="primaryDisabledButton mt-4 col-span-1">
          Adding It
        </button>:
        <button type="submit" className="primaryButton mt-4 col-span-1">
        Add It
      </button>}
        
      </form>
    </div>
  );
};

export default AddSubtestComponent;
