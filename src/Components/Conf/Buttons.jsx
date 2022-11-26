import { Button } from "../styles";
import { useToast } from '@chakra-ui/react';
import { useState } from "react";


function Buttons(props){
    let content;
    let bt_iniciar = document.querySelector(`#${props.Tip}-Iniciar`);
    let bt_pausar = document.querySelector(`#${props.Tip}-Pausar`);

    const toast = useToast();

    function handleContTemp(){
        if(props.tempPomodoro == "00:00"){
            toast({
                description: "Defina tipo de tempo para iniciar a contagem",
                variant: 'left-accent',
                status: 'warning',
                duration: 4000,
                isClosable: true
            });
        }
        else{
           bt_iniciar.disabled = true;
           bt_pausar.disabled = false;
           
        }
    }


    function handleButton(){
        switch (props.Tip) {
            case 'GetTemp':
                switch (props.ButName) {
                    case 'Pomodoro':
                        props.setTemp(localStorage.getItem(`${props.ButName}`)||'25:00')
                        break;
                    case 'Pausa Curta':
                        props.setTemp(localStorage.getItem(`${props.ButName}`)||'05:00')
                        break;
                    case 'Pausa Longa':
                        props.setTemp(localStorage.getItem(`${props.ButName}`)||'15:00')
                        break;
                }
                break;

            case 'SetTemp':
                    let tempo = props.Temp <10 ? '0'+props.Temp+':00' : props.Temp+':00';
                    console.log('aq')
                    localStorage.setItem(`${props.TempName}`,`${tempo}`)    
                break;

            case 'ContTemp':

                switch (props.ButName) {
                    case 'Iniciar':
                        handleContTemp();
                        break;
                    case 'Pausar':
                        bt_iniciar.disabled = false;
                        bt_pausar.disabled = true;
                        break;
                }
                break;
        }
    }

    if(props.Temp != undefined){
        content = `${props.ButName} (${props.Temp} min)`;
    }else{
        content = `${props.ButName}`;
    }

    return(
        <Button onClick={handleButton} id={`${props.Tip}-${props.ButName}`}>{content}</Button>
    );
}

export default Buttons;