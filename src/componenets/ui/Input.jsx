// src/components/ui/input.jsx
import React from 'react';

const Input = ({ type = 'text', placeholder = '', ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...props}
      className="border p-2 rounded w-full"
    />
  );
};

export default Input;
