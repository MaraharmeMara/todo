import React, { useState } from 'react';
import Modal from './Modal';
import TodoForm from './ToDoForm';


function AddNewToDo() {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const projects = [
        { id: 1, name: "personal", numOfTodos: 0 },
        { id: 2, name: "work", numOfTodos: 1 },
        { id: 3, name: "other", numOfTodos: 2 },
    ]

function handleSubmit(e) {

}

    return (
        <div className='addNewToDo'>
            <div className='btn'>
                <button onClick={() => setShowModal(true)}>
                    + New ToDo
                </button>
            </div>
            
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm
                    handleSubmit={handleSubmit}
                    heading='Add New To Do'
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    projects={projects}
                    showButtons={true}
                    showModal={showModal}
                />
            </Modal>
        </div>

    )
}
export default AddNewToDo;