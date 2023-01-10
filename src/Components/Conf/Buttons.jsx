import { useToast } from '@chakra-ui/react';

import { contTemp, stopContTemp } from "../Count/Cont";
import { Button } from './stylesConf';
import { useTempStore } from '../../Store/Temp';

function Buttons({ButName, Tip, Temp, TempName}){
    let content,active;
    const toast = useToast();   
    const {setTempPomodoro, pom, pLonga, pCurta, tempPomodoro, defpLonga, defPom, defpCurta, isDisabled, setIsDisabled} = useTempStore(state => state)

    function handleButton(){
        switch (Tip) {
            case 'GetTemp':
                    stopContTemp();
                    switch (ButName) {
                        case 'Pomodoro':
                            setTempPomodoro(pom)
                        break;
                        case 'Pausa Curta':
                            setTempPomodoro(pCurta)
                            break;
                        case 'Pausa Longa':
                            setTempPomodoro(pLonga)
                            break;
                    }
                break;

            case 'SetTemp':
                    let tempo = Temp < 10 ? '0'+ Temp + ':00' : Temp + ':00';
                    switch (TempName) {
                        case 'Pomodoro':
                            defPom(tempo);
                        break;
                        case 'Pausa Curta':
                            defpCurta(tempo);
                            break;
                        case 'Pausa Longa':
                            defpLonga(tempo);
                            break;
                    }
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
                                contTemp({tempPomodoro, setTempPomodoro});
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