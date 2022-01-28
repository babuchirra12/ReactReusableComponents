import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Form, Row, Col } from "react-bootstrap";

function Select(props) {
  const { name, label, labelSm, colSm, className, options, ...rest } = props;
  return (
    <>
      <Form.Group as={Row} className="md-3">
        <Form.Label column="sm" sm={labelSm}>
          {label}
        </Form.Label>
        <Col sm={colSm}>
          <Field
            name={name}
            id={name}
            {...rest}
            className="formControl"
          >
            <option>Select</option>
            {options &&
              options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                );
              })}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </Col>
      </Form.Group>
    </>
  );
}

export default Select;
