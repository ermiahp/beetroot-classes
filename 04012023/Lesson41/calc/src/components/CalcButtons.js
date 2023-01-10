function CalcButtons(props) {
  return (
    <div style={{ width: 50, height: 50, display: "flex" }}>
      <button style={{ width: "100%" }}>{props.num}</button>
    </div>
  );
}

export default CalcButtons;
