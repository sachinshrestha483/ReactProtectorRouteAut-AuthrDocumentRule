import IndividualGroupTest from "./IndividualGroupTest";

const GroupTestList = (props) => {
  return (
    <div>
      {props.list.map((item) => {
        return <IndividualGroupTest  key={item.id}  item={item}  />;
      })}
    </div>
  );
};

export default GroupTestList;
