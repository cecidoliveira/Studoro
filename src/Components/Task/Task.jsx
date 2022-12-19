import { useEffect, useState } from 'react';
import ModalTask from './ModalTask';
import { IconButton, Checkbox, ChakraProvider, useToast } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { DivButtons, DivList, DivTask, DivTaskHeader, Title } from './stylesTask';
import SelectTdTasks from './SelectTdTasks';


function Task(){
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectTdsTasks,setSelectTdsTasks] = useState([false,false])
    const toast = useToast();
    
    useEffect(()=> console.log(tasks),[tasks])

    function handleDeleteSelects(){
        let select = tasks.some(tk => tk.ischecked == true);

        if(select){
            let novatask = tasks.filter( tk => tk.ischecked != true);
            setTasks(novatask);
        }else{
            toast({
                description: "Selecione uma tarefa para excluir",
                variant: 'left-accent',
                status: 'warning',
                duration: 2000,
                isClosable: true
            });
        }
    }
    
    function handleSelects(id) {
        let check = tasks.map((tk) => tk.id == id ? {id: tk.id, content: tk.content, ischecked: !tk.ischecked} : {id: tk.id, content: tk.content, ischecked: tk.ischecked});
        setTasks(check);

        const checked = tasks.filter((tk)=> tk.ischecked == true)
        checked.length > 1 ? setSelectTdsTasks([true, selectTdsTasks[1]]) : setSelectTdsTasks([false, selectTdsTasks[1]])
    }
    

    return(
        <ChakraProvider>
            {selectTdsTasks[0] == true && selectTdsTasks[1] == false ? <SelectTdTasks setSelectTdsTasks={setSelectTdsTasks} tasks={tasks} setTasks={setTasks}/> : <></>}
            <DivTask>
                <ModalTask isOpen={open} onClose={()=> setOpen(false)} tasks={tasks} setTasks={setTasks}/>
                
                <DivTaskHeader>
                    <Title>Tarefas</Title>
                        <DivButtons>
                            <IconButton onClick={()=> setOpen(true)} colorScheme='red' aria-label='Add Task' fontSize='25px' icon={<AddIcon/>} />
                            <IconButton onClick={handleDeleteSelects} colorScheme='red' aria-label='Delete Tasks' fontSize='25px' icon={<DeleteIcon/>} />
                        </DivButtons>
                </DivTaskHeader>
                
                <DivList>
                    {tasks.map(tk => 
                        <Checkbox colorScheme='red' key={tk.id} isChecked={tk.ischecked} onChange={() => handleSelects(tk.id)}>
                            {tk.content}
                        </Checkbox>
                    )}
                </DivList>
            </DivTask>
        </ChakraProvider>
    );
}
export default Task;