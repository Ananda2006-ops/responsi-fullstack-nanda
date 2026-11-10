import {useState} from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";

function App() {
    const [tasks, setTasks] = useState([]);

    const [nama, setNama] = useState("");
    const [tugas, setTugas] = useState("");
    const [prioritas, setPrioritas] = useState("Medium");
    const [status, setStatus] = useState("To Do");
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);

    const submitTask = () => {
        if (!nama || !tugas) {
            alert("Lengkapi data!");
            return;
        }

        if (editId) {
            setTasks(
                tasks.map((task) =>
                    task.id === editId
                        ? {
                              ...task,
                              nama,
                              tugas,
                              prioritas,
                              status,
                          }
                        : task
                )
            );

            setEditId(null);
        } else {
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    nama,
                    tugas,
                    prioritas,
                    status,
                },
            ]);
        }

        setNama("");
        setTugas("");
        setPrioritas("Medium");
        setStatus("To Do");
    };

    const handleEdit = (task) => {
        setEditId(task.id);
        setNama(task.nama);
        setTugas(task.tugas);
        setPrioritas(task.prioritas);
        setStatus(task.status);
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter(
        (task) =>
            task.nama.toLowerCase().includes(search.toLowerCase()) ||
            task.tugas.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard">
            <Sidebar />

            <div className="main-content">
                <Navbar />

                <TaskForm
                    nama={nama}
                    setNama={setNama}
                    tugas={tugas}
                    setTugas={setTugas}
                    prioritas={prioritas}
                    setPrioritas={setPrioritas}
                    status={status}
                    setStatus={setStatus}
                    submitTask={submitTask}
                    editId={editId}
                />

                <TaskTable
                    tasks={filteredTasks}
                    search={search}
                    setSearch={setSearch}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    );
}

export default App;
