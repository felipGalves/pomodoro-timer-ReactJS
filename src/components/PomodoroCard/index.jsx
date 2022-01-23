import React from 'react'

// Css
import './index.css'

export default () => {
    return (
        <div className='pomodoro-card'>
            <div className='pomodoro-component'>
              <span>25:00</span>
            </div>

            <div className='pomodoro-sidebar-options'>
              <div>
                <span className='pipe'></span>
                <h3>Develop a frontend app with ReactJS</h3>
              </div>

              <button>Start</button>
            </div>
        </div>
    )
}