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
    if (isTimerStarted === true) {
      clearTimeout(this.timerIntervalId)
      console.log('timer stopped')
      this.setState(prevState => ({isTimerStarted: !prevState.isTimerStarted}))
    }
    if (isTimerStarted === false) {
      this.timerIntervalId = setInterval(this.countDown, 1000)
      console.log('timer started')
      this.setState(prevState => ({isTimerStarted: !prevState.isTimerStarted}))
    }
  }

  inCreaseTimer = () => {
    const {isTimerStarted, initialTimeInMinutes} = this.state
    if (isTimerStarted === false) {
      let updatedTimeInMinutes = initialTimeInMinutes
      if (updatedTimeInMinutes >= 0 && updatedTimeInMinutes < 9) {
        updatedTimeInMinutes = `0${updatedTimeInMinutes + 1}`
        this.setState(prevState => ({
          initialTimeInMinutes: prevState.initialTimeInMinutes + 1,
          timeInMinutes: updatedTimeInMinutes,
        }))
      } else if (updatedTimeInMinutes >= 9) {
        updatedTimeInMinutes += 1
        this.setState(prevState => ({
          initialTimeInMinutes: prevState.initialTimeInMinutes + 1,
          timeInMinutes: updatedTimeInMinutes,
        }))
      }
    }
  }

  DecreaseTimer = () => {
    const {isTimerStarted, initialTimeInMinutes} = this.state
    if (isTimerStarted === false) {
      let updatedTimeInMinutes = initialTimeInMinutes
      if (updatedTimeInMinutes > 0 && updatedTimeInMinutes < 11) {
        updatedTimeInMinutes = `0${updatedTimeInMinutes - 1}`
        this.setState(prevState => ({
          initialTimeInMinutes: prevState.initialTimeInMinutes - 1,
          timeInMinutes: updatedTimeInMinutes,
        }))
      } else if (updatedTimeInMinutes > 10) {
        updatedTimeInMinutes -= 1
        this.setState(prevState => ({
          initialTimeInMinutes: prevState.initialTimeInMinutes - 1,
          timeInMinutes: updatedTimeInMinutes,
        }))
      }
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
      if (timeInMinutes === '00') {
        timeInMinutes = 25
        clearTimeout(this.timerIntervalId)
        this.resetTimer()
      } else if (timeInMinutes > 10) {
        timeInMinutes -= 1
        timeInSeconds = 59
      } else if (timeInMinutes >= 0 && timeInMinutes < 11) {
        timeInMinutes = `0${timeInMinutes - 1}`
        timeInSeconds = 59
      }
    } else if (timeInSeconds > 10) {
      timeInSeconds -= 1
    } else if (timeInSeconds >= 0 && timeInSeconds < 11) {
      timeInSeconds = `0${timeInSeconds - 1}`
    }
    this.setState({timeInMinutes, timeInSeconds})
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
