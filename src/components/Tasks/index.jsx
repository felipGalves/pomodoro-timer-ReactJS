import React, { useState } from 'react'

// CSS
import './index.css'

// Tasks
const tasksList = [
    { id: 1, description: 'Develop a frontend app with ReactJS', checked: false },
    { id: 2, description: 'Develop a backend app with NodeJS', checked: true }
]

export default () => {
    const [tasks, setTasks] = useState(tasksList)

    return (
        <ul>
            {tasks.map(task => (
                <li itemID={task.id}>
                    <button>
                        <input type="checkbox" checked={task.checked} />
                        <label className={task.checked ? 'checked' : ''}>{task.description}</label>
                    </button>
                </li>
            ))}
        </ul>
    )
}