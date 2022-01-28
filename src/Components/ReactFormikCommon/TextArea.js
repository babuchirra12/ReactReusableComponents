import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Form, Row, Col } from "react-bootstrap";

function TextArea(props) {
  const { name, label, labelSm, rows, colSm, className, ...rest } = props;
  return (
    <>
      <Form.Group as={Row} className="md-0">
        <Form.Label column="sm" sm={labelSm}>
          {label}
        </Form.Label>
        <Col sm={colSm}>
          <Field
            as="textarea"
            id={name}
            name={name}
            {...rest}
            rows={rows}
            className="formControl"
          />
          <ErrorMessage component={TextError} name={name} />
        </Col>
      </Form.Group>
    </>
  );
}

export default TextArea;
