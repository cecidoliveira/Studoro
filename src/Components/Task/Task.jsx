import React,  { useState } from 'react';
import ModalTask from './ModalTask';
import { IconButton, ChakraProvider } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { DivTask, DivTitle, TitleTask, PahTask } from '../styles';

function Task(){
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);

    function handleDeleteSelects(){
        console.log(tasks);   
    }

    return(
        <DivTask>
            <ModalTask isOpen={open} onClose={()=> setOpen(false)} tasks={tasks} setTasks={setTasks}/>
            <DivTitle>
                <TitleTask>Tarefas</TitleTask>
                <ChakraProvider>
                    <div>
                        <IconButton onClick={()=> setOpen(true)} colorScheme='red' aria-label='Add Task' fontSize='25px' icon={<AddIcon/>} />
                        <IconButton onClick={handleDeleteSelects} colorScheme='red' aria-label='Delete Tasks' fontSize='25px' icon={<DeleteIcon/>} />
                    </div>
                </ChakraProvider>
            </DivTitle>
            <div>
                {tasks.map(tk => <PahTask key={tk.id}>{tk.content}</PahTask>)}
            </div>

        </DivTask>
    );
}
export default Task;