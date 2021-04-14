import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* <h2 className="text-center">Home Page</h2> */}

      <div class="grid  font-bold text-2xl text-white grid-cols-1	md:grid-cols-2  lg:grid-cols-3  gap-4">
        <Link to="/LabSettings" className="pageListItem">
          Test Settings
        </Link>

        <Link to="/LabSettings" className="pageListItem">
          Patients Info
        </Link>
        <Link to="/LabSettings" className="pageListItem">
           Bill And Accounting 
        </Link>
        <Link to="/LabSettings" className="pageListItem">
          Doctor Management 
        </Link>

        <Link to="/LabSettings" className="pageListItem">
          Pathology Lab Settings
        </Link>

        <Link to="/LabSettings" className="pageListItem">
          Bill Settings
        </Link>

        <Link to="/LabSettings" className="pageListItem">
        User Account And Management 
        </Link>

        <div>9</div>
      </div>
    </div>
  );
};

export default HomePage;
