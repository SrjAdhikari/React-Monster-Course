const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <div>
      <h2>Display Users Data</h2>
      {users.map((user) => (
        <div key={user.id}>
          {`Name: ${user.name}, Age: ${user.age}`}
        </div>
      ))}
    </div>
  )
}

export default UserList
