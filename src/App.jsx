/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css'

function App() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content goes here */}
        <div className="overlay-content">
          <div className="top">
<img src="./wizlogo.png" alt="logotxt" />
            <p></p>
          </div>

          <div className="middle">
            <div className="des">
              Our magical world is taking shape
            </div>
            <div className="belowdes">
              -Website under construction-
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
