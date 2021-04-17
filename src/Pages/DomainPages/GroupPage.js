import GroupTestList from "../../Components/DomainComponents/GroupTestComponents/GroupTestList";
import AddGroupTestComponent from "../../Components/DomainComponents/GroupTestComponents/AddGroupTestComponent";

import { TestGroupFunctions } from "../../Models/TestGroup";
import { useEffect, useState } from "react";

const GroupPage = () => {
  const { GetTestGroupList } = TestGroupFunctions();

  const [groupTestList, setGroupTestList] = useState([]);

  const loadData = async () => {
    const data = await GetTestGroupList();
    console.log(data);
    console.log(data);
    setGroupTestList(data);
  };

  useEffect(() => {
    // Update the document title using the browser API
    loadData();
  }, []);

  return (
    <div>
      <div className="pageMargin1">
        <h1 className="primaryHeading text-center mb-4">Group Page</h1>
        {/* <div className="flex flex-col lg:flex lg:flex-row"> */}
        <div className="lg:grid lg:grid-cols-3  grid grid-cols-1    gap-4">
          <div className="col-span-1 ">
            <div>
              <AddGroupTestComponent loadDatafun={loadData} />
            </div>
          </div>
          <div className="    lg:ml-8   ml-0  flex flex-col col-span-1 lg:col-span-2 mt-4">
            <GroupTestList list={groupTestList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
