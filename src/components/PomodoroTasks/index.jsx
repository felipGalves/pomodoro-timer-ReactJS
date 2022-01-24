import React from 'react'

// Css
import './index.css'

// icons
import { faPencilAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

// Component icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const pomodoroTaskList = [
    { 
        id: 1,
        title: "Create git repository",
        completedPom: 2,
        reservedPom: 2,
        completed: true
    },
    { 
        id: 2,
        title: "Create react-app",
        completedPom: 1,
        reservedPom: 2,
        completed: false
    }
]

export default () => {
    const handlePomodoroTaskChange = () => {

    }

    return (
        <>
            <header className='task-list-header'>
                <h3>Pomodoro Tasks</h3>

                <button>
                    Add Task
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </header>
            <ul className='pomodoro-task-list'>
                {pomodoroTaskList.map(pomodoroTask => {
                    return (
                        <li 
                            key={pomodoroTask.id}
                            className={pomodoroTask.completed ? 'task-completed' : 'task-not-completed'}    
                        >
                            <input 
                                type="checkbox" 
                                checked={pomodoroTask.completed} 
                                onChange={handlePomodoroTaskChange}
                                disabled={pomodoroTask.completed}
                            />
                            <label className='pomodoro-task-title'>{pomodoroTask.title}</label>
                            <label>{pomodoroTask.completedPom}/{pomodoroTask.reservedPom}</label>
                            <button className='edit-button'>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </button>
                        </li>
                        )
                    })}
            </ul>
        </>
    )
}