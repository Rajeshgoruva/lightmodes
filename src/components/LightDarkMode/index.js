import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  changemode = () => {
    this.setState(p => ({
      mode: !p.mode,
    }))
  }

  render() {
    const {mode} = this.state
    const classmode = mode ? 'light' : 'dark'
    const text = mode ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="main">
        <div className={`container ${classmode}`}>
          <h1>Click the change mode</h1>
          <button type="button" onClick={this.changemode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
