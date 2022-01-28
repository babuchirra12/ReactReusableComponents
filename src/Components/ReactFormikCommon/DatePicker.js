import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Row, Col } from "react-bootstrap";
function DatePicker(props) {
  const { label, name, labelSm, colSm, ...rest } = props;
  return (
    <>
      <Form.Group as={Row} className="md-3">
        <Form.label column="sm" sm={labelSm}>
          {label}
        </Form.label>
        <Col sm={colSm}>
          <Field name={name}>
            {({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  onChange={(val) => setFieldValue(name, val)}
                />
              );
            }}
          </Field>
          <ErrorMessage component={TextError} name={name} />
        </Col>
      </Form.Group>
    </>
  );
}

export default DatePicker;
