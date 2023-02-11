import React from "react";

const Textarea = ({
  labelText,
  children,
  id,
  required,
  clicked,
  iconSrc,
  optionalText,
  wrapperClass,
  ...props
}) => {
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      {labelText && (
        <div className="label-wrapper">
          <label htmlFor={id}>
            {labelText}
            <span>*</span>
          </label>
          <p>{optionalText}</p>
        </div>
      )}
      <div className={`textarea-wrapper ${wrapperClass ? wrapperClass : ""}`}>
        <div className="input-icon">
          <img src={iconSrc} alt="" />
        </div>
        <textarea {...props} id={id} required={required}></textarea>
      </div>
    </>
  );
};

export default Textarea;
