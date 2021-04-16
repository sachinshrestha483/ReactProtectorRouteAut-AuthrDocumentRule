import { useEffect, useState } from "react";
import { SubtestFunctions } from "../../../Models/Subtest";
import { TestGroupFunctions } from "../../../Models/TestGroup";
import { Editor } from "@tinymce/tinymce-react";
import Test from "../../../Models/Test";
import { TestFunctions } from "../../../Models/Test";




const EditTestComponent = (props) => {
  const [id, setId] = useState(null);
  const [dateIndex, setDateIndex] = useState(null);

  const [name, setName] = useState("");
  const [unit, setUnit] = useState(null);
  const [normalRangeText, setNormalRangeText] = useState(null);
  const [infantNormalRangeMax, setInfantNormalRangeMax] = useState(null);
  const [infantNormalRangeMin, setInfantNormalRangeMin] = useState(null);
  const [maleNormalRangeMax, setMaleNormalRangeMax] = useState(null);
  const [maleNormalRangeMin, setMaleNormalRangeMin] = useState(null);
  const [femaleNormalRangeMax, setFemaleNormalRangeMax] = useState(null);
  const [femaleNormalRangeMin, setFemaleNormalRangeMin] = useState(null);
  const [centerText, setCenterText] = useState(null);
  const [leftText, setLeftText] = useState(null);
  const [belowText, setBelowText] = useState(null);
  const [summary, setSummary] = useState(null);
  const [show, setShow] = useState(false);
  const [suggestedValues, setSuggestedValues] = useState([{ name: "sdd" }]);
  const [groupId, setGroupId] = useState(null);
  const [subtestId, setSubtestId] = useState(null);


  const [editorElementEvent, setEditorElementEvent] = useState();


  const UpdateTestfunction = async () => {


    let localsummary=""
    if (typeof editorElementEvent != "undefined") {
      console.log(
        "Content was updated:",
        editorElementEvent.target.getContent()
      );
      localsummary= editorElementEvent.target.getContent();
     // setSummary(editorElementEvent.target.getContent());
     // setSummary(a);
    
    }




    const { UpdateTest } = TestFunctions();

    const testObject = new Test();

    testObject.belowText = belowText;
    testObject.centerText = centerText;
    testObject.femaleNormalRangeMax = femaleNormalRangeMax;
    testObject.femaleNormalRangeMin = femaleNormalRangeMin;
    testObject.infantNormalRangeMax = infantNormalRangeMax;
    testObject.infantNormalRangeMin = infantNormalRangeMin;
    testObject.leftText = leftText;
    testObject.maleNormalRangeMax = maleNormalRangeMax;
    testObject.maleNormalRangeMin = maleNormalRangeMin;
    testObject.name = name;
    testObject.normalRangeText = normalRangeText;
    testObject.show = show;
    testObject.suggestedValues = suggestedValues;
    testObject.summary = localsummary;
    testObject.unit = unit;
    testObject.groupId = groupId;
    testObject.subtestId = subtestId;
    testObject.dateIndex = dateIndex;

    console.log("--------test Object------");
    console.log(testObject);

    console.log("Props");
    console.log(props);
    console.log("----------group Id--------");

    console.log(props.test.groupId);

    console.log("----------group Id--------");

    console.log("---------------------subtest Id-------------");

    console.log(props.test.subtestId);

    console.log("---------------------subtest Id-------------");

    await UpdateTest(props.test.groupId, props.test.subtestId, id, testObject);

     
    props.reloadData();



  };




  const handleEditorChange = (e) => {
    // setSummary(e.target.getContent());

    setEditorElementEvent(e);
  };
   



  useEffect(() => {
    setId(props.test.id);

    setName(props.test.name);
    setBelowText(props.test.belowText);
    setCenterText(props.test.centerText);
    setFemaleNormalRangeMax(props.test.femaleNormalRangeMax);
    setFemaleNormalRangeMin(props.test.femaleNormalRangeMin);
    setInfantNormalRangeMax(props.test.infantNormalRangeMax);
    setInfantNormalRangeMin(props.test.infantNormalRangeMin);
    setLeftText(props.test.leftText);
    setMaleNormalRangeMax(props.test.maleNormalRangeMax);
    setMaleNormalRangeMin(props.test.maleNormalRangeMin);
    setNormalRangeText(props.test.normalRangeText);
    setShow(props.test.show);
    setSuggestedValues(props.test.suggestedValues);
    setSummary(props.test.summary);
    setUnit(props.test.unit);
    setGroupId(props.test.groupId);
    setSubtestId(props.test.subtestId);
    setDateIndex(props.test.dateIndex);
  }, []);

  // const handleEditorChange = (e) => {
  //   // setSummary(e.target.getContent());
  //   console.log("Content was updated:", e.target.getContent());
  //   setSummary(e.target.getContent());
  // };

  const addSugestedValues = () => {
    console.log("---------------------");
    console.log(suggestedValues);
    console.log("---------------------");

    setSuggestedValues((suggestedValues) => [
      ...suggestedValues,
      { name: "jhjhj" },
    ]);
  };

  return (
    <div>
      <div className="secondaryText text-center">Add Test</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          UpdateTestfunction();
        }}
      >
        <div className=" lg:grid lg:grid-cols-3 lg:gap-4	  ">
          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Test Name</label>
            <input
              required
              className="inputBox "
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Unit </label>
            <input
              className="inputBox "
              value={unit}
              onChange={(e) => {
                setUnit(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Normal Range Text</label>
            <input
              className="inputBox "
              placeholder="Normal Range Text "
              value={normalRangeText}
              onChange={(e) => {
                setNormalRangeText(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">
              Infant Normal Range Max
            </label>
            <input
              type="number"
              className="inputBox "
              value={infantNormalRangeMax}
              onChange={(e) => {
                setInfantNormalRangeMax(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">
              Infant Normal Range Min
            </label>
            <input
              className="inputBox "
              type="number"
              value={infantNormalRangeMin}
              onChange={(e) => {
                setInfantNormalRangeMin(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Male Normal Range Max</label>
            <input
              type="number"
              className="inputBox "
              value={maleNormalRangeMax}
              onChange={(e) => {
                setMaleNormalRangeMax(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Male Normal Range Min</label>
            <input
              type="number"
              className="inputBox "
              value={maleNormalRangeMin}
              onChange={(e) => {
                setMaleNormalRangeMin(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">
              Female Normal Range Max
            </label>
            <input
              type="number"
              className="inputBox "
              value={femaleNormalRangeMax}
              onChange={(e) => {
                setFemaleNormalRangeMax(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">
              Female Normal Range Min{" "}
            </label>
            <input
              type="number"
              className="inputBox "
              value={femaleNormalRangeMin}
              onChange={(e) => {
                setFemaleNormalRangeMin(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Center Text </label>
            <input
              className="inputBox "
              placeholder="Center Text "
              value={centerText}
              onChange={(e) => {
                setCenterText(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Left Text </label>
            <input
              className="inputBox "
              placeholder="Left Text "
              value={leftText}
              onChange={(e) => {
                setLeftText(e.target.value);
              }}
            />
          </div>

          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Below Text </label>
            <input
              className="inputBox "
              placeholder="Below Text "
              value={belowText}
              onChange={(e) => {
                setBelowText(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1">
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

          <div className="flex flex-row justify-center mb-2">
            <div>
              <label class="  normalText mb-0 pb-0">Suggested Values </label>

              {suggestedValues.map((item, index) => {
                return (
                  <div className="flex flex-row items-center">
                    <input
                      className="inputBox "
                      placeholder="Suggested Values  "
                      value={suggestedValues[index].name}
                      onChange={(e) => {
                        let upatedElement = { name: e.target.value };
                        let list = suggestedValues;
                        list[index] = upatedElement;

                        setSuggestedValues((suggestedValues) => [...list]);

                        //  setSuggestedValues(e.target.value);
                      }}
                    />

                    <div
                      className="ml-4 cursor-pointer "
                      onClick={(e) => {
                        let list = suggestedValues;
                        list.splice(index, 1);
                        setSuggestedValues((suggestedValues) => [...list]);
                      }}
                    >
                      X
                    </div>
                  </div>
                );
              })}

              {/* 
<div className="flex flex-row items-center">
                  <input
                    className="inputBox "
                    placeholder="Suggested Values  "
                    // value={suggestedValue}
                    onChange={(e) => {
                      //   setSuggestedValues(e.target.value);
                    }}
                  />

                  <div className="ml-4">X</div>
                </div>; */}

              <div
                className="primaryButton mt-4 col-span-1"
                onClick={() => {
                  addSugestedValues();
                }}
              >
                Add Suggested Value
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <input
              checked={show}
              onChange={(e) => {
                setShow(e.target.checked);
              }}
              type="checkbox"
              class="mb-2"
            />
            <label class="ml-2  py-0 normalText">Show </label>
          </div>
        </div>
        <button type="submit" className="primaryButton mt-4 col-span-1">
          Update Test
        </button>
      </form>
    </div>
  );
};

export default EditTestComponent;
