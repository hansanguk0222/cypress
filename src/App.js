import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import API from "axios";

function App() {
  const [isLogined, setIsLogined] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    pw: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onReset = (e) => {
    setLoginForm({
      email: "",
      pw: "",
    });
  };

  const login = async () => {
    const { data, status } = await API.post("http://localhost:5000/login", {
      email: loginForm.email,
      pw: loginForm.pw,
    });
    console.log(status);
    if (status === 200) {
      onReset();
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  };

  return (
    <div>
      <form className="joinForm">
        <label>
          이메일: <input type="text" name="email" onChange={onChange} />
        </label>
        <label>
          비밀번호: <input type="password" name="pw" onChange={onChange} />
        </label>
      </form>
      <button onClick={login}>제출</button>

      {isLogined && <div className="welcomeBox">환영합니다.</div>}
    </div>
  );
}

export default App;
