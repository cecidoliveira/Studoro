import Conf from "./Conf/Conf";
import Temp from "./Count/Temp";
import Task from "./Task/Task";
import { useState } from "react";
import { DivConfConteiner, DivConteiner, SectionApp } from "./styles"

function App() {
  const [isDisabled, setIsDisabled] = useState(['Pomodoro-Curto','Pausa Curta-Curto','Pausa Longa-Curto']);
  return (
    <SectionApp>
      <Task/>
      <DivConteiner>
        <Temp/>
      </DivConteiner>
    
      <DivConfConteiner>
        <Conf ConfName='Pomodoro'  TimeCurto='25' TimeLongo='30' isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
        <Conf ConfName='Pausa Curta' TimeCurto='5' TimeLongo='10' isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
        <Conf ConfName='Pausa Longa' TimeCurto='15' TimeLongo='30' isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
      </DivConfConteiner>
           
    </SectionApp>
  );
}

export default App;
