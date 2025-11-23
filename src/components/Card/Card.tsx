import React from 'react'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <>
      <div
        className={`bg-white p-6 rounded-xl shadow mb-6 flex justify-between items-center ${className}`}
      >
        {children}
      </div>
    </>
  )
}

export default Card
