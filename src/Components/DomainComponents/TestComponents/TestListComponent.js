import IndividualTestComponent from "./IndividualTestComponent";

const TestlistComponent = (props) => {


  return (
    <div>
      {props.filteredTestList.map((item) => {
        return <IndividualTestComponent    test={item}  />;
      })}
    </div>
  );
};

export default TestlistComponent;
