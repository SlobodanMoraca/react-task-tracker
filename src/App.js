import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import About from "./components/About";


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks]= useState([ ]);

  useEffect(() =>{
    fetch('https://react-task-tracker-77f9f-default-rtdb.firebaseio.com/tasks.json'
    ).then (res =>{
      return res.json();
    }).then(data =>{
      const takks= [];

      for(const key in data){
        const takk ={
          id: key,
          ...data[key]
        };

        takks.push(takk)
      }
      setTasks(takks)
    });
  }, []);



  //Add Task

  const addTask = (task) =>{
    fetch ('https://react-task-tracker-77f9f-default-rtdb.firebaseio.com/tasks.json',
    {
      method: 'POST',
      body: JSON.stringify(task),
      headers:{   
          'Content-Type': 'aplication/json'
      }
    }
    );


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
    <Router>
      <div className="container">
          <Header title='Task Tracker'
                  onAdd={() => setShowAddTask(!showAddTask)}
                  showAdd={showAddTask}
          />

          <Route path='/' exact render={(props)=>
            <>
                 {showAddTask && <AddTask onAdd={addTask}/>}
                  {tasks.length > 0 ? 
                  <Tasks tasks={tasks} 
                        onDelite={deliteTask} 
                        onToggle={toggleReminder} /> : 'No more tasks'}
            </>
          } />     
          <Route path='/about' component={About} />       
          <Footer />
      </div>
    </Router>
  );
}

export default App;
