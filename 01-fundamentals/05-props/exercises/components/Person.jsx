const Person = (props) => {
  return (
    <div>
      <h2>Person Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Person
