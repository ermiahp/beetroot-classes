export const useCalculator = (keyPressed) => {
  const isNumber = (key) => {
    return !isNaN(key);
  };

  const isOperator = (key) => {
    return key === "+" || key === "-" || key === "*" || key === "/";
  };

  const isEquals = (key) => {
    return key === "=";
  };

  return { isNumber, isOperator, isEquals };
};
