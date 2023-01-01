import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <div className="not-found-bg-container">
            {isDarkTheme ? (
              <div className="not-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                  alt="not found"
                  className="not-found-image"
                />
                <h1>Lost Your Way!</h1>
                <p>We cannot seem to find the page</p>
              </div>
            ) : (
              <div className="not-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                  alt="not found"
                  className="not-found-image"
                />
                <h1>Lost Your Way!</h1>
                <p>We cannot seem to find the page</p>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
