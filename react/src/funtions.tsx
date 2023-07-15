import React from 'react'

const today = new Date();

const formatDate = (today: Date) => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today);
}

export default formatDate