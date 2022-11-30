import { useToast } from '@chakra-ui/react';
import { contTemp, stopContTemp } from "../Count/Cont";

function Buttons(props){
    let content;

    const toast = useToast();

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
                    stopContTemp();
                    let tempo = props.Temp <10 ? '0'+props.Temp+':00' : props.Temp+':00';
                    localStorage.setItem(`${props.TempName}`,`${tempo}`)    
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

    if(props.Temp != undefined){
        content = `${props.ButName} (${props.Temp} min)`;
    }else{
        content = `${props.ButName}`;
    }

    return(
        <button onClick={handleButton} id={`${props.Tip}-${props.ButName}`}>{content}</button>
    );
}

export default Buttons;