import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import video from "./assets/background-video.mp4";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <video src={video} autoPlay loop muted width="100%" height="100%" />
      </div>
      <Home />
    </div>
  );
}

export default App;
