import React from "react";

const screenWidth = window.innerWidth;
const isMobile = screenWidth < 768;

const styles = isMobile
  ? {
      counterWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      },
      counterBox: {
        width: "90vw",
        height: "60vh",
        backgroundColor: "white",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      },
      countermain: {
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      countermainHover: {
        backgroundColor: "red",
      },
      countermainButton: {
        backgroundColor: "transparent",
        border: "1px solid #171717",
        width: "50px",
        height: "50px",
        fontSize: "32px",
        alignSelf: "flex-end",
      },
      countermainNumber: {
        fontSize: "32px",
        alignSelf: "flex-start",
      },
    }
  : {
      counterWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      },
      counterBox: {
        width: "300px",
        height: "200px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "16px",
      },
      countermain: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      countermainHover: {
        backgroundColor: "red",
        cursor: "pointer",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      countermainButton: {
        backgroundColor: "transparent",
        border: "1px solid #171717",
        width: "50px",
        height: "50px",
        fontSize: "32px",
      },
    };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      counter: 0,
    };
  }

  onMouseEnter = () => {
    console.log("Mouse Enter");
    this.setState({ hover: true });
  };

  onMouseLeave = () => {
    console.log("Mouse Leave");
    this.setState({ hover: false });
  };

  render() {
    return (
      <div style={styles.counterWrapper}>
        <div style={styles.counterBox}>
          <h1>Counter</h1>
          <p style={{ fontSize: 8 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            voluptatem, itaque sit recusandae reiciendis, quia consectetur amet
            dolores qui deleniti rem explicabo in similique nesciunt ipsa id
            nisi dicta. Accusantium?
          </p>
          <div style={styles.countermain}>
            <button
              style={styles.countermainButton}
              onClick={() => {
                this.setState({ counter: this.state.counter + 1 });
              }}
            >
              +
            </button>
            <span style={styles.countermainNumber}>{this.state.counter}</span>
            <button
              style={styles.countermainButton}
              onClick={() => {
                this.setState({
                  counter: this.state.counter > 0 ? this.state.counter - 1 : 0,
                });
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
