export function Sidebar({ onOpenAddTaskModal, onOpenSearchModal }) {

    return (
        <div className='sidebar'>
            <TopBar />
            <button onClick={onOpenAddTaskModal} className='btn add-task row'>
                Add Tasks
            </button>
            <button onClick={onOpenSearchModal} className='btn search row'>
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
function TopBar() {
    return <div className='top-bar row'>
        <span>Ahmed</span>
        <span>nt</span>{/**Notification */}
        <span>wnd</span>{/**toggle Windo */}
    </div>;
}
