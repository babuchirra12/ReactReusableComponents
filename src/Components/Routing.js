// import Login from "../Components/Login/Login";
// import UseLogin from "../Components/Login/useLogin";
import SideNavBarOnclick from "../Components/SideNavbar/sideNavBarOnclick"
function Routing() {
  // const {
  //   loginData,
  //   logOut,
  //   handleChage,
  //   validateForm,
  //   handleSumitClick,
  //   handleFormReset,
  //   loggeIn,
  //   loginError,
  //   error,
  // } = UseLogin();
  return (
    <div className="App">
      <h1>HI</h1>
      {/* <Login
        loginData={loginData}
        logOut={logOut}
        handleChage={handleChage}
        validateForm={validateForm}
        handleSumitClick={handleSumitClick}
        handleFormReset={handleFormReset}
        loggeIn={loggeIn}
        loginError={loginError}
        error={error}
      /> */}
<SideNavBarOnclick/>
    </div>
  );
}

export default Routing;
