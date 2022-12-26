//Method 1
function App() {
    const age = 17;
  return (
    <div className='app'>
      {age >= 18} ? <h1>You can vote</h1> : <h1>You cannot vote</h1>
    </div>
  )
}

export default App;

//Method 2
