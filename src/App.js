import "./styles.css";
import Pallete from "./Pallete";
import Diagram from "./Diagram";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Pallete />
        <Diagram />
      </div>
    </div>
  );
}
