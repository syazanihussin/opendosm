import React from 'react'

const Button = ({label, variant="primary"}) => {


  const baseClasses = "px-6 py-2 rounded-lg font-medium";

  const variantClasses = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-black",
    danger: "bg-red-600 text-white",
  };

  return (
   <>
        <button className={`${baseClasses} ${variantClasses[variant]}`}>
        {label}
        </button>   
    
    </>
  )
}

export default Button;
