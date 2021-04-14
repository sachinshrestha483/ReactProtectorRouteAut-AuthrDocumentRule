import { useState } from "react";
import EditSubtestComponent from "./EditSubtestComponent";

const IndividualSubTest = (props) => {



const [showEditSection,setShowEditSection] =useState(false);
    const createMarkup = (content) => {
    return { __html: content };
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
              {props.subtest.name}
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              
              
              height="16"
              onClick={()=>{setShowEditSection(!showEditSection)}}
              
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
              {props.subtest.isIndividualTest
                ? "Individual Test"
                : "MultipleTest"}
            </p>
            <p className="text-base	text-gray-600 font-bold	">
              Outside Test - {props.subtest.isOutsideTest ? "Yes" : "No"}
            </p>

            {props.subtest.isOutsideTest ? (
              <p className="text-base	text-gray-600 font-bold	">
                Outside Lab Name -
                {GetOutsideLabNameById(props.subtest.outsidelabId)}
              </p>
            ) : null}

            <p className="text-base	text-gray-600 font-bold	">
              Cost :{props.subtest.cost}{" "}
            </p>
            <p className="text-base	text-gray-600 font-bold	">
              Mrp: {props.subtest.mrp}
            </p>
            <p className="text-base	text-gray-600 font-bold	">
              Name Below Test : {props.subtest.nameBelowTest}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-base	text-gray-600 font-bold	text-center ">
              Summary
            </p>
            <p
              dangerouslySetInnerHTML={createMarkup(props.subtest.summary)}
              className="text-base	text-gray-600 font-bold	text-center "
            ></p>
          </div>
        </div>
      
{showEditSection?<EditSubtestComponent  subtest={props.subtest} />:null}         
      
      </div>
    </div>
  );
};

export default IndividualSubTest;
