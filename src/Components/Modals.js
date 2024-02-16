
import { useState } from "react";
import { Tasks } from "./Tasks";
export function AddTaskModal({ status, onAddTask, onCloseModal }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!e.target[0].value) return;
        onAddTask(e.target[0].value);
        e.target.reset();
        // onCloseModal();
    }
    return (
        <form onSubmit={handleSubmit} className={`modal modal-add-task modal-${status} `}>
            <input type='text' placeholder='add task ....' />
            <button className='btn' type='submit'>Add>>>➡️ </button>
            <button className='btn' onClick={onCloseModal}>Close</button>
        </form>
    );
}
export function AddSearchModal({ tasks, status, onCloseModal, onToggleTask }) {
    const [subsequence, setSubsequence] = useState("");
    function handleChangeSubsequence(e) {
        // console.log(e.target.value);
        setSubsequence(e.target.value);
    }
    return (
        <>
            <form className={`modal modal-search modal-${status}`}>
                <input type="search" onChange={handleChangeSubsequence} />
                <Tasks
                    tasks={tasks}
                    finished={2}
                    subsequence={subsequence}
                    onToggleTask={onToggleTask}
                > All Tasks </Tasks>
                <button className='btn' onClick={onCloseModal}>Close</button>
            </form>

        </>);


}

