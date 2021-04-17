import { useEffect, useState } from "react";
import EditTestComponent from "./EditTestComponent";
import { TestFunctions } from "../../../Models/Test";
const IndividualTestComponent = (props) => {
  const [name, setName] = useState("");
  const [belowText, SetBelowText] = useState(false);
  const [centerText, setCenterText] = useState(false);
  const [femaleNormalRangeMax, setFemaleNormalRangeMax] = useState(0);
  const [femaleNormalRangeMin, setFemaleNormalRangeMin] = useState(0);
  // const [groupId, setGroupId] = useState(false);
  const [infantNormalRangeMax, setInfantNormalRangeMax] = useState("");
  const [infantNormalRangeMin, setInfantNormalRangeMin] = useState("");
  const [leftText, setLeftText] = useState("");
  const [maleNormalRangeMax, setMaleNormalRangeMax] = useState("");
  const [maleNormalRangeMin, setMaleNormalRangeMin] = useState("");
  const [normalRangeText, setNormalRangeText] = useState("");
  const [show, setShow] = useState(true);
  const [suggestedValues, setSuggestedValues] = useState([]);
  const [summary, setSummary] = useState(true);
  const [unit, setUnit] = useState(true);
  const [showEditTestComponent, setShowEditTestComponent] = useState(false);

  const [groupId, setGroupId] = useState("");
  const [subtestId, setSubtestId] = useState("");
  const [id, setId] = useState("");

  const createMarkup = () => {
    return { __html: summary };
  };

  useEffect(() => {
    setName(props.test.name);
    SetBelowText(props.test.setBelowText);
    setCenterText(props.test.setCenterText);
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
    setId(props.test.id);
  }, []);

  const reloadData = async () => {
    const { GetTestById } = TestFunctions();

    let reloadedTestObj = await GetTestById(groupId, subtestId, id);

    if (reloadedTestObj.error == null && reloadedTestObj.document != null) {
      setName(reloadedTestObj.document.name);
      SetBelowText(reloadedTestObj.document.setBelowText);
      setCenterText(reloadedTestObj.document.setCenterText);
      setFemaleNormalRangeMax(reloadedTestObj.document.femaleNormalRangeMax);
      setFemaleNormalRangeMin(reloadedTestObj.document.femaleNormalRangeMin);
      setInfantNormalRangeMax(reloadedTestObj.document.infantNormalRangeMax);
      setInfantNormalRangeMin(reloadedTestObj.document.infantNormalRangeMin);
      setLeftText(reloadedTestObj.document.leftText);
      setMaleNormalRangeMax(reloadedTestObj.document.maleNormalRangeMax);
      setMaleNormalRangeMin(reloadedTestObj.document.maleNormalRangeMin);
      setNormalRangeText(reloadedTestObj.document.normalRangeText);
      setShow(reloadedTestObj.document.show);
      setSuggestedValues(reloadedTestObj.document.suggestedValues);
      setSummary(reloadedTestObj.document.summary);
      setUnit(reloadedTestObj.document.unit);
    }
  };

  return (
    <div>
      {/* //filteredTestListk */}

      {/* {console.log(props)}
        {console.log(props.filteredTestList)} */}

      <div>
        <div className="bg-gray-100 p-4 my-2">
          <div className="flex flex-row items-center justify-between ">
            <div></div>

            <p className="normalText text-center border-solid border-b-2	 border-gray-300 ">
              {name}
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              onClick={() => {
                setShowEditTestComponent(!showEditTestComponent);
                //      setShowEditSection(!showEditSection);
              }}
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>

          <div className="lg:grid lg:grid-cols-3   grid grid-cols-1 gap-2 lg:gap-4">
            {normalRangeText ? (
              <p className="text-base	text-gray-600 font-bold	">
                Normal Range Text-{normalRangeText}
              </p>
            ) : null}

            {maleNormalRangeMax ? (
              <p className="text-base	text-gray-600 font-bold	">
                Male Normal Range Max - {maleNormalRangeMax}
              </p>
            ) : null}

            {maleNormalRangeMin ? (
              <p className="text-base	text-gray-600 font-bold	">
                Male Normal Range Min -{maleNormalRangeMin}
              </p>
            ) : null}

            {femaleNormalRangeMax ? (
              <p className="text-base	text-gray-600 font-bold	">
                Female Normal Range max - {femaleNormalRangeMax}
              </p>
            ) : null}

            {femaleNormalRangeMin ? (
              <p className="text-base	text-gray-600 font-bold	">
                Female Normal Range Min- {femaleNormalRangeMin}
              </p>
            ) : null}

            {infantNormalRangeMax ? (
              <p className="text-base	text-gray-600 font-bold	">
                Infant Normal Range Max : {infantNormalRangeMax}
              </p>
            ) : null}

            {infantNormalRangeMin ? (
              <p className="text-base	text-gray-600 font-bold	">
                Infant Normal Range Min : {infantNormalRangeMin}
              </p>
            ) : null}

            {leftText ? (
              <p className="text-base	text-gray-600 font-bold	">
                Left Text : {leftText}
              </p>
            ) : null}

            {centerText ? (
              <p className="text-base	text-gray-600 font-bold	">
                Center Text : {centerText}
              </p>
            ) : null}

            {belowText ? (
              <p className="text-base	text-gray-600 font-bold	">
                Below Text : {belowText}
              </p>
            ) : null}

            <p className="text-base	text-gray-600 font-bold	">
              Show : {show ? "True" : "False"}
            </p>

            {unit ? (
              <p className="text-base	text-gray-600 font-bold	">Unit : {unit}</p>
            ) : null}
          </div>

          <div className="flex flex-col">
            <p className="text-base	text-gray-600 font-bold	text-center ">
              Summary
            </p>
            <p
              dangerouslySetInnerHTML={createMarkup()}
              className="text-base	text-gray-600 font-bold	text-center "
            ></p>
          </div>

          <div className="flex flex-col">
            <p className="text-base	text-gray-600 font-bold	text-center ">
              Suggested Value
            </p>
            <div>
              {suggestedValues.map((item) => {
                return (
                  <p 
                  key={item.id}
                  className="text-base	text-gray-600 font-bold	text-center">
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {showEditTestComponent ? <EditTestComponent test={props.test}   reloadData={reloadData}  /> : null}
      </div>
    </div>
  );
};

export default IndividualTestComponent;
