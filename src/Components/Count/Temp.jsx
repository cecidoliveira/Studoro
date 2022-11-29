import {  useEffect, useState } from "react";
import Buttons from "../Conf/Buttons";
import { DivTemp, DivTempCont, DivTempConteiner, TitleTemp } from "../styles";

function Temp(){

    const [tempPomodoro, setTempPomodoro] = useState("00:00");
    

    return(
        <DivTempConteiner>
            <TitleTemp>Studoro</TitleTemp>
            <DivTemp>
                <Buttons ButName='Pomodoro' setTemp={setTempPomodoro} Tip='GetTemp'/>
                <Buttons ButName='Pausa Curta' setTemp={setTempPomodoro} Tip='GetTemp'/>
                <Buttons ButName='Pausa Longa' setTemp={setTempPomodoro} Tip='GetTemp'/>
            </DivTemp>
            <DivTempCont>
                <p id="temp">{tempPomodoro}</p>
            </DivTempCont>
            <DivTemp>
                <Buttons ButName='Iniciar' setTemp={setTempPomodoro} tempPomodoro={tempPomodoro} Tip='ContTemp'/>
                <Buttons ButName='Pausar' Tip='ContTemp'/>
            </DivTemp>
        </DivTempConteiner>    
    );
}

export default Temp;