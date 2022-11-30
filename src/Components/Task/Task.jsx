import React,  { useState } from 'react';
import ModalTask from './ModalTask';
import { IconButton, Checkbox, ChakraProvider, useToast } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { DivButtons, DivList, DivTask, DivTaskHeader, Title } from './stylesTask';


function Task(){
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const toast = useToast();

    function handleDeleteSelects(){
        console.log(tasks);
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
        let check = tasks.map((tk)=>{
            if(tk.id == id){
                console.log('aqui')
                return {id: tk.id, content: tk.content, ischecked: !tk.ischecked}
            }else{
                return {id: tk.id, content: tk.content, ischecked: tk.ischecked}
            }
        });
        setTasks(check);
    }
    

    return(
        <ChakraProvider>
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