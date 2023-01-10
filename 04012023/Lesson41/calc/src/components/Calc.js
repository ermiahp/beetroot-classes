import { useState } from "react";
import CalcButtons from "./CalcButtons";
const styles = {
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    backgroundColor: "lightblue",
  },
  buttons: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
const Calc = ({ title }) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1 onClick={() => setValue(value + 1)}>{title}</h1>
      <div style={styles.box}>
        {value}
        <div style={styles.buttons}>
          {[...Array(11)].map((item, index) => (
            // <CalcButtons num={index} />
            <div style={{ width: 50, height: 50, display: "flex" }}>
              <button style={{ width: "100%" }}>{props.num}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calc;
