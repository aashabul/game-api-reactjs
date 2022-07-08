import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
