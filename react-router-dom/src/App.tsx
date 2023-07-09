import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { route } from './router'

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={route} />
    </React.Fragment>
  )
}

export default App
