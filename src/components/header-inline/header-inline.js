import React, { useState } from 'react'
import logo from './inline-logo.png'
import * as styles from './header-inline.module.scss'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
    background-color: ${({nav}) => nav ? "#FFF" : "#5fc0c5"};
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

  @media (min-width:1200px) {
      display:none;
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
  width: 168px;
  height: 120px;
  transition: opacity 700ms;
  opacity: ${({isLogoAnimated}) => isLogoAnimated ? "1" : "0"}
`

const LogoCopy = styled.span`
  position: absolute;
  bottom: 10px;
  left: 155px;

  @media (max-width:465px) {
      bottom:25px;
  }

  transition: opacity 700ms;
  opacity: ${({isLogoCopyAnimated}) => isLogoCopyAnimated ? "1" : "0"};

  span.logo-copy-name {
    font-size:20px;
    font-weight: bold;
    font-family: 'Vidaloka', serif;
    color: #706F6F;

    span {
      color: #5fc0c5;
    }
  }

  span.logo-copy-inner {
    font-size:20px;
    display:block;
    color: #706F6F;

    @media (max-width:465px) {
      font-size:15px;
    }
    @media (max-width:400px) {
      font-size:12px;
    }
  }
`

const HeaderInline = () => {
  const [nav, showNav] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagramUrl
          twitterUrl
          linkedInUrl
          wordpressUrl
        }
      }
    }
  `)

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

  function isActive( {isCurrent, isPartiallyCurrent, href} ) {
    if (typeof document !== `undefined` && href === '/' && (isCurrent || isPartiallyCurrent)) {
      if (document.location.pathname !== '/') {
        return null;
      }
    }

    return isCurrent || isPartiallyCurrent ? {className: styles.navActive} : null
  }

  return (
    <div className={styles.erdHeader}>
      <MenuIcon nav={nav} onClick={() => toggleNav(!nav)} name="Menu">
        <div />
        <div />
        <div />
      </MenuIcon>
      <div className="container">
        <div className={styles.erdLogoWrapper}>
          <div className={styles.erdLogoContainer}>
              <Link to="/">
                <LogoImg isLogoAnimated={true}
                    alt="Emily-Rose Design"
                    src={logo}
                />
              </Link>
              <LogoCopy isLogoCopyAnimated={true}>
                <span className="logo-copy-name">Emily-Rose Cripps<span>.</span></span>
                <span className="logo-copy-inner">Graphic Design and Illustration</span>
              </LogoCopy>
          </div>
          <div className={styles.erdInlineNavContainer}>
              <ul>
                <li><Link getProps={isActive} hex="#5fc0c5" duration={0.6} to="/">Home</Link></li>
                <li><Link getProps={isActive} hex="#5fc0c5" duration={0.6} to="/about/">About</Link></li>
                <li><Link getProps={isActive} hex="#5fc0c5" duration={0.6} to="/portfolio/">Portfolio</Link></li>
                <li><Link getProps={isActive} hex="#5fc0c5" duration={0.6} target="_blank" to={data.site.siteMetadata.wordpressUrl}>Blog</Link></li>
                <li><Link getProps={isActive} hex="#5fc0c5" duration={0.6} to="/contact/">Contact</Link></li>
              </ul>
          </div>

        </div>
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

export default HeaderInline