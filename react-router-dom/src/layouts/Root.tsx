import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components';

const Root = () => {
  return (
    <React.Fragment>
      <h1>Root Layout</h1>
      <Navigation />
      <Outlet />
    </React.Fragment>
  )
}

export default Root