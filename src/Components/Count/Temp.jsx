import Buttons from "../Conf/Buttons";
import { DivButtons, DivCount, DivCountConteiner, DivTemp, Title } from "./stylesCount";
import { useTempStore } from '../../Store/Temp';
function Temp(){

    const {tempPomodoro} = useTempStore(state => state)
    

    return(
        <DivCountConteiner>

            <DivCount>
                <Title>Studoro</Title>

                <DivButtons>
                    <Buttons ButName='Pomodoro'  Tip='GetTemp'/>
                    <Buttons ButName='Pausa Curta' Tip='GetTemp'/>
                    <Buttons ButName='Pausa Longa' Tip='GetTemp'/>
                </DivButtons>

                <DivTemp>
                    <p id="temp">{tempPomodoro}</p>
                </DivTemp>

                <DivButtons>
                    <Buttons ButName='Iniciar' Tip='ContTemp'/>
                    <Buttons ButName='Pausar' Tip='ContTemp'/>
                </DivButtons>
            </DivCount>
            
        </DivCountConteiner>    
    );
}

export default Temp;