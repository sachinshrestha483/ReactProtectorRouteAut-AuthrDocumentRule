import IndividualSubTest from "./IndividualSubTest";

const SubtestList = (props) => {
  return (
    <div>
      {props.filteredSubtestList.map((item) => (
        <IndividualSubTest
        key={item.id}
          subtest={item}
          outsideLabList={props.outsideLabList}
        />
      ))}
    </div>
  );
};

export default SubtestList;
