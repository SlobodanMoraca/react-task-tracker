import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';


function App() {

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


  
  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
