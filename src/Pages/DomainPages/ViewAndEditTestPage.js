import { useEffect, useState } from "react";
import Subtest from "./../../Models/Subtest";
import { SubtestFunctions } from "./../../Models/Subtest";
import { TestGroupFunctions } from "./../../Models/TestGroup";
import { OutlabFunctions } from "./../../Models/Outlabs";
import SubtestList from "../../Components/DomainComponents/SubTestComponents/SubtestList";
import { TestFunctions } from "./../../Models/Test";

const ViewAndEditTestPage = () => {
  const [subTestList, setSubTestList] = useState([]);
  const [groupTestList, setGroupTestList] = useState([]);
  const [testList, setTestList] = useState([]);
  const [selectedGroupTestId, setSelectedGroupTestId] = useState(null);
  const [filteredSubtestList, setFilteredSubtestList] = useState([]);
  const [outLabList, setOutLabList] = useState([]);

  useEffect(() => {
    //  loadGroupTest();
    //loadAllSubtests();
    // loadAllOutsideTest();
    loadAllTest();
  }, []);

  const loadAllTest = async () => {
    const { GetAllTestList } = TestFunctions();

    let list = await GetAllTestList();
    console.log("-----------------------list---", list);
    console.log(list);

    setTestList(list);
  };

  const loadAllSubtests = async () => {
    const { GetAllSubTest } = SubtestFunctions();

    let list = await GetAllSubTest();
    console.log("--------------SubCollection List-------------- ");
    console.log(list);
    console.log("--------------SubCollection List-------------- ");

    setSubTestList(list);
  };

  const filterTestList = (id) => {
    let filteredListl = [];
    if (id != null) {
      console.log(testList);

      filteredListl = testList.filter((item) => item.subtestId == id);

      console.log(filteredListl);

      setFilteredSubtestList(filteredListl);
    }
  };

  return (
    <div>
      <div className="pageMargin1">
        <h1 className="primaryHeading text-center mb-4"> Test List </h1>
        <h2 className="text-center">{selectedGroupTestId}</h2>
        <select
          className="inputBox  py-0"
          //   value={selectedGroupTestId}

          onChange={(e) => {
            //            setSelectedGroupTestId(e.target.value);
            filterTestList(e.target.value);
          }}
        >
          <option>Select The Group Test</option>
          {subTestList.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>

        {/* <SubtestList
          filteredSubtestList={filteredSubtestList}
          outsideLabList={outLabList}
        /> */}
      </div>
    </div>
  );
};

export default ViewAndEditTestPage;
