import React from 'react'

// Css
import './index.css'

// Components
import PomodoroCard from '../../components/PomodoroCard'
import PomodoroTasks from '../../components/PomodoroTasks'
import Tasks from '../../components/Tasks'

// Selected task
import { useSelectedTask } from '../../hooks/useSelectedTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCog, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

export default () => {
    const [selectedTask, setSelectedTask] = useSelectedTask()

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
            <div className='pomodoto-content'>
                <section className='todo-list'>
                    <h3>ToDo List</h3>

                    <Tasks />
                </section>
                <section className='pomodoro-container'>
                    <h3>Pomodoro Timer</h3>

                    {returnSelectedContext()}
                </section>
            </div>

            <div className='footer-menu'>
                <div className='config'>
                    <button>
                        <FontAwesomeIcon icon={faCog} />
                    </button>
                </div>

                <div className='nav-items'>
                    <ul className='list-items'>
                        <li className='nav-item-selected'>
                            <button>
                                <FontAwesomeIcon icon={faTachometerAlt} />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FontAwesomeIcon icon={faChartBar} />
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='logout'>
                    <button>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>
            </div>
        </div>
    )
}