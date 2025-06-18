const Greeting = () => {
  const greeting = (name) => {
    return`Hello ${name}.`;
  }

  const currentDate = new Date();

  return (
    <div>
      <h1>{greeting("John")}</h1>
      <p>Current Date: {currentDate.getDate()}</p>
    </div>
  )
}

export default Greeting
