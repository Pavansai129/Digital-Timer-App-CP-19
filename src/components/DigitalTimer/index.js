import {Component} from 'react'
import './index.css'
// Write your code here
class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {a: 'b'}
  }

  componentDidMount() {
    console.log('component did mount called')
  }

  render() {
    console.log('render called')
    return (
      <div className="app-container">
        <div className="digital-timer-container">
          <h1>Digital Timer</h1>
          <div className="timer-and-controls-container">
            <div className="timer-status-bg-image-container">
              <div className="timer-and-timer-status-container">
                <h1 className="time">25:00</h1>
                <p className="time-status">Remaining</p>
              </div>
            </div>
            <div className="timer-controls-container">
              <div className="play-pause-reset-container">
                <div className="start-pause-container">
                  <button className="button" type="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play"
                      className="image"
                    />
                  </button>
                  <p className="text">Start</p>
                </div>
                <div className="reset-container">
                  <button className="button" type="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="play"
                      className="image"
                    />
                  </button>
                  <p className="text">Reset</p>
                </div>
              </div>
              <div className="set-timer-limit-container">
                <p className="text">Set Timer Limit</p>
                <div className="timer-limit-control-container">
                  <button type="button" className="button minus">
                    -
                  </button>
                  <p className="number">25</p>
                  <button type="button" className="button plus">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
