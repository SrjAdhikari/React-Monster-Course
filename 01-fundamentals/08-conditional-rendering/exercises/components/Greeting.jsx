const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <div>Good Morning!</div>
  ) : (
    <div>Good Afternoon!</div>
  );

  /*
  if(timeOfDay === "morning") {
    return <div>Good Morning!</div>
  }
  else if(timeOfDay === "afternoon") {
    return <div>Good Afternoon!</div>
  }
  else if(timeOfDay === "evening") {
    return <div>Good Evening!</div>
  }
  else {
    return <div>Good Night!</div>
  }
  */
}

export default Greeting
