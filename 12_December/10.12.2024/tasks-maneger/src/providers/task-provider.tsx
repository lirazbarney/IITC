import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Task } from "../../types/types.ts"

interface TaskContext {
    tasks: Task[];
    addNewTask: (newTask: Task) => void;
    deleteTask: (taskID: string) => void;
    updateTask: (taskID: string, newTask: Task) => void;
}

// 
export const taskContext = createContext<TaskContext | null>(null);

interface TaskContextProps {
    children: React.ReactNode;
}
// 

export default function TaskProvider({ children }: TaskContextProps) {

    const [tasks, setTasks] = useState<Task[]>([]);

    async function addNewTask(newTask: Task) {
        const { data } = await axios.post("http://localhost:3000/tasks", newTask);
        setTasks((prev) => (prev ? [...prev, data] : [data])); //prev might be empty
    }

    async function deleteTask(taskID: string) {
        await axios.delete(`http://localhost:3000/tasks/${taskID}`);
        setTasks((prev) => prev?.filter((currentTask) => currentTask.id !== taskID) || [])
    }

    async function updateTask(taskID: string, newTask: Task) {
        await axios.put(`http://localhost:3000/tasks/${taskID}`, newTask);
        setTasks((prev) => prev?.map(currentTask => {
            if (currentTask.id === taskID) {
                return newTask;
            } else {
                return currentTask;
            }
        }) || [])
    }

    useEffect(() => {
        const getTasks = async () => {
            const { data } = await axios.get("http://localhost:3000/tasks");
            setTasks(data);
        }

        getTasks();
    }, []);

    return (
        <taskContext.Provider
            value={{
                tasks,
                addNewTask,
                deleteTask,
                updateTask
            }}
        >
            {children}
        </taskContext.Provider>
    );
}

// Custom hook for Auth
export function useAuth() {
    const context = useContext(taskContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}
