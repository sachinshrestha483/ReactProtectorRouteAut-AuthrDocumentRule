import { Link } from "react-router-dom";

const LabSettings = () => {
  return (
    <div>
      <div class="grid  font-bold text-2xl text-white grid-cols-1	md:grid-cols-2  lg:grid-cols-3  gap-4">
        <Link
to="/GroupPage"
          className="pageListItem"
        >
          Lab Group  Test Settings
        </Link>
        <Link
        to="/SubtestPage"
          className="pageListItem"
        >
          Lab  SubTest Settings
        </Link>
        <Link
        to="/TestPage"
          className="pageListItem"
        >
          Lab Test Settings
        </Link>
        <a
          className="pageListItem"
        >
          Doctor Settings
        </a>
        <a
          className="pageListItem"
        >
          Pathology Lab Setting
        </a>
        <a
          className="pageListItem"
        >
          Bill Settings
        </a>
      </div>
    </div>
  );
};

export default LabSettings;
