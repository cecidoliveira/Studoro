import { useState } from "react";
import Buttons from "../Conf/Buttons";
import { DivButtons, DivCount, DivCountConteiner, DivTemp, Title } from "./stylesCount";
// import { DivTemp, DivTempCont, DivTempConteiner, TitleTemp } from "../styles";

function Temp(){

    const [tempPomodoro, setTempPomodoro] = useState("00:00");
    

    return(
        <DivCountConteiner>

            <DivCount>
                <Title>Studoro</Title>

                <DivButtons>
                    <Buttons ButName='Pomodoro' setTemp={setTempPomodoro} Tip='GetTemp'/>
                    <Buttons ButName='Pausa Curta' setTemp={setTempPomodoro} Tip='GetTemp'/>
                    <Buttons ButName='Pausa Longa' setTemp={setTempPomodoro} Tip='GetTemp'/>
                </DivButtons>

                <DivTemp>
                    <p id="temp">{tempPomodoro}</p>
                </DivTemp>

                <DivButtons>
                    <Buttons ButName='Iniciar' select_cont={false} setTemp={setTempPomodoro} tempPomodoro={tempPomodoro} Tip='ContTemp'/>
                    <Buttons ButName='Pausar' select_cont={true} Tip='ContTemp'/>
                </DivButtons>
            </DivCount>
            
        </DivCountConteiner>    
    );
}

export default Temp;