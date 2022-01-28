import React from "react";
import InputField from "./InputField";
import Select from "./Select";
import CheckBox from "./CheckBox";
import DatePicker from "./DatePicker";
import TextArea from "./TextArea";
import RadioButton from "./RadioButton";
function FormController(props) {
  const { control, className, ...rest } = props;
  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormController;
