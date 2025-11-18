import React from 'react'

const Button = ({label, variant}) => {


  const baseClasses = "px-6 py-2 rounded-lg font-bold";

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
