function TaskTable({tasks, search, setSearch, handleEdit, handleDelete}) {
    return (
        <div className="table-card">
            <div className="table-top">
                <div>
                    <h3>Manajemen Tugas</h3>
                    <p>Daftar tugas</p>
                </div>

                <input
                    type="text"
                    placeholder="Cari nama atau tugas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table className="task-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Nama Tugas</th>
                        <th>Prioritas</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="empty-data">
                                Belum ada data tugas
                            </td>
                        </tr>
                    ) : (
                        tasks.map((task, index) => (
                            <tr key={task.id}>
                                <td>{index + 1}</td>

                                <td>{task.nama}</td>

                                <td>{task.tugas}</td>

                                <td>
                                    <span className={`priority ${task.prioritas}`}>{task.prioritas}</span>
                                </td>

                                <td>
                                    <span className={`status ${task.status.replace(/\s/g, "")}`}>{task.status}</span>
                                </td>

                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(task)}>
                                        Edit
                                    </button>

                                    <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable;
