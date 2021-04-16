import { useEffect, useState } from "react";
import { SubtestFunctions } from "../../../Models/Subtest";
import { TestGroupFunctions } from "../../../Models/TestGroup";
import { Editor } from "@tinymce/tinymce-react";
import Test from "../../../Models/Test";
import { TestFunctions } from "../../../Models/Test";

const AddTestComponent = () => {
  const [subTestList, setSubtestList] = useState([]);
  const [groupTestList, setGroupList] = useState([]);
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
  const [groupId, setGroupId] = useState("");
  const [show, setShow] = useState(false);

  const [subtestId, setSubtestId] = useState(0);

  const [suggestedValues, setSuggestedValues] = useState([{ name: "sdd" }]);

  const AddTestfunction = async () => {
    const { AddTest } = TestFunctions();

    const testObject = new Test();

    let subtestObject = subTestList.find((item) => item.id == subtestId);

    console.log("-------subtest object----------");
    console.log(subtestObject);
    console.log("-------subtest object----------");

    if (subtestObject == null) {
      console.log("-----function return-----");
      return;
    }

    setGroupId(subtestObject.groupTestId);

    console.log("---------Added in Group----------");

    console.log("Group Id");

    console.log(groupId);

    console.log("Subtest Id");

    console.log(subtestId);

    console.log("---------Added in Group----------");

    testObject.belowText = belowText;
    testObject.centerText = centerText;
    testObject.femaleNormalRangeMax = femaleNormalRangeMax;
    testObject.femaleNormalRangeMin = femaleNormalRangeMin;
    testObject.groupId = groupId;
    testObject.infantNormalRangeMax = infantNormalRangeMax;
    testObject.infantNormalRangeMin = infantNormalRangeMin;
    testObject.leftText = leftText;
    testObject.maleNormalRangeMax = maleNormalRangeMax;
    testObject.maleNormalRangeMin = maleNormalRangeMin;
    testObject.name = name;
    testObject.normalRangeText = normalRangeText;
    testObject.show = show;
    testObject.subtestId = subtestId;
    testObject.suggestedValues = suggestedValues;
    testObject.summary = summary;
    testObject.unit = unit;

    await AddTest(groupId, subtestId, testObject);
  };

  const loadGroupTests = async () => {
    const { GetTestGroupList } = TestGroupFunctions();
    let list = await GetTestGroupList();
    setGroupList(list.documents);
  };

  const loadSubtests = async () => {
    const { GetAllSubTest } = SubtestFunctions();
    let list = await GetAllSubTest();
    setSubtestList(list);
  };

  const getGroupTestIdById = (id) => {
    let groupTest = groupTestList.find((item) => item.id == id);
    // console.log("--------------------------");
    // console.log(groupTest);
    // console.log("--------------------------");

    if (groupTest == null) {
      return null;
    }

    return groupTest.id;
  };

  const getGroupTestNameById = (id) => {
    let groupTest = groupTestList.find((item) => item.id == id);
    // console.log("--------------------------");
    // console.log(groupTest);
    // console.log("--------------------------");

    if (groupTest == null) {
      return null;
    }

    return groupTest.name;
  };

  const handleEditorChange = (e) => {
    // setSummary(e.target.getContent());
    console.log("Content was updated:", e.target.getContent());
    setSummary(e.target.getContent());
  };

  const addSugestedValues = () => {
    console.log("---------------------");
    console.log(suggestedValues);
    console.log("---------------------");

    setSuggestedValues((suggestedValues) => [
      ...suggestedValues,
      { name: "jhjhj" },
    ]);
  };

  useEffect(() => {
    loadGroupTests();

    loadSubtests();

    console.log("------Suggested Values--------");
    console.log("------Suggested Values--------");
    console.log("------Suggested Values--------");
    console.log("------Suggested Values--------");
    console.log(suggestedValues);
    console.log("------Suggested Values--------");
    console.log("------Suggested Values--------");
    console.log("------Suggested Values--------");
    console.log("------Suggested Values--------");
  }, []);

  return (
    <div>
      {/* <div className="lg:fixed lg:w-60	"> */}

      <div className="secondaryText text-center">Add Test</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddTestfunction();
        }}
      >
        <div className=" lg:grid lg:grid-cols-3 lg:gap-4	  ">
          <div className="col-span-1">
            <label class="  normalText mb-0 pb-0">Select Sub test </label>

            <select
              required
              className="inputBox  py-0"
              value={subtestId}
              onChange={(e) => setSubtestId(e.target.value)}
            >
              <option value="">Select The Subtest Test</option>
              {subTestList.map((item) => {
                return (
                  <option value={item.id}>
                    {item.name}({getGroupTestNameById(item.groupTestId)})
                  </option>
                );
              })}
            </select>
          </div>

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
            <label class="ml-2  py-0 normalText">Outside Test </label>
          </div>
        </div>
        <button type="submit" className="primaryButton mt-4 col-span-1">
          Add Test
        </button>
      </form>
    </div>
  );
};

export default AddTestComponent;
