import { DivSelectTasks } from "./stylesTask";

function SelectTdTasks({tasks, setTasks, setSelectTdsTasks}){
    
    
    function handleTdTask(){
        let check = tasks.map((tk)=> tk.ischecked === true ? {id: tk.id, content: tk.content, ischeked: tk.ischecked} : {id: tk.id, content: tk.content, ischeked: !tk.ischecked});
        setTasks(check);
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