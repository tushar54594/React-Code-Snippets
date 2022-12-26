//CSS Modules

//Rename you CSS file(Eg. App.css) to (App.module.css) 
//This will make the css file as css module stylesheet

//Now in the components file do like shown below
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
        <h1 className={styles.name}>Tushar</h1>
    </div>
  );
}

export default App;


