import "./App.css";
import Service from "./component/Services/Sernice";
import Sernice from "./component/Services/Sernice";
import Header from "./Home/Header/Header";
import Slider from "./Home/Silider/Slider";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Service></Service>
    </div>
  );
}

export default App;
