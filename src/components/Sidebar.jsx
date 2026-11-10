function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <h2>TASKFLOW</h2>
                <span>Project Board</span>
            </div>

            <ul>
                <li className="active">Dashboard</li>

                <li>Task Management</li>

                <li>Project Board</li>

                <li>Reports</li>
            </ul>
        </div>
    );
}

export default Sidebar;
