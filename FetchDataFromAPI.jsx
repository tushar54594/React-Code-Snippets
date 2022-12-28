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

Axios.get("https://catfact.ninja/fact").then((res) => {
  console.log(res.data);
});

