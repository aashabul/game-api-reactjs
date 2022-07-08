import "./App.css";
import Banner from "./components/Banner";
import Games from "./components/Games";
import NavBar from "./components/NavBar";
import initFirebase from "./firebase/firebase.init";

initFirebase();
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Games />
    </div>
  );
}

export default App;
