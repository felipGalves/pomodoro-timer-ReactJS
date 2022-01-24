import React, { useContext } from 'react'
import { SelectedTaskContext } from '../context/SelectedTaskContext'

export function useSelectedTask() {
    const [selectedTask, setSelectedTask] = useContext(SelectedTaskContext)

    return [selectedTask, setSelectedTask]
}