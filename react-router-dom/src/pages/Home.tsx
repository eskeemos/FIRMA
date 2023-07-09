import React, { useState } from 'react'
import { Form, useNavigate, } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [infoId, setInfoId] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/info/${infoId}`);
  }
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit} method='post'>
        <input type="text" name="infoId" onChange={(event) => setInfoId(event.target.value)} />
        <button type="submit">Create</button>
      </Form>
    </React.Fragment>
  )
}

export default Home