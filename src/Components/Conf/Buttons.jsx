import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { contTemp, stopContTemp } from "../Count/Cont";
import { Button } from './stylesConf';

function Buttons({ButName, setTemp, Tip, tempPomodoro, isDisabled, setIsDisabled, Temp, TempName}){
    let content,active;
    const toast = useToast();   
    
    useEffect(()=>{
        localStorage.clear();
    },[]);

    function handleButton(){
        switch (Tip) {
            case 'GetTemp':
                    stopContTemp();
                    switch (ButName) {
                        case 'Pomodoro':
                            setTemp(localStorage.getItem(`${ButName}`)||'25:00')
                            break;
                        case 'Pausa Curta':
                            setTemp(localStorage.getItem(`${ButName}`)||'05:00')
                            break;
                        case 'Pausa Longa':
                            setTemp(localStorage.getItem(`${ButName}`)||'15:00')
                            break;
                    }
                break;

            case 'SetTemp':
                    let tempo = Temp < 10 ? '0'+ Temp + ':00' : Temp + ':00';
                    localStorage.setItem(`${TempName}`,`${tempo}`);
                    handleButDisabled()  
                break;

            case 'ContTemp':
                    switch (ButName) {
                        case 'Iniciar':
                            if(tempPomodoro == "00:00"){
                                toast({
                                    description: "Defina tipo de tempo para iniciar a contagem",
                                    variant: 'left-accent',
                                    status: 'warning',
                                    duration: 4000,
                                    isClosable: true
                                });
                            }
                            else{
                                contTemp({setTemp, tempPomodoro});
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
        switch (ButName) {
            case 'Curto':
                val = isDisabled.filter(dsbl => dsbl != `${TempName}-Longo`);
                val = [...val, `${TempName}-Curto`];
                setIsDisabled(val);
                break;

            case 'Longo':
                val = isDisabled.filter(dsbl => dsbl != `${TempName}-Curto`);
                val = [...val, `${TempName}-Longo`];
                setIsDisabled(val);
                break;

        }
        
    }

    if(Temp != undefined){
        content = `${ButName} (${Temp} min)`;
        active = isDisabled.some(dsbl => dsbl == `${TempName}-${ButName}`)
    }else{
        content = `${ButName}`;
    } 

    return(
        <Button onClick={handleButton} select={active || false} disabled={active || false}>{content}</Button>
    );
}

export default Buttons;