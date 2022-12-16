import { useEffect } from "react";
import { DivSelectTasks } from "./stylesTask";

function SelectTdTasks({setSelectTdsTasks}){
    useEffect(()=>{
        setTimeout(()=> setSelectTdsTasks([false,false]), 10000)
    },[]);
    
    function handleTdTask(){

    }

    return(
        <DivSelectTasks>
            <p>Selecionar Todas as Tasks ?</p>
            <button onClick={handleTdTask}>Sim</button>
            <button onClick={()=> setSelectTdsTasks([false,true])}>Não</button>
        </DivSelectTasks>
    )
}

export default SelectTdTasks;