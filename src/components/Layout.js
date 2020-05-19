import React from "react"

import Header from "./Header"
import "../styles/index.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout
