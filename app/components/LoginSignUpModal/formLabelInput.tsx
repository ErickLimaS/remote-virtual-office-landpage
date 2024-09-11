import React from "react";

function FormLabelInput({
  type,
  name,
  labelName,
  required,
}: {
  type: React.HTMLInputTypeAttribute | undefined;
  labelName: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col">
      {labelName}
      <input type={type} name={name} required={required} className="px-2 py-1 border-[1px] border-font_black rounded-sm "/>
    </label>
  );
}

export default FormLabelInput;
