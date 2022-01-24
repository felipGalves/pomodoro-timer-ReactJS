import React, { useContext } from 'react'

// Css
import './index.css'

// Components
import PomodoroCard from '../../components/PomodoroCard'
import PomodoroTasks from '../../components/PomodoroTasks'
import Tasks from '../../components/Tasks'

// Selected task
import { SelectedTaskContext } from '../../providers/selectedTask'

export default () => {
    const [selectedTask, setSelectedTask] = useContext(SelectedTaskContext)

    const returnSelectedContext = () => {
        if (selectedTask == undefined)
            return <span>Select an task to start pomodoro</span>

        return (
            <>
                <PomodoroCard />
                <div className='tasks'>
                    <PomodoroTasks />
                </div>
            </>
        )
    }

    return (
        <div className='content-dashboard'>
            <section className='todo-list'>
                <h3>ToDo List</h3>

                <Tasks />
            </section>
            <section className='pomodoro-container'>
                <h3>Pomodoro Timer</h3>

                {returnSelectedContext()}
            </section>
        </div>
    )
}