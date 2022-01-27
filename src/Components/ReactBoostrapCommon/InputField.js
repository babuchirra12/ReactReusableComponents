import React from "react";
import { Col, Row, Form } from "react-bootstrap";

function InputField({
  controlId,
  labelSm,
  labelName,
  colSm,
  fromControlSize,
  inputType,
  inputValue,
  name,
  placeholder,
  handleChange,
  as,
  rows,
}) {
  return (
    <>
      <Form.Group as={Row} className="md-2" controlId={controlId}>
        <Form.Label sm={labelSm} column="sm">
          {labelName}
        </Form.Label>
        <Col sm={colSm}>
          <Form.Control
            as={as}
            rows={rows}
            size={fromControlSize}
            type={inputType}
            value={inputValue}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </>
  );
}

export default InputField;
