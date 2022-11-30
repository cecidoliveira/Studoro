import Conf from "./Conf/Conf";
import Temp from "./Count/Temp";
import Task from "./Task/Task";
import { SectionApp } from "./styles"

function App() {

  return (
    <SectionApp>
      <Task/>

      <Temp/>
      
      <Conf ConfName='Pomodoro' TimeCurto='25' TimeLongo='30' />
      <Conf ConfName='Pausa Curta' TimeCurto='5' TimeLongo='10' />
      <Conf ConfName='Pausa Longa' TimeCurto='15' TimeLongo='30'/>
           
    </SectionApp>
  );
}

export default App;
