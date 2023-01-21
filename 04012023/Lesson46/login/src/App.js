import logo from "./logo.svg";
import "./App.css";
import MyInput from "./Components/Inputs/inputs";
import { isValidElement, useState } from "react";

const userInfo = [
  {
    name: "first_name",
    label: "First Name:",
    type: "text",
  },
  {
    name: "last_name",
    label: "Last Name:",
    type: "text",
  },
  {
    name: "username",
    label: "Username:",
    type: "text",
    hint: "Enter your username",
  },
  {
    name: "email",
    label: "Email:",
    type: "email",
    hint: "Enter your email",
  },
  {
    name: "password",
    label: "Password:",
    type: "password",
    hint: "Enter your password",
  },
];

function App() {
  const [user, setUser] = useState({});

  const sendUser = (e) => {
    e.preventDefault();
    if (isNotValidElement()) return;
  };

  const isNotValidElement = () => {
    for (let i = 0; i < userInfo.length; i++) {
      if (!user[userInfo[i].name]) {
        alert("Please fill all the fields");
        return true;
      }
    }
    return false;
  };

  return (
    <div className="page_wrapper">
      <div className="loggin_box">
        <div className="logo">{JSON.stringify(user)}</div>

        <form className="form" onSubmit={sendUser}>
          <div className="names">
            {[0, 1].map((i) => {
              return (
                <MyInput
                  key={userInfo[i].name}
                  htmlFor={userInfo[i].name}
                  label={userInfo[i].label}
                  name={userInfo[i].name}
                  type={userInfo[i].type}
                  value={user[userInfo[i].name] || ""} // Ex: user[first_name]
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                />
              );
            })}
          </div>

          <div>
            {[2, 3, 4].map((i) => {
              return (
                <MyInput
                  key={userInfo[i].name}
                  htmlFor={userInfo[i].name}
                  label={userInfo[i].label}
                  name={userInfo[i].name}
                  type={userInfo[i].type}
                  hint={userInfo[i].hint}
                  value={user[userInfo[i].name] || ""} // Ex: user[username]
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                />
              );
            })}
          </div>
          <input type="submit" value="Submit" />
        </form>
        <div className="footer"> </div>
      </div>
    </div>
  );
}

export default App;
