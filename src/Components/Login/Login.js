import React from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import CustoButton from "../ReactBoostrapCommon/ButtonComponent";
import InpuField from "../ReactBoostrapCommon/InputField";

function Login({
  userName,
  password,
  handleSubmiClick,
  validateForm,
  handleChange,
  handleFromReset,
  loginError,
  error,
}) {
  return (
    <div className="LoginMain">
      <Container>
        <div className="wrapper">
          <div className="formContent">
            <Form className="formBox">
              <h5 className="text-center mb-2"> Login </h5>
              <span className="LoginErrorMassage">
                {error} {loginError}
              </span>
              <InpuField
                inputType={"text"}
                controId={"userName"}
                labelSm="4"
                colSm="8"
                fromControlSize="sm"
                value={userName}
                placeholder="User Name"
                handleChange={handleChange}
              />
                <InpuField
                inputType={"text"}
                controId={"password"}
                labelSm="4"
                colSm="8"
                fromControlSize="sm"
                value={password}
                placeholder="password"
                handleChange={handleChange}
              />
              <Row className="mb-3">
                  <Col md={{ span:8, offset:4}} sm={{span:8, offset:4}}>
                      <CustoButton
                      btnName="Submit"
                      size="sm"
                      className=""
                      onClick={handleSubmiClick}
                      />
                       <CustoButton
                      btnName="Reset"
                      size="sm"
                      className=""
                      onClick={handleFromReset}
                      disabled={!validateForm()}
                      />
                  </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
