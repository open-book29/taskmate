import React from 'react'

export default function AddTask({tasklist, setTasklist, task, setTask}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id){
            const date = new Date();
            const updatedTask = tasklist.map((todo) => (
                todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
            ));
            setTasklist(updatedTask);
            setTask({});
        }
        else{
            const date = new Date();
        // console.log(e.target.task.value)
        // console.log(date.getTime())
        const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist, newTask]);
        setTask({});
        }
    }
  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={task.name || ""} autoComplete='false' placeholder='add task' maxLength='25' onChange={e => setTask({...task, name: e.target.value})} />
            <button type='submit'>{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
