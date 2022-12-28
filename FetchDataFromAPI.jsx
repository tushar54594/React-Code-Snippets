//Method 1: Using the fetch() function
//the fetch function returns a promise 

function App() {
  fetch("https://catfact.ninja/fact")
.then((res) => res.json())
.then((data) => {
  console.log(data)
})
  return (
    <div className="App">
     <button>Generate Cat Fact</button>
     <p> </p>
    </div>
  );
}

//Method 2: Using the Axios Library
// install axios using:
npm install axios

axios.get("https://catfact.ninja/fact").then((res) => {
  console.log(res.data);
});

//We put this inside useEffect since we want to call the API only when the component mounts
function App() {

  const [catFact, setCatFact] = useState("")
  
  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })  
  }, [])
  
  return (
    <div className="App"> 
      <button>Generate Cat Fact</button>
      <p>{catFact} </p>
    </div>
  );
}
//But we know since useEffect will render the component twice because of StrictMode so API is called twice so this is not the recommended way to do it


//Create a button and when we click on it, it displays a new fact
function App() {

  const [catFact, setCatFact] = useState("")

  const fetchCatData = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  }
  
  return (
    <div className="App"> 
      <button onClick={fetchCatData}>Generate Cat Fact</button>
      <p>{catFact} </p>
    </div>
  );
}



