import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Navbar'

const About = () => (
  <>
    <Header />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div className="about-bg-container">
            {isDarkTheme ? (
              <div className="about-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1>About</h1>
              </div>
            ) : (
              <div className="about-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-image"
                />
                <h1>About</h1>
              </div>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
