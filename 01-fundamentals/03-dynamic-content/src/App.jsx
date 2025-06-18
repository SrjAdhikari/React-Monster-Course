import Greeting from "../exercises/components/Greeting";
import ProductInfo from "../exercises/components/ProductInfo";

const App = () => {
  const myName = "Suraj Adhikari";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <div>
      {/* 👇 Dynamic Content or Expressions */}
      <h1>My name is: {myName}</h1>
      <p>2 + 2 = {2 + 2}</p>
      <p>My Friends List: {["Alex", " John", " Mick"]}</p>
      <h3>2 * 2 is: {multiply(2, 2)}</h3>
      <p className={specialClass}>This is a special class</p>


      {/* 👇 Exercises */}
      <Greeting />
      <ProductInfo />
    </div>
  )
}

export default App