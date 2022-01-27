import React from "react";
import { Col, Row, Form } from "react-bootstrap";
const CheckboxComponent = ({
  controlId,
  labelSm,
  labelName,
  colSm,
  label,
  checked,
  handleCheckChange,
  inputValue,
}) => {
  return (
    <>
      <Form.Group as={Row} className="md-2" controlId={controlId}>
        <Form.Label sm={labelSm} column="sm">
          {labelName}
        </Form.Label>
        <Col sm={colSm}>
          <Form.Check
            type="checkbox"
            label={label}
            value={inputValue}
            checked={checked}
            onChange={handleCheckChange}
          />
        </Col>
      </Form.Group>
    </>
  );
};

export default CheckboxComponent;
