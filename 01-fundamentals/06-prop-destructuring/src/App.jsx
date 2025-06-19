import Person from "../exercises/components/Person"
import Product from "../exercises/components/Product"

//* App (Parent) Component To Render Child Components
const App = () => {
  return (
    <div>
      {/* 👇 Passing props to User Component */}
      <User 
        img = "https://avatars.githubusercontent.com/u/55469339?v=4"
        name = "Suraj"
        age = {25}
        hobbies = {["Ccodinng ", "Reading ", "Sleeping"]}
      />


      {/* 👇 Exercises */}

      {/* Passing props to Person */}
      <Person name="John Doe" age={28} />
      <Person name="Jane Smith" age={32} />


      {/* Passing props to Product */}
      <Product name="Laptop" price="$1200" />
      <Product name="Smartphone" price="$699" />
    </div>
  );
}


//* Child Component that receives props as its parameter.
const User = ({ img, name, age, hobbies }) => {
  return (
    <div>
      <img src={img} alt={name} width={150}/>
      <br />
      <strong>Name: {name}</strong><br />
      <strong>Age: {age}</strong><br />
      <strong>Hobbies: {hobbies}</strong>
    </div>
  )
}

export default App
