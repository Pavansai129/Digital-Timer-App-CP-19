import {Component} from 'react'
import './index.css'
// Write your code here
class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {isPaused: false, timerValue: 25}
  }

  componentDidMount() {
    console.log('component did mount called')
  }

  toggleStartPauseText = () => {
    this.setState(prevState => ({isPaused: !prevState.isPaused}))
  }

  inCreaseTimer = () => {
    this.setState(prevState => ({timerValue: prevState.timerValue + 1}))
  }

  DecreaseTimer = () => {
    this.setState(prevState => ({timerValue: prevState.timerValue - 1}))
  }

  render() {
    const {isPaused} = this.state
    const startPauseText = isPaused ? 'Pause' : 'Start'
    const playPauseIcon = isPaused
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altForPlayPauseIcon = isPaused ? 'play icon' : 'pause icon'
    const timerStatus = isPaused ? 'Running' : 'Paused'
    const {timerValue} = this.state
    return (
      <div className="app-container">
        <div className="digital-timer-container">
          <h1>Digital Timer</h1>
          <div className="timer-and-controls-container">
            <div className="timer-status-bg-image-container">
              <div className="timer-and-timer-status-container">
                <h1 className="time">25:00</h1>
                <p className="time-status">{timerStatus}</p>
              </div>
            </div>
            <div className="timer-controls-container">
              <div className="play-pause-reset-container">
                <div className="start-pause-container">
                  <button
                    className="button"
                    type="button"
                    onClick={this.toggleStartPauseText}
                  >
                    <img
                      src={playPauseIcon}
                      alt={altForPlayPauseIcon}
                      className="image"
                    />
                  </button>
                  <p className="text">{startPauseText}</p>
                </div>
                <div className="reset-container">
                  <button className="button" type="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                      className="image"
                    />
                  </button>
                  <p className="text">Reset</p>
                </div>
              </div>
              <div className="set-timer-limit-container">
                <p className="text">Set Timer Limit</p>
                <div className="timer-limit-control-container">
                  <button
                    onClick={this.DecreaseTimer}
                    type="button"
                    className="button minus"
                  >
                    -
                  </button>
                  <p className="number">{timerValue}</p>
                  <button
                    onClick={this.inCreaseTimer}
                    type="button"
                    className="button plus"
                  >
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
