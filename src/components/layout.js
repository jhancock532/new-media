import * as React from 'react'
import { Link } from 'gatsby'
import { container, navBar, navItem } from "./layout.module.css";
import Header from './header';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={ container }>
      <title>{pageTitle}</title>
      <Header />
      <nav>
        <ul className={ navBar }>
          <li className={ navItem }><Link to="/">Home</Link></li>
          <li className={ navItem }><Link to="/about">About</Link></li>
          <li className={ navItem }><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout