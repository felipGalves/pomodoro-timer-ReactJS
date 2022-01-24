import React, { useEffect, useState } from 'react'

// Selected task
import { useSelectedTask } from '../../hooks/useSelectedTask'

// CSS
import './index.css'

// Tasks
const tasksList = [
    { 
        id: 1, 
        description: 'Develop a frontend app with ReactJS', 
        checked: false 
    },
    { 
        id: 2, 
        description: 'Develop a backend app with NodeJS', 
        checked: true 
    }
]

export default () => {
    // Tasks
    const [tasks, setTasks] = useState([])

    // Selected task
    const [selectedTask, setSelectedTask] = useSelectedTask()

    // Trigger on component mount
    useEffect(() => {
        setTasks(tasksList)
    }, [])

    const handleTaskChange = _ => {
        // Make a update on firebase task's schema
    } 

    const handleTaskClicked = task => {
        setSelectedTask(task)
    }

    return (
        <ul>
            {tasks?.map(task => (
                <li 
                    key={task.id}
                >
                    <button onClick={handleTaskClicked(task)}>
                        <input type="checkbox" checked={task.checked} onChange={handleTaskChange} />
                        <label className={task.checked ? 'checked' : ''}>{task.description}</label>
                    </button>
                </li>
            ))}
        </ul>
    )
}