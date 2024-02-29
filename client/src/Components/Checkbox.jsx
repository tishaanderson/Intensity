import React from 'react';
import { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";


const CardCheckbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return(
  <div className="checkbox-wrapper">
    <label>
      <span>{label}</span>
      <input className={isChecked ? "checked" : ""} type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} {...props} />
      
    </label>
  </div> 
);
};

export default CardCheckbox;