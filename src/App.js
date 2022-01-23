import React from 'react'

// CSS
import './App.css';

// Pomodoro card
import PomodoroCard from './components/PomodoroCard';

// Pomodoro Tasks
import PomodoroTasks from './components/PomodoroTasks';

// Tasks
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <div className='content'>
        <section className='todo-list'>
          <h3>ToDo List</h3>

          <Tasks />
        </section>
        <section className='pomodoro-container'>
          <h3>Pomodoro Timer</h3>

          <PomodoroCard />

          <div className='tasks'>
            <PomodoroTasks />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
