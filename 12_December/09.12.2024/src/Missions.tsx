import { useEffect, useState } from "react";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
    description?: string;
}

export default function Missions() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function handleAddingForm(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement)
        const title = formData.get('addingTodoName');
        const desc = formData.get('addingTodoDescr') || "";

        setTodos((prev) => [...prev, {
            id: makeID(),
            text: title,
            completed: false,
            description: desc,
        }]);

    }

    function makeID() {
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const newID: string[] = [];
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length); // Generate a random index
            newID.push(letters[randomIndex]); // Pick a letter at the random index and add it to the array
        }
        return newID.join("");
    }

    return (<>
        <form onSubmit={(ev) => handleAddingForm(ev)}>
            <label htmlFor="addingTodoName">add new todo</label>
            <input name="addingTodoName" id="addingTodoName" required />

            <label htmlFor="addingTodoDescr">describe it.</label>
            <input name="addingTodoDescr" id="addingTodoDescr" />
            <button>add</button>
        </form>

        {todos.map(currentTodo => {
            <div id={currentTodo.id + "_Div"}>
                <input type="checkbox" id={currentTodo.text} checked={currentTodo.completed} />
                <span>{currentTodo.text}</span>
                <span className={(currentTodo.description ? "hidden" : "")}>{currentTodo.description}</span>
            </div>
        })}
    </>)
}