import { IconButton, Checkbox, useToast } from '@chakra-ui/react';
import { AddIcon, DeleteIcon} from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

import { DivButtons, DivList, DivTask, DivTaskHeader, Title } from './stylesTask';
import { useTaskStore } from '../../Store/Task';
import SelectTdTasks from './SelectTdTasks';
import ModalTask from './ModalTask';

function Task(){
    const [isMob, setIsMob] = useState(false);
    useEffect(()=> {window.screen.width < 450 ? setIsMob(true) : setIsMob(false)},[]);
    const [open, setOpen] = useState(false);
    const toast = useToast();

    const {tasks, isSelect, removeTask, checkTask, selectTasks, toggleSelect} = useTaskStore(state => state)
    

    function handleDeleteSelects(){
        let select = tasks.some(tk => tk.ischecked == true);
        
        if(select){
            removeTask()
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

    function handleCheck(id) {
        checkTask(id)

        const checked = tasks.filter((tk)=> tk.ischecked == true)
        if(checked.length > 3 && isSelect === false && isMob === false){
            toggleSelect() 
        }
    }

    return(
        <DivTask>
        {selectTasks && <SelectTdTasks/>}
        <ModalTask isOpen={open} onClose={()=> setOpen(false)}/>
        
        <DivTaskHeader>
            <Title>Tarefas</Title>
                <DivButtons>
                    <IconButton onClick={()=> setOpen(true)} colorScheme='red' aria-label='Add Task' fontSize='25px' icon={<AddIcon/>} />
                    <IconButton onClick={handleDeleteSelects} colorScheme='red' aria-label='Delete Tasks' fontSize='25px' icon={<DeleteIcon/>} />
                </DivButtons>
        </DivTaskHeader>
        
        <DivList>
            {tasks.map(tk => 
            <Checkbox colorScheme='red' key={tk.id} isChecked={tk.ischecked} onChange={()=> handleCheck(tk.id)}>
                {tk.content}
            </Checkbox>)}
        </DivList>
    </DivTask>          
    );
}
export default Task;