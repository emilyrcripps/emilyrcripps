import React, { useState } from 'react'
import logo from './logo-small.png'
import * as styles from './header.module.scss'
import styled from 'styled-components'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
  right: 50px;

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
  background: #5fc0c5;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  transition: transform 300ms;
  transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};

  @media screen and (max-width: 575px) {
    width: 100vw;
  }
  @media screen and (min-width: 576px) {
    width: 390px;
  }

  ul {
    list-style-type:none;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    transition: all 300ms;
    display:block;
    width:200px;
    padding:15px;
    margin:0px;

    :hover {
      color: #FFF;
      text-decoration: underline;
      text-decoration-thickness: 5px;
      text-decoration-color: #5fc0c5;
      background-color:#000;
    }
  }
`

const LogoImg = styled.img`
  width: 354px;
  height: 354px;
  margin-left:auto;
  margin-right:auto;
  transition: opacity 700ms;
  opacity: ${({isLogoAnimated}) => isLogoAnimated ? "1" : "0"}
`

const LogoCopy = styled.span`
    @media (max-width: 575px) {
      position: relative;
      top:-12%;
    }

    @media (min-width: 576px) {
      position: absolute;
      bottom: 80px;
      right: -145px;
    }

  transition: opacity 700ms;
  opacity: ${({isLogoCopyAnimated}) => isLogoCopyAnimated ? "1" : "0"}
`

const Header = () => {
  const [nav, showNav] = useState(false);

  //const [isLogoAnimated, animateLogo] = useState(false);
  //const [isLogoCopyAnimated, animateLogoCopy] = useState(false);

  //const [isLogoAnimated, animateLogo] = useState(window.sessionStorage.getItem( 'isLogoAnimated' ) || false);
  //const [isLogoCopyAnimated, animateLogoCopy] = useState(window.sessionStorage.getItem( 'isLogoCopyAnimated' ) || false);

  /*if (!isLogoAnimated || isLogoAnimated === false) {
    setTimeout(function() {
      animateLogo(true);
      window.sessionStorage.setItem('isLogoAnimated', true );
    }, 600)
  }*/

  /*if (!isLogoCopyAnimated || isLogoCopyAnimated === false) {
    setTimeout(function() {
      animateLogoCopy(true);
      window.sessionStorage.setItem('isLogoCopyAnimated', true );
    }, 1000)
  }*/

  if (!nav) {
    if (typeof document !== `undefined`) {
      document.querySelector('body').classList.remove(styles.bodyNoScroll);
    }
  }

  let toggleNav = function(show) {
    window.scrollTo(0, 0);

    if (show) {
      if (typeof document !== `undefined`) {
        document.querySelector('body').classList.add(styles.bodyNoScroll);
      }
    } else {
      if (typeof document !== `undefined`) {
        document.querySelector('body').classList.remove(styles.bodyNoScroll);
      }
    }
    

    showNav(show)
  }

  return (
    <div className={styles.erdHeader}>
      <div className="container">
        <div className={styles.erdLogoWrapper}>
          <div className={styles.erdLogoContainer}>
              <Link to="/">
                <LogoImg isLogoAnimated={true}
                    alt="Emily-Rose Design"
                    src={logo}
                />
              </Link>
              <LogoCopy isLogoCopyAnimated={true}>Graphic Design and Illustration</LogoCopy>
          </div>

        </div>
        <MenuIcon nav={nav} onClick={() => toggleNav(!nav)} name="Menu">
            <div />
            <div />
            <div />
          </MenuIcon>
        <MenuLinks nav={nav}>
          <ul>
            <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/">Home</AniLink></li>
            <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/about">About</AniLink></li>
            <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/portfolio">Portfolio</AniLink></li>
            <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/contact">Contact</AniLink></li>
          </ul>
        </MenuLinks>
      </div>
    </div>
  )
}

export default Header