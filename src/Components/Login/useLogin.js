import { useState } from "react";
const UseLogin = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loggeIn, setLoggedIn] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const handleChage = (e) => {
    const { id, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  function validateForm() {
    return loginData.userName.length > 0 && loginData.password.length > 0;
  }
  const handleSumitClick = (e) => {
    if (loginData.userName === "" || loginData.password === "") {
      setError("Fields are required");
      setLoginError(false);
    }
    if (loginData.userName === "Admin" || loginData.password === "Admin@123") {
      setLoggedIn(true);
      setError(false);
      setLoginError(false);
    } else {
      setLoginError("Invalid userName or password massage");
      setError(false);
    }
  };
  const handleFormReset = (e) => {
    e.prevenDefault();
    setLoginData(null);
  };
  const logOut = () => {
    setLoggedIn(true);
  };

  return {
    loginData,
    logOut,
    handleChage,
    validateForm,
    handleSumitClick,
    handleFormReset,
    loggeIn,
    loginError,
    error,
  };
}

export default UseLogin;
