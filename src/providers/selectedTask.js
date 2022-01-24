import React, { createContext, useState } from 'react'

export const SelectedTaskContext = createContext({})

export const SelectedTaskProvider = props => {
    const [selectedTask, setSelectedTask] = useState(undefined)

    return (
        <SelectedTaskContext.Provider value={[ selectedTask, setSelectedTask ]}>
            {props.children}
        </SelectedTaskContext.Provider>
    )
}