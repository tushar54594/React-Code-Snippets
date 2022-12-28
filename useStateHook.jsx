//React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically.

//Example 1
//Counter 
function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      {count}
    </div>
  );
}


//Example 2
//Take information from an input box and display it
function App() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value);   //event.target.value is used to take the current input given by the user
  }

  return (
    <div>
        <input type="text" onChange={handleInputChange}/>
        {inputValue}
    </div>
  )
}


//Example 3
//There is a text on the screen. Create a button which is is used to Show/Hide the text
function App() {
  const [showText, setShowText] = useState(true)

  const toggleText = () => {
    setShowText(!showText)
  }

  return (
    <div>
    {showText && <h1>Hi my name is Tushar</h1>}
    <button onClick={toggleText}>Show/Hide</button>
    </div>
  )
}

