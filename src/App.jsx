import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts';
import TodoItem from './components/todoitem';
import TodoForm from './components/todoForm';

function App() {
    const [todos, settodos] = useState([]);
    const addTodo = (todo) => {
        if(todo.todo.length>0)
        settodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
        else alert("empty ! ");
    }
    const updateTodo = (id, todo) => {
        settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }
    const deleteTodo = (id) => {
        settodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
    }
    const toggleComplete = (id) => {
        settodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, complete: !prevTodo.complete } : prevTodo));
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
           settodos(todos)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])






    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">TO Do LIST</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                            <div key={todo.id}>
                            <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App
