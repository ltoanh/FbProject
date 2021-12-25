import React from 'react'
import { useParams } from 'react-router-dom'

function Catalog() {
  const {catalog} = useParams();

  return (
    <div>
      {catalog}    
    </div>
  )
}

export default Catalog
