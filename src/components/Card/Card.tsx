import React from 'react'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <>
      <div
        className={`mb-6 flex items-center justify-between rounded-xl bg-white p-6 shadow ${className}`}
      >
        {children}
      </div>
    </>
  )
}

export default Card
