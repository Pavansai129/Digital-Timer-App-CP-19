import {Component} from 'react'
import './index.css'
// Write your code here
class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPaused: false,
      initialTimeInMinutes: 25,
      timeInMinutes: 1,
      timeInSeconds: '00',
      isReset: false,
    }
  }

  componentDidMount() {
    console.log('component did mount called')
  }

  toggleStartPauseText = () => {
    const {isPaused} = this.state
    if (!isPaused) {
      this.timerId = setInterval(this.countDown, 1000)
    } else {
      clearTimeout(this.timerId)
    }
    this.setState(prevState => ({
      isPaused: !prevState.isPaused,
      isReset: false,
    }))
  }

  inCreaseTimer = () => {
    const {isPaused} = this.state
    if (!isPaused) {
      this.setState(prevState => ({
        initialTimeInMinutes: prevState.initialTimeInMinutes + 1,
        isReset: false,
      }))
    }
  }

  DecreaseTimer = () => {
    const {isPaused} = this.state
    if (!isPaused) {
      this.setState(prevState => ({
        initialTimeInMinutes: prevState.initialTimeInMinutes - 1,
        isReset: false,
      }))
    }
  }

  resetTimer = () => {
    const {isReset} = this.state
    clearTimeout(this.timerId)
    if (isReset === false) {
      this.setState(prevState => ({
        isPaused: false,
        isReset: !prevState.isReset,
        initialTimeInMinutes: 25,
        timeInSeconds: '00',
      }))
    }
  }

  countDown = () => {
    const {timeInSeconds, timeInMinutes} = this.state
    let updatedTimeInSeconds
    let updatedTimeInMinutes
    if (timeInMinutes === '00' && timeInSeconds === '00') {
      this.resetTimer()
    } else if (timeInMinutes !== '00' || timeInSeconds !== '00') {
      if (timeInSeconds === '00') {
        updatedTimeInSeconds = 12
        updatedTimeInMinutes = timeInMinutes - 1
      } else {
        updatedTimeInSeconds = timeInSeconds - 1
        if (timeInSeconds === '00') {
          updatedTimeInMinutes = timeInMinutes - 1
        } else {
          updatedTimeInMinutes = timeInMinutes
        }
      }
    }
    this.setState({
      timeInSeconds:
        updatedTimeInSeconds < 10
          ? `0${updatedTimeInSeconds}`
          : updatedTimeInSeconds,
      timeInMinutes: updatedTimeInMinutes,
    })
  }

  render() {
    const {
      isPaused,
      timeInMinutes,
      initialTimeInMinutes,
      timeInSeconds,
    } = this.state
    const startPauseText = isPaused ? 'Pause' : 'Start'
    const playPauseIcon = isPaused
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altForPlayPauseIcon = isPaused ? 'play icon' : 'pause icon'
    const timerStatus = isPaused ? 'Running' : 'Paused'
    return (
      <div className="app-container">
        <div className="digital-timer-container">
          <h1>Digital Timer</h1>
          <div className="timer-and-controls-container">
            <div className="timer-status-bg-image-container">
              <div className="timer-and-timer-status-container">
                <h1 className="time">
                  {timeInMinutes}:{timeInSeconds}
                </h1>
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
                  <button
                    onClick={this.resetTimer}
                    className="button"
                    type="button"
                  >
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
                  <p className="number">{initialTimeInMinutes}</p>
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
