import { Tasks } from './Tasks';

export function Content({ tasks, onToggleTask }) {
    return (
        <>
            <div className='content'>
                {/* Normal Tasks */}
                <Tasks
                    tasks={tasks}
                    finished={false}
                    onToggleTask={onToggleTask}
                ><h2>Content</h2></Tasks>
                {/* Finished Tasks */}
                <Tasks
                    tasks={tasks}
                    finished={true}
                    onToggleTask={onToggleTask}
                >

                    <h2>Finished</h2>
                </Tasks>
            </div>
        </>

    );
}

