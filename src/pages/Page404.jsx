// import React from 'react'
import { Link } from 'react-router'
const Page404 = () => {
  return (
    <div className="error-page">
    <h1>404</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/">Go back Home</Link>
  </div>
  )
}

export default Page404