import Buttons from "./Buttons";
import { DivConf, Title } from "./stylesConf";

function Conf({ConfName, TimeCurto, TimeLongo}){
    
    return(
        <DivConf>
            <Title>{ConfName}</Title>

            <div>
                <Buttons ButName='Curto' Temp={TimeCurto} TempName={ConfName} Tip='SetTemp' />
                <Buttons ButName='Longo' Temp={TimeLongo} TempName={ConfName} Tip='SetTemp'/>
            </div>
            
        </DivConf>
    );
}

export default Conf;