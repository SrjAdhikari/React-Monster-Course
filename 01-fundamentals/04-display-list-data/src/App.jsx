import ProductList from "../exercises/components/ProductList";
import UserList from "../exercises/components/UserList";

const App = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Orange"];
  const usersInfo = [
    {
      username: "HuXn",
      email: "test@gmail.com",
      location: "USA",
    },
    {
      username: "John",
      email: "jd@gmail.com",
      location: "Arab",
    },
    {
      username: "Alex",
      email: "alexmersion@gmail.com",
      location: "India",
    },
  ];

  return (
    <div>
      <h2>Display Fruits Data</h2>
      {fruits.map((fruit) => (
        <ul key={fruit}>
          <li>{fruit}</li>
        </ul>
      ))}

      <h2>Display Users Data</h2>
        {usersInfo.map((user, index) => (
          <ul key={index}>
            <li>Name: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Location: {user.location}</li>
          </ul>
        ))}


        {/* 👇 Exercises */}
        <UserList />
        <ProductList />
    </div>
  )
}

export default App
