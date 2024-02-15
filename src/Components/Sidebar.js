export function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top-bar row'>
                <span>Ahmed</span>
                <span>notifcations</span>
                <span>toggleWindowIcon</span>
            </div>
            <button className='btn add-task row'>
                Add Tasks
            </button>
            <button className='btn search row'>
                Search
                {/* Todo Open Modal when Clicked */}
            </button>
            <ul className='sec filters'>
                <h3>Filters</h3> {/* todo add acorion Features */}
                <li className='row'>Inbox</li>
                <li className='row'>upcoming</li>
                <li className='row'>Today</li>
                <li className='row'>This Week</li>
            </ul>
            <ul className='sec projects'>
                <h3>My Projects</h3>
                <li className='row'>work</li>
                <li className='row'>Life</li>

            </ul>
        </div>
    );
}
