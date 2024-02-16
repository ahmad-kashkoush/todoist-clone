import { useState } from 'react';
function isSubsequence(a, b) {
    //check if a is subsequence of b
    if (a.length > b.length) return false;
    let j = 0;

    [...b].forEach(ch => {
        if (ch.tolowerCase() === a[j].toLowerCase()) j++;
        if (j === a.length) return true;
    });

    return j === a.length;


}

export function Tasks({ tasks, finished, subsequence, children, onToggleTask }) {
    if (finished === 2) {
        return (
            <>
                {children}
                <ul className='tasks modal-tasks'>
                    {tasks.map(task => {
                        if (isSubsequence(subsequence, task.text))
                            return <Task
                                key={task.id}
                                task={task}
                                onToggleTask={onToggleTask} />;

                    })}
                </ul>
            </>
        )
    }
    return (
        <>
            {children}
            <ul className='tasks'>
                {tasks.map(task => {
                    if (task.finished === finished)

                        return <Task
                            key={task.id}
                            task={task}
                            onToggleTask={onToggleTask} />;
                })}
            </ul>
        </>);


}
function Task({ task, onToggleTask }) {
    const [status, setStatus] = useState(task.finished);
    function handleToggleTask() {
        onToggleTask(task.id);
        setStatus((cur) => !cur);
    }

    return (
        <li>
            <label htmlFor={`chk${task.id}`}>
                {status ?
                    <input type='checkbox' defaultChecked id={`chk${task.id}`} onChange={handleToggleTask} />
                    :
                    <input type='checkbox' id={`chk${task.id}`} onChange={handleToggleTask} />}

                <span>{task.text}</span>
            </label>
        </li>
    );

}
