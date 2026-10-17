function ChildComponent(props) {
  return (
    <div className="App">
      <span>{props.person.firstName} {props.person.lastName}</span>
    </div>
  );
}

export default ChildComponent;
