import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import OutLab from "../../../Models/Outlabs";
import { OutlabFunctions } from "../../../Models/Outlabs";
import Subtest from "../../../Models/Subtest";
import { SubtestFunctions } from "../../../Models/Subtest";
import { TestGroupFunctions } from "../../../Models/TestGroup";
import { useAlert } from "react-alert";

const EditSubtestComponent = (props) => {
  useEffect(() => {
    console.log("---Here are The Props---");
    console.log(props.subtest);
  }, []);

  const [name, setName] = useState(props.subtest.name);
  const [isIndividualTest, setIsIndividualTest] = useState(
    props.subtest.isIndividualTest
  );
  const [nameBelowTest, setNameBelowTest] = useState(
    props.subtest.nameBelowTest
  );
  const [summary, setSummary] = useState(props.subtest.summary);
  const [cost, setCost] = useState(props.subtest.cost);
  const [mrp, setMrp] = useState(props.subtest.mrp);
  const [isOutsideTest, setIsOutsideTest] = useState(
    props.subtest.isOutsideTest
  );
  // const [dateIndex, setDateIndex] = useState("");
  const [show, setShow] = useState(true);
  const [note, setNote] = useState(props.subtest.note);
  const [dateIndex, setDateIndex] = useState(props.subtest.dateIndex);

  const [subtestId, setSubtestId] = useState(props.subtest.id);
  const [grouptestId, setGroupTestId] = useState(props.subtest.groupTestId);

  const [outsideLabId, setOutsidelabId] = useState(props.subtest.outsidelabId);
  const [OutsideLabList, setOutsideLabList] = useState([]);
  const [showSelectOutsidelab, setShowSelectOutsideLab] = useState(
    isOutsideTest
  );
  const [editorElementEvent, setEditorElementEvent] = useState();

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
  }, []);

  const update = async () => {
    if (typeof editorElementEvent != "undefined") {
      console.log(
        "Content was updated:",
        editorElementEvent.target.getContent()
      );
      setSummary(editorElementEvent.target.getContent());
    }

    const { UpdateSubTest } = SubtestFunctions();
    let subtestObj = new Subtest();
    subtestObj.dateIndex = dateIndex;
    subtestObj.cost = cost;
    subtestObj.groupTestId = grouptestId;
    subtestObj.isIndividualTest = isIndividualTest;
    subtestObj.isOutsideTest = isOutsideTest;
    subtestObj.mrp = mrp;
    subtestObj.name = name;
    subtestObj.nameBelowTest = nameBelowTest;
    subtestObj.note = note;
    subtestObj.outsidelabId = outsideLabId;
    subtestObj.show = show;
    subtestObj.summary = summary;
    await UpdateSubTest(grouptestId, subtestId, subtestObj);

    alert.show("Updated!");
  };

  const handleEditorChange = (e) => {
    // setSummary(e.target.getContent());

    setEditorElementEvent(e);
  };

  return (
    <div>
      <div className="secondaryText text-center">Edit Subtest</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          update();
        }}
      >
        <div className=" lg:grid lg:grid-cols-3 lg:gap-4	  ">
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
            initialValue={summary}
            onChange={handleEditorChange}
          />
        </div>

        <button type="submit" className="primaryButton mt-4 col-span-1">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditSubtestComponent;
