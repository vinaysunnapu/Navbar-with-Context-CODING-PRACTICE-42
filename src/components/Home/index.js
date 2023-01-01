import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Navbar'

const Home = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Header />
            <div className="home-bg-container">
              {isDarkTheme ? (
                <div className="home-dark-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                    alt="home"
                    className="home-image"
                  />
                  <h1>Home</h1>
                </div>
              ) : (
                <div className="home-light-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                    alt="home"
                    className="home-image"
                  />
                  <h1>Home</h1>
                </div>
              )}
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
