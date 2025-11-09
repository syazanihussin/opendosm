import React from 'react'

import { CardProps } from './Card.types'

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow mb-6 flex justify-between items-center">
        {children}
      </div>
    </>
  )
}

export default Card
