// React components use props to communicate with each other. 
// Every parent component can pass some information to its child components by giving them props. 
// Props might remind you of HTML attributes, but you can pass any JavaScript value through them, 
// including objects, arrays, and functions.


import Person from "../exercises/components/Person";
import Product from "../exercises/components/Product";

//* App (Parent) Component To Render Child Components
const App = () => {
  return (
    <div>
      {/* 👇 Passing props to User Component */}
      <User
        img = "https://avatars.githubusercontent.com/u/55469339?v=4"
        name = "Srj Adhikari"
        age = {25}
        hobbies = {["Coding", "Reading", "Sleeping"]}
      />


      {/* 👇 Exercises */}

      {/* 👇 Passing props to Person Component */}
      <Person name = "Suraj" age = {25} />

      {/* 👇 Passing props to Product Component */}
      <Product name = "Smart Phone" price = "$999" />
    </div>
  );
}


//* Child Component that receives props as its parameter.
const User = (props) => {
  return (
    <section>
      <img src = {props.img} alt = {props.name} width={150}/>
      <h1>name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Hobbies: {props.hobbies}</h3>
    </section>
  );
}

export default App
