import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';



function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks]= useState([
      {
        id: 1,
        text: 'Idi kod doktora',
        day: 'Ponedeljak u 12.30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Sastanak na poslu',
        day: 'Petak u 17.00',
        reminder: true,
    },
    {
        id: 3,
        text: 'Cas engleskog jezika',
        day: 'Ponedeljak-Petak u 06.00',
        reminder: false,
    }
  ])

  //Add Task

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000)+1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  //Delite Task
  const deliteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  //Toggle reminder

  const toggleReminder= (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  
  return (
    <div className="container">
        <Header title='Task Tracker'
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} 
              onDelite={deliteTask} 
              onToggle={toggleReminder} /> : 'No more tasks'}
    </div>
  );
}

export default App;
