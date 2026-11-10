function TaskForm({nama, setNama, tugas, setTugas, prioritas, setPrioritas, status, setStatus, submitTask, editId}) {
    return (
        <div className="form-card">
            <h3>{editId ? "Edit Task" : "Tambah Task Baru"}</h3>

            <div className="form-grid">
                <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />

                <input type="text" placeholder="Nama Tugas" value={tugas} onChange={(e) => setTugas(e.target.value)} />

                <select value={prioritas} onChange={(e) => setPrioritas(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                </select>
            </div>

            <button className="save-btn" onClick={submitTask}>
                {editId ? "Update Task" : "Simpan Task"}
            </button>
        </div>
    );
}

export default TaskForm;
