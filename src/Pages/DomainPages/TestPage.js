import { Link } from "react-router-dom";
import AddTestComponent from "../../Components/DomainComponents/TestComponents/AddTestComponent";

const TestPage = () => {
  return (
    <div>
      <div className="pageMargin1">
        <h1 className="primaryHeading text-center       mb-4">Test Page</h1>
        <div className="text-center my-4">
          <Link
            className="primaryButton hover:text-white no-underline	"
            to="/TestListPage"
          >
            Show And Edit Subtest
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-3  grid grid-cols-1    gap-4">
          <div className="col-span-3 ">
            <AddTestComponent />
          </div>
          <div className="    lg:ml-8   ml-0  flex flex-col col-span-1 lg:col-span-2 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
