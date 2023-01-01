import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isThemeDark, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <nav className="nav-header">
          {isThemeDark ? (
            <div className="nav-content-dark-theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo-image"
              />
              <ul className="home-about-container">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="theme-button"
                onClick={onClickTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          ) : (
            <div className="nav-content-light-theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo-image"
              />
              <ul className="home-about-container">
                <Link to="/">
                  <p>Home</p>
                </Link>
                <Link to="/about">
                  <p>About</p>
                </Link>
              </ul>
              <button
                type="button"
                className="theme-button"
                onClick={onClickTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          )}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
