import React from 'react'

// Css
import './index.css'

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

// Component icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
    return (
        <>
            <header className='task-list-header'>
                <h3>Pomodoro Tasks</h3>

                <button>
                    Add
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </header>
        </>
    )
}