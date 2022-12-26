//We mostly use the map function

function App() {
  const names = ["Akshat", "Tushar", "Dhruv", "Prakhar"]
  return (
    <div className='app'>
      {names.map((name, key) => {
        <h1 key={key}> {name} </h1>
      })}
    </div>
  )
}

export default App;

//Example 2: Array contains several objects
function App() {
    const users = [
        {name: "Tushar" , age : 20},
        {name: "Rahul" , age : 25},
        {name: "Abhinav" , age : 18},
    ]
  return (
    <div className='app'>
      {names.map((user) => {
        <div> {user.name} {user.age}</div>
      })}
    </div>
  )
}

export default App
