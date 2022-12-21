import { useEffect } from 'react';

import { useTaskStore } from '../../Store/Task';
import { DivSelectTasks } from "./stylesTask";


function SelectTdTasks(){
    const {toggleSelect, tdsTask, activeTdsTasks} = useTaskStore(state => state)
    
    useEffect(()=>{
        activeTdsTasks()
    },[])

    return(
        <DivSelectTasks>
            <p>Selecionar Todas as Tasks ?</p>
            <button onClick={tdsTask}> Sim </button>
            <button onClick={toggleSelect}> Não </button>
        </DivSelectTasks>
    )
}

export default SelectTdTasks;