import { ChakraProvider } from '@chakra-ui/react';

import Conf from "./Conf/Conf";
import Temp from "./Count/Temp";
import Task from "./Task/Task";
import { DivConfConteiner, DivConteiner, SectionApp } from "./styles"


function App() {
  return (
    <ChakraProvider>
      <SectionApp>   
        <Task/>
        
        <DivConteiner>
          <Temp/>
        </DivConteiner>
      
        <DivConfConteiner>
          <Conf ConfName='Pomodoro'  TimeCurto='25' TimeLongo='30' />
          <Conf ConfName='Pausa Curta' TimeCurto='5' TimeLongo='10' />
          <Conf ConfName='Pausa Longa' TimeCurto='15' TimeLongo='30' />
        </DivConfConteiner>
            
      </SectionApp>
    </ChakraProvider>
  );
}

export default App;
