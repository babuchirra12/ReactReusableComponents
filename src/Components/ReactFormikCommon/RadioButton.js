import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Form, Row, Col } from "react-bootstrap";

function RadioButton(props) {
  const { name, label, labelSm, colSm, options, ...rest } = props;
  return (
    <>
      <Form.Group as={Row} className="md-3">
        <Form.label column="sm" sm={labelSm}>
          {label}
        </Form.label>
        <Col sm={colSm}>
          <Field name={name}>
            {({ field }) => {
              return options.map((option) => {
                return (
                  <React.Fragment key={option.key}>
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />{" "}
                    <label htmlFor={option.value}>{option.key}</label>{" "}
                  </React.Fragment>
                );
              });
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </Col>
      </Form.Group>
    </>
  );
}

export default RadioButton;
