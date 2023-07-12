import {Component} from 'react'
import './index.css'
// Write your code here
class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTimerStarted: false,
      initialTimeInMinutes: 25,
      timeInMinutes: 25,
      timeInSeconds: '00',
    }
  }

  toggleStartPauseText = () => {
    const {isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.timerIntervalId = setInterval(this.countDown, 1000)
    }
    if (isTimerStarted) {
      clearTimeout(this.timerIntervalId)
    }
    this.setState(prevState => ({isTimerStarted: !prevState.isTimerStarted}))
  }

  inCreaseTimer = () => {
    const {isTimerStarted, initialTimeInMinutes} = this.state
    if (!isTimerStarted) {
      const updatedTimeInMinutes = initialTimeInMinutes
      this.setState(prevState => ({
        initialTimeInMinutes: prevState.initialTimeInMinutes + 1,
        timeInMinutes: updatedTimeInMinutes + 1,
      }))
    }
  }

  DecreaseTimer = () => {
    const {isTimerStarted, initialTimeInMinutes} = this.state
    if (!isTimerStarted) {
      const updatedTimeInMinutes = initialTimeInMinutes
      this.setState(prevState => ({
        initialTimeInMinutes: prevState.initialTimeInMinutes - 1,
        timeInMinutes:
          updatedTimeInMinutes > 10
            ? updatedTimeInMinutes - 1
            : `0${updatedTimeInMinutes - 1}`,
      }))
    }
  }

  resetTimer = () => {
    clearTimeout(this.timerIntervalId)
    this.setState({
      isTimerStarted: false,
      initialTimeInMinutes: 25,
      timeInMinutes: 25,
      timeInSeconds: '00',
    })
  }

  countDown = () => {
    let {timeInSeconds, timeInMinutes} = this.state
    if (timeInSeconds === '00') {
      if (timeInMinutes !== '00') {
        timeInSeconds = 13
        if (timeInMinutes > 10) {
          timeInMinutes -= 1
        } else if (timeInMinutes < 11) {
          timeInMinutes = `0${timeInMinutes - 1}`
        }
      } else if (timeInMinutes === '00') {
        clearTimeout(this.timerIntervalId)
        this.setState({
          isTimerStarted: false,
          initialTimeInMinutes: 25,
          timeInMinutes: 25,
          timeInSeconds: '00',
        })
      }
    } else if (timeInSeconds > 10) {
      timeInSeconds -= 1
    } else if (timeInSeconds < 11) {
      timeInSeconds = `0${timeInSeconds - 1}`
    }
    this.setState({timeInSeconds, timeInMinutes})
  }

  render() {
    const {
      isTimerStarted,
      initialTimeInMinutes,
      timeInMinutes,
      timeInSeconds,
    } = this.state
    const startPauseText = isTimerStarted ? 'Pause' : 'Start'
    const playPauseIcon = isTimerStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altForPlayPauseIcon = isTimerStarted ? 'pause icon' : 'play icon'
    const timerStatus = isTimerStarted ? 'Running' : 'Paused'
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

                    <p className="text">{startPauseText}</p>
                  </button>
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
                    <p className="text">Reset</p>
                  </button>
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
