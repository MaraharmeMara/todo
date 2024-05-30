import { useState, useEffect } from "react";
import firebase from "../firebase";
import { Calculator } from "react-bootstrap-icons";

export function useTodos(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            console.log("WTF DATA", data)
            setTodos(data)
        })

        return () => unsubscribe()
    }, [todos])

    return todos;
}

export function useProjects(todos){
    const [projects, setProjects] = useState([])

    function calculateNumOfTodos(projectName, todos) {
        if (todos === undefined){
            return
        }
        return todos.filter(todo => todo.projectName === projectName).length
    }

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {

                const projectName = doc.data().name

                return {
                    id : doc.id,
                    name : projectName,
                    numOfTodos : calculateNumOfTodos(projectName, todos)
                }
            })
            console.log("WTF 2 DATA", data)

            setProjects(data)
        })

        return () => unsubscribe()
    }, [projects, todos])

    return projects;
}