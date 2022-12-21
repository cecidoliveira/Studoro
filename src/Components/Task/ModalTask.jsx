import { Modal, ModalOverlay, ModalContent, ModalHeader, 
 ModalFooter, ModalBody, ModalCloseButton, FormControl, 
 Input, Button, useToast } from '@chakra-ui/react';
 import React,  { useState } from 'react';

 import { useTaskStore } from '../../Store/Task';


function ModalTask({isOpen, onClose}){
    const { addTask } = useTaskStore(state => state)

    const [value, setValue] = React.useState('')
    const [counter, setCounter] = useState(0);
    const toast = useToast();

    
    function handleAddTask(){
        if(value == ' '||value == ''){
            toast({
                description: "Tarefa vazia",
                variant: 'left-accent',
                status: 'error',
                duration: 2000,
                isClosable: true
            });
        }
        else{   
            toast({
                description: "Tarefa criada",
                variant: 'left-accent',
                status: 'success',
                duration: 2000,
                isClosable: true
            });
            addTask({id: counter, content: value, ischecked: false});
            setCounter(counter + 1);
        }
        onClose();
    }

    
    return(
        <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay h='100%' w='100%'/>
                <ModalContent>
                    
                    <ModalHeader>Adicionar uma nova Tarefa</ModalHeader> <ModalCloseButton/>
                    
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input value={value} focusBorderColor='gray' size='lg' onChange={(event) => setValue(event.target.value)} placeholder='escreva sua tarefa' />
                            </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' w='35%' fontSize='22px' onClick={handleAddTask}>Adicionar</Button>
                    </ModalFooter>

                </ModalContent>
        </Modal>  
    );
}

export default ModalTask;