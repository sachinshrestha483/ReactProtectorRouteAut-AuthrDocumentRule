import { useEffect, useState } from "react";
import Subtest from "./../../Models/Subtest";
import { SubtestFunctions } from "./../../Models/Subtest";
import { TestGroupFunctions } from "./../../Models/TestGroup";
import { OutlabFunctions } from "./../../Models/Outlabs";
import SubtestList from "../../Components/DomainComponents/SubTestComponents/SubtestList";

const ViewAndEditSubtestPage = () => {
  const [subTestList, setSubTestList] = useState([]);
  const [groupTestList, setGroupTestList] = useState([]);
  const [selectedGroupTestId, setSelectedGroupTestId] = useState(null);
  const [filteredSubtestList, setFilteredSubtestList] = useState([]);
  const [outLabList, setOutLabList] = useState([]);
  //   const [groupTestList, setGroupTestList] = useState([]);

  useEffect(() => {
    console.log("--------------SubCollection List-------------- ");
    loadGroupTest();
    loadAllSubtests();
    loadAllOutsideTest();
  }, []);

  const loadGroupTest = async () => {
    const { GetTestGroupList } = TestGroupFunctions();
    let list = await GetTestGroupList();
    setGroupTestList(list.documents);
  };

  const loadAllSubtests = async () => {
    const { GetAllSubTest } = SubtestFunctions();

    let list = await GetAllSubTest();
    console.log("--------------SubCollection List-------------- ");
    console.log(list);

    setSubTestList(list);
  };

  const loadAllOutsideTest = async () => {
    const { GetOutLabList } = OutlabFunctions();

    let list = await GetOutLabList();

    setOutLabList(list.documents);
    console.log("----Outlab List----");
    console.log(outLabList);
  };

//   const GetOutsideLabNameById = (id) => {
//     let res = outLabList.find((item) => item.id == id);
//     if (typeof res == "undefined") {
//       return null;
//     }
//     return res.name;
//   };

  const filterSubtestList = (id) => {
    let filteredListl = [];
    if (id != null) {
      filteredListl = subTestList.filter((item) => item.groupTestId == id);
      console.log(filteredListl);

      setFilteredSubtestList(filteredListl);
    }
  };

    //  const createMarkup = (content) => {
    //    return { __html: content };
    //  };

  return (
    <div>
      <div className="pageMargin1">
        <h1 className="primaryHeading text-center mb-4"> Subtest List </h1>
        <h2 className="text-center">{selectedGroupTestId}</h2>
        <select
          className="inputBox  py-0"
          //   value={selectedGroupTestId}

          onChange={(e) => {
            //            setSelectedGroupTestId(e.target.value);
            filterSubtestList(e.target.value);
          }}
        >
          <option>Select The Group Test</option>
          {groupTestList.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>

        <SubtestList
          filteredSubtestList={filteredSubtestList}
          outsideLabList={outLabList}
        />
{/* 
         {filteredSubtestList.map((item) => (
          <div>
            <div className="bg-gray-100 p-4 my-2">
              <p className="normalText text-center border-solid border-b-2	 border-gray-300 ">
                {item.name}
              </p>

              <div className="lg:grid lg:grid-cols-3   grid grid-cols-1 gap-2 lg:gap-4">
                <p className="text-base	text-gray-600 font-bold	">
                  Subtest Type-
                  {item.isIndividualTest ? "Individual Test" : "MultipleTest"}
                </p>
                <p className="text-base	text-gray-600 font-bold	">
                  Outside Test - {item.isOutsideTest ? "Yes" : "No"}
                </p>

                {item.isOutsideTest ? (
                  <p className="text-base	text-gray-600 font-bold	">
                    Outside Lab Name -{GetOutsideLabNameById(item.outsidelabId)}
                  </p>
                ) : null}

                <p className="text-base	text-gray-600 font-bold	">
                  Cost :{item.cost}{" "}
                </p>
                <p className="text-base	text-gray-600 font-bold	">
                  Mrp: {item.mrp}
                </p>
                <p className="text-base	text-gray-600 font-bold	">
                  Name Below Test : {item.nameBelowTest}
                </p>
                <p className="text-base	text-gray-600 font-bold	text-center ">
                  Summary
                </p>
                <p
                  dangerouslySetInnerHTML={createMarkup(item.summary)}
                  className="text-base	text-gray-600 font-bold	text-center "
                ></p>
              </div>
            </div>
          </div>
        ))}  */}





      </div>
    </div>
  );
};

export default ViewAndEditSubtestPage;
