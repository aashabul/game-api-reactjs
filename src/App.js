import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import initFirebase from "./firebase/firebase.init";

initFirebase();
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Home />
    </div>
  );
}

export default App;
