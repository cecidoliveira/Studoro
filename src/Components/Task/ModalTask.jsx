import { Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalFooter, 
    ModalBody, 
    ModalCloseButton, 
    ChakraProvider, 
    FormControl, 
    Input, 
    Button,
    useToast } from '@chakra-ui/react';
import React,  { useState } from 'react';

function ModalTask({isOpen, onClose, setTasks, tasks}){
    const [value, setValue] = React.useState('')
    const [counter, setCounter] = useState(0);
    const toast = useToast();

    function handleAddTask(){
        toast({
            description: "Tarefa criada",
            variant: 'left-accent',
            status: 'success',
            duration: 2000,
            isClosable: true
        });
        setTasks([...tasks, {id: counter, content: value}]);
        setCounter(counter + 1);
        onClose();
    }

    return(
        <ChakraProvider>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Adicionar uma nova Tarefa</ModalHeader> <ModalCloseButton/>
                    
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input value={value} focusBorderColor='gray' onChange={(event) => setValue(event.target.value)} placeholder='tarefa' />
                            </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={handleAddTask}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>  
        </ChakraProvider>
    );
}

export default ModalTask;