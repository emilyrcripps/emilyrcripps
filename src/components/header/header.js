import React, { useState } from 'react'
import logo from './logo-small.png'
import * as styles from './header.module.scss'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 200;

  position: absolute;
  top: 30px;
  right: 10px;

  div {
    width: 1.5rem;
    height: 0.22rem;
    background-color: #FFF;
    border-radius: 5px;
    transform-origin: 1px;

    :first-child {
      transition: transform 300ms;
      transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0deg)"}
    }

    :nth-child(2) {
      transition: opacity 300ms;
      opacity: ${({nav}) => nav ? "0" : "1"}
    }

    :nth-child(3) {
      transition: transform 300ms;
      transform: ${({nav}) => nav ? "rotate(-45deg)" : "rotate(0deg)"}
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background: #000;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  transition: transform 300ms;
  transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};

  ul {
    list-style-type:none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: #FFF;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: #5fc0c5;
    }
  }
`

const Header = () => {

  const [nav, showNav] = useState(false);

  return (
    <div className={styles.erdHeader}>
      <div className="container">
        <div className={styles.erdLogoWrapper}>
          <div className={styles.erdLogoContainer}>
              <Link to="/">
                <img
                    className={styles.erdLogo}
                    alt="Emily-Rose Design"
                    src={logo}
                />
              </Link>
              <span className={styles.erdLogoCopyDesktop}>Graphic Design and Illustration</span>
          </div>
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </MenuIcon>
        </div>
        <MenuLinks nav={nav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </MenuLinks>
      </div>
    </div>
  )
}

export default Header