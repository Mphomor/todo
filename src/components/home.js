import { useState } from "react";
import '../css/add.css'
import DisplayPriority from "./displayPriority";
import TodoForm from "./todoForm";





function Home(props){

    const [name, setName] = useState('')
    const [priorityType, setPriorityType] = useState('')

    const add = (()=>{
        console.log(name)
        console.log(priorityType)



        props.add(name, priorityType);
    })

    return (

        <div className="container">
            <h1 id="top">TODO List</h1><br />
          
            <TodoForm />

        </div>

    )
}













export default Home;