import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/layout.css"

const Layout = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
    }}
  >
    <header
      style={{
        background: "rebeccapurple",
        color: "white",
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      <h1>My Gatsby Contentful Netlify Blog</h1>
      <nav
        styl={{
          display: "flex",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "1rem",
              }}
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
