import Buttons from "./Buttons";
import { DivConf, Title } from "./stylesConf";

function Conf({ConfName, TimeCurto, TimeLongo, isDisabled, setIsDisabled}){
    
    return(
        <DivConf>
            <Title>{ConfName}</Title>

            <div>
                <Buttons ButName='Curto' isDisabled={isDisabled} setIsDisabled={setIsDisabled} Temp={TimeCurto} TempName={ConfName} Tip='SetTemp' />
                <Buttons ButName='Longo' isDisabled={isDisabled} setIsDisabled={setIsDisabled} Temp={TimeLongo} TempName={ConfName} Tip='SetTemp'/>
            </div>
            
        </DivConf>
    );
}

export default Conf;