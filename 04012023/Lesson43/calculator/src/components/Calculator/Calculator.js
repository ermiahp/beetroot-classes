import "./Calculator.scss";
import { useState } from "react";
import { useCalculator } from "../../hooks/utils";

const KEYS = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["C", 0, "=", "/"],
];

function Calculator() {
  const { isOperator, isNumber, isEquals } = useCalculator();

  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [resultReady, setResultReady] = useState(false);

  const btnClicked = (key) => {
    console.log(key);
    if (resultReady) return;
    if (operator !== null && firstOperand !== null && isOperator(key)) return;

    if (key === "=") {
      const secondOperand = display;
      setDisplay(eval(firstOperand + operator + secondOperand));
      setOperator(null);
      setFirstOperand(null);
      setResultReady(true);
      return;
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
      setOperator(key);
      setFirstOperand(display);
      setDisplay("");
      return;
    }
    if (display === "0" && key === 0) return;
    if (display === "0" && key !== 0) return setDisplay(key.toString());
    setDisplay(display + key);
  };

  const clear = () => {
    setDisplay("0");
    setOperator(null);
    setFirstOperand(null);
    setResultReady(false);
  };

  return (
    <div className="calculator">
      <div className="calculator__display">{display}</div>
      <div className="calculator__keys">
        {KEYS.map((row, i) => (
          <div className="calculator__row" key={i}>
            {row.map((key, j) => {
              if (key === "C") {
                return (
                  <div
                    className="calculator__key calculator__key--clear"
                    key={j}
                    onClick={clear}
                  >
                    {key}
                  </div>
                );
              } else {
                return (
                  <div
                    className="calculator__key"
                    key={j}
                    onClick={() => btnClicked(key)}
                  >
                    {key}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
