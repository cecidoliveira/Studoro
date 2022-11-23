import { Button } from "../styles";
import { useToast } from '@chakra-ui/react';

function Buttons(props){
    let content,tempo;
    const toast = useToast();

    function handleContTemp(){
        if(props.TempPomodoro == "00:00"){
            toast({
                description: "Defina tipo de tempo para iniciar a contagem",
                variant: 'left-accent',
                status: 'warning',
                duration: 4000,
                isClosable: true
            });
        }
        else{
            ContTemp(props.setTemp,props.TempPomodoro)
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
                tempo = props.Temp <10 ? '0'+props.Temp+':00' : props.Temp+':00';
                console.log('aq')
                localStorage.setItem(`${props.TempName}`,`${tempo}`)    
                break;
            case 'ContTemp':
                switch (props.ButName) {
                    case 'Iniciar':
                        handleContTemp();
                        break;
                    case 'Pausar':
                        StopContTemp();
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
        <Button onClick={handleButton}>{content}</Button>
    );
}

export default Buttons;