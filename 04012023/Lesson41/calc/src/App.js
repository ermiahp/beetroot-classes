import logo from "./logo.svg";
import "./App.css";
import ClockV2 from "./components/ClockV2";
import Calc from "./components/Calc";
const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
  },
};
function App() {
  const a = 1;
  return (
    <div className="App">
      <header className="App-header">
        <Calc title="Calc" />
      </header>
    </div>
  );
}

export default App;
