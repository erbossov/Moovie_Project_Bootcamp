import Header from "./components/Header/Header";
import "./App.css";
import Slider from "./components/Slider/Slider";
function App(props) {
  return (
    <div className="background">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
