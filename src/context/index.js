import React, { createContext, useState} from "react";

const TodoContext = createContext()

function TodoContextProvider({ children }) {
    const defaultProject = 'today'

    const [selectedProject, setSelectedProject] = useState(defaultProject)

    return (
        <TodoContextProvider value={
            {
                selectedProject,
                setSelectedProject
            }
        }
        >
            {children}
        </TodoContextProvider>
    )
}

export { TodoContextProvider, TodoContext}