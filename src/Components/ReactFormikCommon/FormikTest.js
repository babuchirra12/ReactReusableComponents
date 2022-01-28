import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import FromController from "./FormController";
function FormikTest(props) {
  const choices = [
    { key: "choice a", value: "chaice1" },
    { key: "choice a", value: "chaice2" },
  ];
  const radioOptions = [
    { key: "choice R", value: "chaice R" },
    { key: "choice R1", value: "chaice Ra" },
  ];
  const checkBoxOptions = [
    { key: "choice Ch", value: "chaice Ch" },
    { key: "choice Ch1", value: "chaice Ch1" },
  ];

  const initialValues = {
    name: "",
    email: "",
    selectChoice: "",
    RadioOption: "",
    description: "",
    checkboxOption: [],
    birthDate: null,
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().required("Required"),
    selectChoice: yup.string().required("Required"),
    RadioOption: yup.string().required("Required"),
    description: yup.string().required("Required"),
    checkboxOption: yup.array().required("Required"),
    birthDate: yup.date().required("Required").nulllabel,
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ error, touched }) => (
          <Form>
            <Container>
              <Row>
                <Col xs={6}>
                  <FromController
                    control="input"
                    type="text"
                    label="Name"
                    labelSm="4"
                    colSm="6"
                  />
                    <FromController
                    control="input"
                    type="email"
                    label="Email"
                    labelSm="4"
                    colSm="6"
                  />
                  <FromController
                    control="select"                  
                    label="Selct your choice"
                    name="selectChoice"
                    options={choices}
                    labelSm="4"
                    colSm="6"
                  />
                    <FromController
                    control="textArea"                  
                    label="Description"
                    name="description"
                    options={choices}
                    labelSm="4"
                    colSm="6"
                    rows="2"
                  />
                   <FromController
                    control="radio"                  
                    label="Radio topics"
                    name="radioOptions"
                    options={radioOptions}
                    labelSm="4"
                    colSm="6"
                  />
                   <FromController
                    control="checkbox"                  
                    label="CheckBox topics"
                    name="checkboxOption"
                    options={checkBoxOptions}
                    labelSm="4"
                    colSm="6"
                  />
                     <FromController
                    control="date"                  
                    label="Pick a date"
                    name="birthDate"                    
                    labelSm="4"
                    colSm="6"
                   
                  />
                </Col>
              </Row>
              <Col md={{span:4, offset:2}}>
              <button type="submit">Submit</button>
              </Col>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormikTest;
