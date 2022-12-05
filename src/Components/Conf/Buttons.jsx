import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { contTemp, stopContTemp } from "../Count/Cont";
import { Button } from './stylesConf';

function Buttons(props){
    let content,active;
    const toast = useToast();   
    
    useEffect(()=>{
        localStorage.clear();
    },[]);

    function handleButton(){
        switch (props.Tip) {
            case 'GetTemp':
                    stopContTemp();
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
                    localStorage.setItem(`${props.TempName}`,`${tempo}`);
                    handleButDisabled()  
                break;

            case 'ContTemp':
                    switch (props.ButName) {
                        case 'Iniciar':
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
                                contTemp({setTemp: props.setTemp, tempPom: props.tempPomodoro});
                            }
                            break;

                        case 'Pausar':
                            stopContTemp();
                            break;
                    }

                break;
        }
    }

    function handleButDisabled() {
        let val;
        switch (props.ButName) {
            case 'Curto':
                val = props.isDisabled.filter(dsbl => dsbl != `${props.TempName}-Longo`);
                val = [...val, `${props.TempName}-Curto`];
                props.setIsDisabled(val);
                break;

            case 'Longo':
                val = props.isDisabled.filter(dsbl => dsbl != `${props.TempName}-Curto`);
                val = [...val, `${props.TempName}-Longo`];
                props.setIsDisabled(val);
                break;

        }
        
    }

    if(props.Temp != undefined){
        content = `${props.ButName} (${props.Temp} min)`;
        active = props.isDisabled.some(dsbl => dsbl == `${props.TempName}-${props.ButName}`)
    }else{
        content = `${props.ButName}`;
    } 

    return(
        <Button onClick={handleButton} select={active || false} disabled={active || false}>{content}</Button>
    );
}

export default Buttons;