import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Form, Row, Col } from "react-bootstrap";

function CheckBoxes(props) {
  const { label, labeSm, colSm, name, options, ...rest } = props;
  return (
    <div>
      <Form.Group as={Row} className="md-3">
        <Form.label column="sm" sm={labeSm}>
          {label}
        </Form.label>
        <Col sm={colSm}>
          <Field name={name}>
            {({ field }) => {
              return options.map((option) => {
                return (
                  <React.Fragment key={option.key}>
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      {...rest}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />{" "}
                    <label htmlFor={option.value}>{option.key}</label>
                  </React.Fragment>
                );
              });
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </Col>
      </Form.Group>
    </div>
  );
}

export default CheckBoxes;
