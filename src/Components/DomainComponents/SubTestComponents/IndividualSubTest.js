import { useEffect, useState } from "react";
import EditSubtestComponent from "./EditSubtestComponent";
import { SubtestFunctions } from "../../../Models/Subtest";

const IndividualSubTest = (props) => {
  const [showEditSection, setShowEditSection] = useState(false);

  const [name, setName] = useState("");
  const [isIndividualTest, SetIsIndividualTest] = useState(false);
  const [isOutsideTest, setIsOutsideTest] = useState(false);
  const [cost, setCost] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [outsidelabId, setOutsidelabId] = useState(false);
  const [nameBelowTest, setNameBelowTest] = useState("");
  const [summary, setSummary] = useState("");

  const [showTinyMceTextBox, setshowTinyMceTextBox] = useState(true);

  const loadData = () => {
    setName(props.subtest.name);
    setNameBelowTest(props.subtest.nameBelowTest);
    setOutsidelabId(props.subtest.outsidelabId);
    setSummary(props.subtest.summary);
    SetIsIndividualTest(props.subtest.isIndividualTest);
    setIsOutsideTest(props.subtest.isOutsideTest);
    setCost(props.subtest.cost);
    setMrp(props.subtest.mrp);
  };

  const reloadData = async () => {
    const { GetSubtestById } = SubtestFunctions();
    setshowTinyMceTextBox(false);

    let updatedDoc = await GetSubtestById(
      props.subtest.groupTestId,
      props.subtest.id
    );
    console.log("-----Updated Doc-----");
    console.log("-----Updated Doc-----");

    console.log("-----Updated Doc-----");
    console.log(updatedDoc);
    console.log("-----Updated Doc-----");
    console.log("-----Updated Doc-----");
    console.log("-----Updated Doc-----");

    if (updatedDoc.error == null) {
      setName(updatedDoc.document.name);
      setNameBelowTest(updatedDoc.document.nameBelowTest);
      setOutsidelabId(updatedDoc.document.outsidelabId);
      setSummary(updatedDoc.document.summary);
      SetIsIndividualTest(updatedDoc.document.isIndividualTest);
      setIsOutsideTest(updatedDoc.document.isOutsideTest);
      setCost(updatedDoc.document.cost);
      setMrp(updatedDoc.document.mrp);
    }

    setshowTinyMceTextBox(true);
    setshowTinyMceTextBox(false);
    setshowTinyMceTextBox(true);
    createMarkup();
  };

  useEffect(() => {
    loadData();
  }, []);

  const createMarkup = () => {
    return { __html: summary };
  };

  const GetOutsideLabNameById = (id) => {
    let res = props.outsideLabList.find((item) => item.id == id);
    if (typeof res == "undefined") {
      return null;
    }
    return res.name;
  };

  return (
    <div>
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
                setShowEditSection(!showEditSection);
              }}
              fill="currentColor"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>

          <div className="lg:grid lg:grid-cols-3   grid grid-cols-1 gap-2 lg:gap-4">
            <p className="text-base	text-gray-600 font-bold	">
              Subtest Type-
              {isIndividualTest ? "Individual Test" : "MultipleTest"}
            </p>
            <p className="text-base	text-gray-600 font-bold	">
              Outside Test - {isOutsideTest ? "Yes" : "No"}
            </p>

            {props.subtest.isOutsideTest ? (
              <p className="text-base	text-gray-600 font-bold	">
                Outside Lab Name -{GetOutsideLabNameById(outsidelabId)}
              </p>
            ) : null}

            <p className="text-base	text-gray-600 font-bold	">Cost :{cost} </p>
            <p className="text-base	text-gray-600 font-bold	">Mrp: {mrp}</p>
            <p className="text-base	text-gray-600 font-bold	">
              Name Below Test : {nameBelowTest}
            </p>
          </div>













          <div className="flex flex-col">
            <p className="text-base	text-gray-600 font-bold	text-center ">
              Summary
            </p>
            {showTinyMceTextBox ? (
              <p
                dangerouslySetInnerHTML={createMarkup()}
                className="text-base	text-gray-600 font-bold	text-center "
              ></p>
            ) : null}
          </div>



          
        </div>

        {showEditSection ? (
          <EditSubtestComponent
            subtest={props.subtest}
            reloadData={reloadData}
          />
        ) : null}
      </div>
    </div>
  );
};

export default IndividualSubTest;
