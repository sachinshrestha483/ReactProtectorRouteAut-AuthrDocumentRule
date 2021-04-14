import IndividualSubTest from "./IndividualSubTest";

const SubtestList = (props) => {
  return (
    <div>
      {props.filteredSubtestList.map((item) => (
        <IndividualSubTest
          subtest={item}
          outsideLabList={props.outsideLabList}
        />
      ))}
    </div>
  );
};

export default SubtestList;
