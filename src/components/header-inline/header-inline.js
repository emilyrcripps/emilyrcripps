import React, { useState } from 'react'
import logo from './emily-rose-logo.svg'
import * as styles from './header-inline.module.scss'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Location } from '@reach/router';
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      text-decoration-skip-ink: none;
      background-color:#000;
    }
  }
`

const LogoImg = styled.img`
  width: 150px;
  transition: opacity 700ms;
  opacity: ${({isLogoAnimated}) => isLogoAnimated ? "1" : "0"}

  @media (max-width:400px) {
    width: 120px;
  }

  @media (max-width:465px) {
    width: 120px;
  }
`

const LogoCopy = styled.span`
  position: absolute;
  bottom: 10px;
  left: 155px;

  @media (max-width:465px) {
      bottom:35px;
      left: 125px;
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

const ResponsiveLogo = styled.img`
  width: 500px;
  
  @media (max-width: 768px) {
    width: 400px;
  }
`

const SplashOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({show}) => show ? '1' : '0'};
  pointer-events: ${({show}) => show ? 'auto' : 'none'};
`

const SplashContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    max-width: 450px;
  }

  h1 {
    font-family: 'Vidaloka', serif;
    font-size: 2.5rem;
    color: #5fc0c5;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    color: #706F6F;
    line-height: 1.6;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const SplashLogo = styled.img`
  width: 600px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    width: 400px;
  }
`

const ContinueButton = styled.button`
  background: #5fc0c5;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #4a9ba0;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(95, 192, 197, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const HeaderInline = ({ location }) => {
  const [nav, showNav] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          instagramUrl
          twitterUrl
          linkedInUrl
          wordpressUrl,
          etsyUrl
        }
      }
    }
  `)

  // Check if user has already seen the splash screen in this session
  React.useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

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
    if (href === '/' && (isCurrent || isPartiallyCurrent)) {
      if (location.pathname !== '/') {
        return {className: ''};
      }
    }
    
    return isCurrent || isPartiallyCurrent ? {className: styles.navActive} : null
  }

  return (
    <>
      <SplashOverlay show={showSplash}>
        <SplashContent>
          <SplashLogo 
            src={logo}
            alt="Emily-Rose Design"
          />
          <h1>New Branding Coming Soon!</h1>
          <p>
            Emily's exciting new branding and portfolio website will be launching very soon. 
            This current site will be replaced with a fresh, modern design showcasing her latest work.
          </p>
          <p>
            You can continue to browse the current portfolio below, or check back soon for the new experience!
          </p>
          <ContinueButton onClick={handleContinue}>
            Continue to Current Site
          </ContinueButton>
        </SplashContent>
      </SplashOverlay>
      
      <div className={styles.erdHeader}>
        <MenuIcon nav={nav} onClick={() => toggleNav(!nav)} name="Menu">
          <div />
          <div />
          <div />
        </MenuIcon>
        <div className="container">
          <div className={styles.erdLogoWrapper}>
            <div className={styles.erdLogoContainer}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
                  <ResponsiveLogo 
                    src={logo}
                    alt="Emily-Rose Design"
                  />
                </Link>
            </div>
            <div className={styles.erdInlineNavContainer}>
                <ul>
                  <li><Link getProps={isActive} to="/">Home</Link></li>
                  <li><Link getProps={isActive} to="/portfolio/">Portfolio</Link></li>
                  <li><Link getProps={isActive} to="/contact/">Contact</Link></li>
                  <li><Link getProps={isActive} target="_blank" to={data.site.siteMetadata.etsyUrl}><FontAwesomeIcon icon={faShoppingBasket} name="Shop"/> Shop</Link></li>
                </ul>
            </div>

          </div>
          <MenuLinks nav={nav}>
            <ul>
              <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/">Home</AniLink></li>
              <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/portfolio">Portfolio</AniLink></li>
              <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} to="/contact">Contact</AniLink></li>
              <li><AniLink paintDrip hex="#5fc0c5" duration={0.6} target="_blank" to={data.site.siteMetadata.etsyUrl}>Shop</AniLink></li>
            </ul>
          </MenuLinks>
        </div>
      </div>
    </>
  )
}

export default HeaderInline