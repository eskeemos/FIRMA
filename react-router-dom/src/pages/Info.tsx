import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Info = () => {
  const params = useParams();
  return (
    <React.Fragment>
      {params.infoId == "" && (<Navigate to="/" replace={true} />)}
      <h1>Info : {params.infoId}</h1>
    </React.Fragment>
  )
}

export default Info