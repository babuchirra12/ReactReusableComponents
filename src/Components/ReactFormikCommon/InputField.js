import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Form, Row, Col } from "react-bootstrap";

function InputField(props) {
  const { name, label, labelSm, colSm, className, ...rest } = props;
  return (
    <>
      <Form.Group as={Row} className="md-0">
        <Form.Label column="sm" sm={labelSm}>
          {label}
        </Form.Label>
        <Col sm={colSm}>
          <Field name={name} {...rest} className="formControl" />
          <ErrorMessage component={TextError} name={name} />
        </Col>
      </Form.Group>
    </>
  );
}

export default InputField;